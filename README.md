# Welcome to template-gatsby-theme
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/smerth/template-gatsby-theme#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/smerth/template-gatsby-theme/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/smerth/template-gatsby-theme)](https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE)



> Starter template for developing and publishing gatsby themes. The project is structured as a monorepo with a folder for GatsbyJS themes and a folder for a GatsbyJS Demo site to test the themes you develop. Comes with semantic-release, lerna and github actions to help streamline workflow.



## Overview

TODO

- 3 supported workflows
- 2 github actions
- Key configurations



## Using this template

Follow these **steps in order** for a quick and hopefully painless setup:

### Create a new repository from template

- @ GitHub - click on the `use this template` button to create a new repository from this repo.
- Clone your new repository to your local dev environment.

### Edit project information

- @ project root `package.json` edit author field

- Use your IDE to **search and replace** the following items <u>across the whole code base</u>:

  - [ ] `smerth/template-gatsby-theme` replace with `YOUR_ORGANIZATION/YOUR_REPOSITORY_NAME`
  - [ ] `smerth/gatsby-theme-demo` replace with `YOUR_ORGANIZATION/YOUR_GATSBY_THEME_NAME` 
  - [ ] `ORGANIZATION` replace with your `YOUR_ORGANIZATION`

- @ `packages` rename the demo theme folder with `YOUR_GATSBY_THEME_NAME`

- Edit the remaining repository specific fields in the `package.json` files located at:  
  @`root` 

  - [ ] name
  - [ ] description
  - [ ] keywords

  @`packages/YOUR_GATSBY_THEME_NAME`

  - [ ] description
  - [ ] keywords

### Setup authentication

- @ GitHub, create a Personal Access Token (PAT). This template is set up to support developing a Gatsby Theme which uses a private GitHub package.  If you plan on using a private GitHub package you must give the PAT you generate  permissions to install and to write private packages. 

- @ GitHub add the PAT as a secret to your repository.  Name it  `NPM_TOKEN` .



### First commit and publish

TODO: Update This Section...

- Install packages. Note, this is monorepo with the pm (package manager) set to yarn.  That is because we want to use workspaces.  But to avoid confusion between cloud environments, that run npm to install packages and your local environment, the script  `yarn setup` runs `npm install`. So your repo always has a `package-json.lock` file instead of a `yarn-json.lock` file.

  run`yarn setup`

- Check the theme is working by running`yarn develop` or `yarn build`.

- Commit and push changes.  Run `yarn commit` . This will invoke the `semantic-cli` series of prompts, choose `refactor` and for description `first commit.`

- Publish the first version of your theme. In future, packages will be published by GitHub Actions when your push to one of your distribution channels (main, next, etc...) **However, your must publish the first package manually.**  To publish the first time run `yarn pub`



## Private packages

TODO: Update This Section...

If you are going to be using private packages in your Gatsby Theme, now is a good time to install one and check to see if the Theme publishes.



## Running tests

TODO: Update This Section...

Walk through the steps in the three semantic release workflows.   It is useful to turn off the `checks.yaml` workflow while you test out your new repository.



## Author

**Stephen Merth <stephen.merth@gmail.com> (https://smerth.github.io/)**

* Website: http://smerth.github.io
* Twitter: [@StephenMerth](https://twitter.com/StephenMerth)
* Github: [@smerth](https://github.com/smerth)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/smerth/template-gatsby-theme/issues). You can also take a look at the [contributing guide](https://github.com/smerth/template-gatsby-theme/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## License

Copyright © 2022 [Stephen Merth <stephen.merth@gmail.com> (https://smerth.github.io/)](https://github.com/smerth).

This project is [MIT](https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE) licensed.

