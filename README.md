# template-gatsby-theme

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/smerth/template-GatsbyJS-theme#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/smerth/template-GatsbyJS-theme/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/smerth/template-GatsbyJS-theme)](https://github.com/smerth/template-GatsbyJS-theme/blob/master/LICENSE)

> A starter template for developing and publishing GatsbyJS themes. The project is structured as a monorepo with a folder for GatsbyJS themes and a folder for a GatsbyJS Demo site to test the themes you develop. Comes with semantic-release, lerna and github actions to help streamline your publishing workflow.

## Features

TODO:

explain these:

- learna
- semantic-release cli
- GatsbyJS demo site
- multiple themes
- 3 supported workflows
- 2 github actions
- Key configurations
- use private packages
- publish private package

## Using this template

Follow these steps **in order** for a quick and hopefully painless setup:

### Create a repository from the template

On the GitHub page for this repository, click the `use this template` button to create a new repository from this template.

Clone your new repository to your local dev environment.

### Search and replace text

Open your project in your favorite IDE and <u>search and replace</u> the following items <u>**across the whole code base**</u>:

| SEARCH       | REPLACE (using these example formats)                        |
| ------------ | ------------------------------------------------------------ |
| AUTHOR       | Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>) |
| REPOSITORY   | template-GatsbyJS-theme                                      |
| THEME        | GatsbyJS-theme-demo                                          |
| ORGANISATION | smerth                                                       |

### Review package.json files

Review and edit the package.json files found at the root of the project and the theme and edit any fields as necessary.  For example: description, keywords,...

### Generate readme files

The readme files at the project root and the theme root should be updated. running `yarn readme` will generate a readme file at the project root.

### Setup authentication

This template supports developing a GatsbyJS theme which may use a private GitHub package.  In order to install private GitHub packages and publish a private package to GitHub you will need to create a Personal Access Token (PAT) and give it permissions to install and write private packages.

Add the PAT as a secret to your repository.  Name it  `NPM_TOKEN` .

## Important Notes

### NPM versioning

TODO:

### Installing dependancies

TODO:

### Publishing first package

In future you will publish packages by creating pull requests against the supported branches, according to the workflows outlined in the docs folder.  When a pull request is merged a GitHub action will handle versioning and publish a release.

However a first package must be published manually to start the ball rolling.  There is a script for this.

```bash
yarn pub
```

## Next steps

### Use a private package

Before diving into your theme development, try to install a private package from GitHub package repository and use it in your theme, and then publish your theme.  If this doesn't work it best to troubleshoot it now.

### Edit your test script

TODO: Update This Section...

### Review the supported workflows

TODO: Update This Section...

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
