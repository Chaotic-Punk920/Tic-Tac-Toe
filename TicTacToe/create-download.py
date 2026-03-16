#!/usr/bin/env python3
"""
Create a downloadable ZIP file of the TicTacToe game.
Usage: python3 create-download.py
"""

import os
import zipfile
import sys

def create_zip():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    filename = "TicTacToe-Offline.zip"
    output_path = os.path.join(script_dir, filename)
    
    files_to_zip = [
        'index.html',
        'style.css',
        'script.js',
        'manifest.json',
        'service-worker.js',
        'README.md'
    ]
    
    try:
        print(f"Creating downloadable package: {filename}")
        
        with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for file in files_to_zip:
                file_path = os.path.join(script_dir, file)
                if os.path.exists(file_path):
                    zipf.write(file_path, arcname=file)
                    print(f"  ✓ Added {file}")
                else:
                    print(f"  ⚠ Warning: {file} not found")
        
        if os.path.exists(output_path):
            size = os.path.getsize(output_path)
            size_kb = size / 1024
            print(f"\n✓ Successfully created: {filename} ({size_kb:.1f} KB)")
            print(f"  Location: {output_path}")
            print(f"  You can now download this file to share or backup the game")
            return True
        else:
            print("✗ Failed to create package")
            return False
            
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

if __name__ == "__main__":
    success = create_zip()
    sys.exit(0 if success else 1)
