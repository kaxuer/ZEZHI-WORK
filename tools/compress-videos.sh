#!/bin/sh
# Usage: sh tools/compress-videos.sh <folder>   (needs ffmpeg)
# Compresses every video under <folder> to 720p H.264 (usually 5-12MB for 10-20s) -> *.web.mp4
# Check each result is under 25MB, then delete the originals before uploading to GitHub.
find "$1" -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.m4v' \) ! -name '*.web.mp4' | while read -r f; do
  out="${f%.*}.web.mp4"
  ffmpeg -y -i "$f" -vf "scale=-2:'min(720,ih)'" -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 96k -movflags +faststart "$out"
  echo "$out: $(du -h "$out" | cut -f1)"
done
