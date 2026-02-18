import { execSync } from "child_process";
import { existsSync } from "fs";

const input = "/vercel/share/v0-project/public/videos/hero-background.mp4";
const output = "/vercel/share/v0-project/public/videos/hero-background-trimmed.mp4";

if (!existsSync(input)) {
  console.error("Input file not found:", input);
  process.exit(1);
}

try {
  // Trim the first 5 seconds using ffmpeg with re-encoding for a clean cut
  execSync(
    `ffmpeg -y -i "${input}" -ss 5 -c:v libx264 -preset fast -crf 18 -an "${output}"`,
    { stdio: "inherit" }
  );
  console.log("Video trimmed successfully:", output);
} catch (err) {
  console.error("ffmpeg failed, trying copy mode...");
  try {
    // Fallback: stream copy (faster but keyframe-dependent)
    execSync(
      `ffmpeg -y -ss 5 -i "${input}" -c copy -an "${output}"`,
      { stdio: "inherit" }
    );
    console.log("Video trimmed (copy mode) successfully:", output);
  } catch (err2) {
    console.error("Both methods failed:", err2.message);
    process.exit(1);
  }
}
