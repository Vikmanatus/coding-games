#!/bin/bash

# URL of the GitHub release file
RELEASE_URL="https://github.com/jmerle/cg-local-app/releases/download/1.3.0/cg-local-app-1.3.0.jar"

# Target folder where the file should be downloaded
TARGET_FOLDER="./binaries/"

# Extract the original file name from the URL
ORIGINAL_FILE_NAME=$(basename $RELEASE_URL)

# Full path for the output file
OUTPUT_FILE="${TARGET_FOLDER}${ORIGINAL_FILE_NAME}"

# Create the target folder if it doesn't exist
mkdir -p $TARGET_FOLDER

# Use curl to download the file
curl -L $RELEASE_URL -o $OUTPUT_FILE

echo "Download completed: $OUTPUT_FILE"
