// Get the directory name of the current file
const __dirname = new URL('.', import.meta.url).pathname;

const config = Deno.args[0];
const configPath = `../configurations/${config}.json`;

const configFile = JSON.parse(await Deno.readTextFile(__dirname + configPath));
const dockerFile = await Deno.readTextFile(`${__dirname}../templates/Dockerfile`);

const keys = Object.keys(configFile);
// Append all values from the config file to ARGs matching the key
let newDockerFile = dockerFile;
keys.forEach((key) => {
  const value = parseValue(configFile[key]);
  newDockerFile = newDockerFile.replace(new RegExp(`ARG ${key}`), `ARG ${key}=${value}`);
});


// Write the new Dockerfile to the root directory
await Deno.writeTextFile(`${__dirname}../Dockerfile.${config}`, newDockerFile);

function parseValue(value: any): string {
  if (Array.isArray(value)) {
    return value.join(' ');
  }
  return value;
}
