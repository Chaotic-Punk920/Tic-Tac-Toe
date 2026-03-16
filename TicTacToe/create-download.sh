#!/bin/bash

# Create a downloadable ZIP file of the TicTacToe game
# Usage: ./create-download.sh

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
FILENAME="TicTacToe-Offline.zip"
OUTPUT_PATH="$SCRIPT_DIR/$FILENAME"

echo "Creating downloadable package: $FILENAME"

# Create zip file with all game files
cd "$SCRIPT_DIR"
zip -q "$FILENAME" \
    index.html \
    style.css \
    script.js \
    manifest.json \
    service-worker.js \
    README.md

if [ -f "$OUTPUT_PATH" ]; then
    SIZE=$(du -h "$OUTPUT_PATH" | cut -f1)
    echo "✓ Successfully created: $FILENAME ($SIZE)"
    echo "  Location: $OUTPUT_PATH"
    echo "  You can now download this file to share or backup the game"
else
    echo "✗ Failed to create package"
    exit 1
fi
