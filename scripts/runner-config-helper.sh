#!/bin/bash

GITLAB_CONFIG="/etc/gitlab-runner/config.toml"
KEY_OUTPUT_DIR="/etc/gitlab-runner/keys"

# Create output directory if it doesn't exist
mkdir -p "$KEY_OUTPUT_DIR"

# Extract the parameter name from TOML file
# Look for key_path = "..." pattern
# Extract all key_path parameters from TOML file
KEY_IDS=($(grep -E '^\s*key_path\s*=\s*"[^"]*"' "$GITLAB_CONFIG" | sed -E 's/^\s*key_path\s*=\s*"([^"]*)".*/\1/'))

if [ ${#KEY_IDS[@]} -eq 0 ]; then
    echo "Info: Could not find any key_path parameters in TOML file"
else
    echo "Info: Found ${#KEY_IDS[@]} key_path parameter(s) in TOML file"
fi

# Process each key
for KEY_ID in "${KEY_IDS[@]}"; do
    echo "Processing parameter: $KEY_ID"
    
    # Generate output file path
    KEY_FILENAME=$(basename "$KEY_ID")
    OUTPUT_FILE="$KEY_OUTPUT_DIR/$KEY_FILENAME"
    
    # Retrieve the value from AWS Systems Manager Parameter Store
    echo "Retrieving parameter from AWS SSM: $KEY_ID"
    if ! aws ssm get-parameter --name "/ec2/keypair/$KEY_ID" --with-decryption --query 'Parameter.Value' --output text > "$OUTPUT_FILE"; then
        echo "Error: Failed to retrieve parameter from AWS SSM for $KEY_ID"
        exit 1
    fi
    
    # Set appropriate permissions for SSH key
    chown gitlab-runner:gitlab-runner "$OUTPUT_FILE"
    chmod 600 "$OUTPUT_FILE"
    
    echo "Key saved to: $OUTPUT_FILE"
    
    # Update the TOML file to replace the parameter name with the file path
    echo "Updating TOML file for $KEY_ID..."
    sed -i "s|key_path\s*=\s*\"$KEY_ID\"|key_path = \"$OUTPUT_FILE\"|g" "$GITLAB_CONFIG"
    echo "Parameter '$KEY_ID' replaced with '$OUTPUT_FILE'"
done

# Update the TOML file to replace the parameter name with the file path
echo "Updating TOML file..."
sed -i "s|key_path\s*=\s*\"$KEY_ID\"|key_path = \"$OUTPUT_FILE\"|g" "$GITLAB_CONFIG"
# Retrieve and replace the token parameter from parameter store
TOKEN_ID=$(grep -E '^\s*token\s*=\s*"[^"]*"' "$GITLAB_CONFIG" | sed -E 's/^\s*token\s*=\s*"([^"]*)".*/\1/')
if [ -z "$TOKEN_ID" ]; then
    echo "Error: Could not find token parameter in TOML file"
    echo "Expected format: token = \"your-token\""
    exit 1
fi
echo "Retrieving parameter from AWS SSM: $TOKEN_ID"
TOKEN=$(aws ssm get-parameter --name "$TOKEN_ID" --with-decryption --query 'Parameter.Value' --output text)
if [ -z "$TOKEN" ]; then
    echo "Error: Failed to retrieve Token parameter from AWS SSM"
    exit 1
fi
sed -i "s|token\s*=\s*\"$TOKEN_ID\"|token = \"$TOKEN\"|g" "$GITLAB_CONFIG"
echo "TOML file updated successfully"
echo "Parameter '$KEY_ID' replaced with '$OUTPUT_FILE'"
echo "Parameter '$TOKEN_ID' replaced "
echo "TOML file updated successfully"