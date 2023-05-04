// Get workdir from GitHub Actions environment
const workDir = Deno.env.get("WORKDIR");
const outDir = new URL('..', import.meta.url, ).pathname;

const config = Deno.args[0];
const configPath = `/configurations/${config}.json`;

const configFile = JSON.parse(await Deno.readTextFile(workDir + configPath));
const dockerFile = await Deno.readTextFile(`${workDir}/templates/Dockerfile`);

const keys = Object.keys(configFile);
// Append all values from the config file to ARGs matching the key
let newDockerFile = dockerFile;
keys.forEach((key) => {
  const value = parseValue(configFile[key]);
  newDockerFile = newDockerFile.replace(new RegExp(`ARG ${key}`), `ARG ${key}=${value}`);
});


// Write the new Dockerfile to the root directory
await Deno.writeTextFile(`${outDir}/Dockerfile.${config}`, newDockerFile);

function parseValue(value: any): string {
  if (Array.isArray(value)) {
    return value.join(' ');
  }
  return value;
}
