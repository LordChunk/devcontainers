#!/bin/bash

configuration="$1"
configurationPath="../configurations/$configuration.json"
env_file=$(
  jq -jr 'to_entries |
    map(
      if . == first then
        "\(.key)=\(.value |
          if type == "array" then
            join(" ")
          else
            tostring
          end)"
      else
        " --build-arg \(.key)=\(.value |
          if type == "array" then
            join(" ")
          else
            tostring
          end)"
      end
    )' "$configurationPath"
)


dockerfile=$(cat "../templates/Dockerfile")

# Write env file to name of config
echo "$env_file" >"../env."$configuration
