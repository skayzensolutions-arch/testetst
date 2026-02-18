import subprocess
import os
import sys

input_path = "/vercel/share/v0-project/public/videos/hero-background.mp4"
output_path = "/vercel/share/v0-project/public/videos/hero-background-trimmed.mp4"

if not os.path.exists(input_path):
    print(f"Input file not found: {input_path}")
    sys.exit(1)

print(f"Input file size: {os.path.getsize(input_path)} bytes")

try:
    # Trim the first 5 seconds - put -ss before -i for fast seek
    result = subprocess.run(
        ["ffmpeg", "-y", "-ss", "5", "-i", input_path, "-c", "copy", "-an", output_path],
        capture_output=True,
        text=True,
        timeout=120
    )
    print("stdout:", result.stdout)
    print("stderr:", result.stderr)
    
    if result.returncode != 0:
        print("Copy mode failed, trying re-encode...")
        result = subprocess.run(
            ["ffmpeg", "-y", "-i", input_path, "-ss", "5", "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-an", output_path],
            capture_output=True,
            text=True,
            timeout=300
        )
        print("stdout:", result.stdout)
        print("stderr:", result.stderr)
    
    if os.path.exists(output_path):
        print(f"Output file size: {os.path.getsize(output_path)} bytes")
        print("Video trimmed successfully!")
        
        # Replace original with trimmed version
        os.replace(output_path, input_path)
        print("Replaced original with trimmed version.")
    else:
        print("Output file was not created.")
        sys.exit(1)
        
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
