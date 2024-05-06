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

console.log(JSON.stringify(files));