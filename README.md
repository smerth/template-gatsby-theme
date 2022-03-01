# template-gatsby-theme

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/smerth/template-GatsbyJS-theme#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/smerth/template-GatsbyJS-theme/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/smerth/template-gatsby-theme)](https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE)

> A starter template for developing and publishing GatsbyJS themes. The project is structured as a monorepo with a folder for GatsbyJS themes and a folder for a GatsbyJS Demo site to test the themes you develop. Comes with semantic-release, lerna and github actions to help streamline your publishing workflow.

## Features

- Monorepo - develop themes and test in a gatsby site in one repo
- Semantic Release CLI - run `yarn commit` to generate a server compliant commit
- Github Action to automate publishing theme packages
- Github Action to automate running tests
- Packages are published on pull-request merges making life easier for the maintainer
- Configured to support using and publishing private packages
- Supports using `semantic-release` workflows, check the [docs folder](docs)

## Use this template

Follow these steps **in order** to quickly setup your new project

### Create a repository from the template

On the [GitHub page for this repository](https://github.com/smerth/template-gatsby-theme), click the `use this template` button to create a new repository from this template. Clone your new repository to your local dev environment.

### Update repository author

At `package.json` in the repository root update the **author** property with your own information

### Search and replace text

Open your new repository in your favorite IDE and **search and replace** the following items everywhere they occur with the exception of `package-lock` files and this `README.md` file:

| SEARCH                | REPLACE                |
| --------------------- | ---------------------- |
| smerth                | YOUR_ORGANIZATION_NAME |
| template-gatsby-theme | YOUR_REPOSITORY_NAME   |
| gatsby-theme-demo     | YOUR_THEME_NAME        |

### Review package.json files

The key changes have been made in order to start developing your theme however its a good idea to review and edit the `package.json` files found at the root of the repository and the theme and edit any fields as necessary. For example: 

- description
- keywords

Remember, if you want your Gatsby theme to be found at the [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins/) you need to fill in [appropriate keywords](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/submit-to-plugin-library/#publishing-a-plugin-to-the-library).

### Generate readme files

The readme files at the project root and the theme root should be updated. 

If run `yarn readme` it will generate a `README.md` file at the repository root, replacing this `README.md` file.  You can cd into the theme folder and run `npx readme-md-generator` to generate a readme there.

Find out more about [readme-md-generator](https://github.com/kefranabg/readme-md-generator).

### Setup authentication

This template supports the use of private GitHub packages. In order to install private GitHub packages and publish a private package to GitHub you will need to create a Personal Access Token and give it permissions to install and write private packages.

Add the  Personal Access Token as a secret to your repository. Name the secret: `NPM_TOKEN` .

### Fist commit, push,  and publish

In future you will publish packages by creating pull requests against the supported branches, according to the workflows outlined in the docs folder. When a pull request is merged, a GitHub action will handle versioning and publish a release. However **a first package must be published manually** to start the ball rolling. 

To accomplish this you will need to: install dependancies, add, commit, and push the changes, and publish a package through lerna.  Luckily there is a script for that. 

```bash
yarn first-commit
```



## Important considerations

### NPM versioning

Be aware of the following NPM versioning behavior:  

If you make a breaking change and your package is in major version **zero** (eg. `v0.x.y`), the semver rules are shifted over, so *breaking changes* happen in `v0.x.0`, and *features & patches* happen in `v0.0.y`.

Therefore, a breaking change in a package that is in 0.x.y, will only bump *x*.

From the [npm docs](https://docs.npmjs.com/cli/v6/using-npm/semver#:~:text=^0.2.3 %3A%3D >%3D0.2.3 <0.3.0):

> ^1.2.3 := >=1.2.3 <2.0.0
> ^0.2.3 := >=0.2.3 <0.3.0
> ^0.0.3 := >=0.0.3 <0.0.4

This template sets the starting version at `1.0.0`. This is done in the `lerna.json` config file at the repository root.  If you want to start a project with version `0.0.0` just set that version in the `lerna.json` config file prior to running `yarn first-commit` (prior to your first commit and  publishing your first package.)  Then you can make as many breaking changes as you want in getting your theme up and running.  When you are ready you can manually bump the version to `1.0.0` in the `lerna.json` file.  

It follows that if you get into trouble managing versioning in the future you can set the version in the `lerna.json` file at any point and the next time the GitHub publish action runs `semantic-release` will pick it up and move on from there.

### Test private packages

If you plan on using a private package in your theme now is a good time to test it out.  Install a private package, use it in your theme, commit the changes, create a pull request, watch the package publish.  If there are any issues, now is a good time to troubleshoot them.

### Test action and test script

The GitHub `test-on-pull-request.yaml` action runs the test script defined in `@root/package.json` you can implement any script you like here to accomodate your testing strategy.

If you are not implementing testing, or testing out this template to see if you want to use it, you can turn off this action on GitHub to avoid having to wait for it to run.

This action runs on pull-requests and updates. However, you can merge a pull request even if this action fails.  It is possible to prevent a maintainer from merging the pull-request if the action fails but that requires further work.

### Review the supported workflows

Once you have set up your project it may be useful to run through one of the workflows in the docs folder

- [Publishing on distribution channels](docs/publishing-on-distribution-channels.md)
- [Publishing pre-releases](docs/publishing-pre-releases.md)
- [Publishing maintenance releases](docs/publishing-maintenance-releases.md)

These workflows come from the [semantic-release](https://github.com/semantic-release/semantic-release/tree/master/docs/recipes/release-workflow) repository with some notes added that are specific to using this template.

You should be able to follow any of these workflows.  The main thing to remember is that the GitHub publish action is triggered by a pull-request from a supported branch (as opposed to a commit, as in the original semantic-release docs.)

## Author

**Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>)**

- Website: <http://smerth.github.io>
- Twitter: [@StephenMerth](https://twitter.com/StephenMerth)
- Github: [@smerth](https://github.com/smerth)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/smerth/template-GatsbyJS-theme/issues). You can also take a look at the [contributing guide](https://github.com/smerth/template-GatsbyJS-theme/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2022 [Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>)](https://github.com/smerth).

This project is [MIT](https://github.com/smerth/template-GatsbyJS-theme/blob/master/LICENSE) licensed.
