#!/bin/bash
set -e

echo "🎮 TicTacToe Offline - Git Update & Download Package Creator"
echo "=============================================================="
echo ""

# Configure git
echo "📝 Configuring git..."
git config user.name "Copilot" || git config --global user.name "Copilot"
git config user.email "copilot@github.com" || git config --global user.email "copilot@github.com"
echo "✓ Git configured"
echo ""

# Stage all changes
echo "📦 Staging changes..."
git add -A
echo "✓ Changes staged"
echo ""

# Show what will be committed
echo "📋 About to commit:"
git status --short
echo ""

# Commit changes
echo "💾 Committing..."
git commit -m "Add offline support: PWA manifest, service worker, and download helpers" || echo "⚠ Commit may already exist"
echo ""

# Create ZIP package
echo "🗜️ Creating offline package..."
cd "$(dirname "$0")/TicTacToe" || cd ./TicTacToe
python3 create-download.py || bash create-download.sh
echo ""

# Verify results
if [ -f "TicTacToe-Offline.zip" ]; then
    SIZE=$(du -h TicTacToe-Offline.zip | cut -f1)
    echo "✅ All done!"
    echo ""
    echo "📊 Summary:"
    echo "  • Repository updated with offline features"
    echo "  • Download package: TicTacToe-Offline.zip ($SIZE)"
    echo "  • Location: ./TicTacToe/TicTacToe-Offline.zip"
    echo ""
    echo "📱 Users can now:"
    echo "  1. Download and extract the ZIP file"
    echo "  2. Open index.html to play offline"
    echo "  3. Install as a PWA on Chrome/Edge/mobile"
else
    echo "⚠️ Download package creation may have failed"
    exit 1
fi
