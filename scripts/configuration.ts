// Get workdir from GitHub Actions environment
const workDir = Deno.env.get("WORKDIR");
const repoRoot = new URL('..', import.meta.url, ).pathname;

// Get all the files from ../configurations ending .json
const files = [];
for await (const file of Deno.readDir(`${repoRoot}/${workDir}/configurations`)) {
  if (file.name.endsWith('.json')) {
    // Strip the .json extension
    files.push(file.name.slice(0, -5));
  }
}

// Stringifying makes sure we print the JSON on one line. Multi-line seems to break the GitHub Actions output
// As seen in this commit: https://github.com/LordChunk/devcontainers/commit/3928899f38ca5786510f36c98f08638c0cec56fc
console.log(JSON.stringify(files));