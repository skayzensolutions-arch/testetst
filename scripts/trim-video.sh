#!/bin/bash
# Trim the first 6 seconds from the hero video
ffmpeg -y -ss 6 -i /vercel/share/v0-project/scripts/original-hero.mp4 -c copy /vercel/share/v0-project/public/videos/hero-bg.mp4
echo "Video trimmed successfully. First 6 seconds removed."
ls -lh /vercel/share/v0-project/public/videos/hero-bg.mp4
