# A starter template for developing a Gatsby theme or plugin

## About

This repository is a starting point for developing a Gatsby theme or plugin. It is a monorepo managed with Yarn workspaces and Lerna. Packages can be published to **the github package registry** or to **the NPM package registry**.

## Structure

- [packages](packages) - put your packages here. To get you started the packages folder contains a blank package with some common files used in Gatsby plugins and themes. If you don't delete this folder and start from scratch be sure to review and edit the `package.json` file.
- [examples](examples) - may contain an example Gatsby site you can use to implement your plugin.
- [www](www) - may contain an example Gatsby site you can use to document or publicize your plugin. This site is intended for publication.

## Setup

To develop a theme or a plugin from this template

1. Click on the `template` button to create a new repository based on this template.

2. Make the new repository private if necessary.

3. Clone the repo to work on it locally

4. Install the dependancies `yarn`

5. If you need an example site to show off your plugin you can run `yarn install:gatsby`. This will install a gatsby site in the `examples folder` and a second gatsby site in the `www folder`. The idea is that the gatsby site in the examples folder can showcase your plugin while the one in the www folder can be published to promote and document the plugin.

6. To link up the workspaces `yarn bootstrap:workspaces`

7. Edit the `.npmrc` file. I assume you have set up your local environment to publish to either NPM or Github packages. Probably you have taken care of authentication and you are signed in to the registry you want to use. So there is nothing in this repo to cover those steps. However, you'll need to edit the `.npmrc` file and list the registries you want to use

   ```txt
   registry=https://registry.npmjs.org
   @smerth:registry=https://npm.pkg.github.com/smerth
   ```

   The first line says I want to use NPM, as the default option for sourcing packages . However, if a package is namespaced with the `@smerth` prefix I want to pull from the Github registry.

   This holds true for publishing packages. Packages namespaced with`@smerth` are published to Github. Edit these lines accordingly.

Lastly, if you are publishing to Github packages remember to namespace your package name in the name key in `package.json` of your packages

## Useful commands

The standard Gatsby commands (start (develop), build, serve, format, clean) are available for the `example/gatsby` and `www/gatsby` sites:

```json
"start:gatsby": "yarn workspace gatsby start",
"build:gatsby": "yarn workspace gatsby build",
"serve:gatsby": "yarn workspace gatsby serve",
"format:gatsby": "yarn workspace gatsby format",
"clean:gatsby": "yarn workspace gatsby clean",
"start:www": "yarn workspace www start",
"build:www": "yarn workspace www build",
"serve:www": "yarn workspace www serve",
"format:www": "yarn workspace www format",
"clean:www": "yarn workspace www clean",
```

### Lint

The Gatsby sites use Gatsby's the out-of-the-box eslint configuration:

"When there is no ESLint file Gatsby implicitly adds a barebones ESLint loader. This loader pipes ESLint feedback into the terminal window where you are running or building Gatsby and also to the console in your browser developer tools. This gives you consolidated, immediate feedback on newly-saved files."

### Format (Prettier)

If Prettier is not configured to run in your editor automatically (usually upon saving files,) you can run it on either Gatsby site with `yarn format:gatsby` or `yarn format:www`

```json
"format:gatsby": "yarn workspace gatsby format",
"format:www": "yarn workspace www format",
```

### Test

#### Gatsby sites

Gatsby recommends using Jest to test site components, see: [Unit Testing](https://www.gatsbyjs.org/docs/unit-testing/)

#### Packages

TODO: How to set up Jest to test the plugin components? Or should testing be done in `examples/gatsby` site?

### Upgrade

To upgrade packages in the codebase you can use:

```json
"all:outdated": "yarn outdated",
"all:upgrade": "yarn upgrade-interactive --latest"
```

### Clean

To quickly delete the `.cache` and `pulbic` folders in the gatsby sites run: `yarn clean:gatsby` or `yarn clean:www`

```json
"clean:gatsby": "yarn workspace gatsby clean",
"clean:www": "yarn workspace www clean",
```

### Scrub

To delete the `.cache` and `public` folders in the gatsby sites and delete the `node_modules` folders from the root as well as all workspaces run `yarn scrub`

```json
"scrub": "yarn workspace www clean && yarn workspace gatsby clean && lerna clean",
```

## Publication

### Package contents

To control what gets included in the package you publish, look to `.npmignore` in the repo root. Here you'll find general exclusions.

In the `files` key in the `package.json` in the `gatsby-theme-BLANK` package there is a list of what is specifically included when you publish a package:

```json
"files": [
  "src/",
  "global-styles.css",
  "gatsby-browser.js",
  "gatsby-config.js",
  "gatsby-ssr.js",
  "index.js"
],
```

Feel free to edit this key.

### Workflow

The current idea for workflow is as follows:

Work on code in the packages folder, or one of the sites.

#### Add changes

```bash
git add .
```

#### Commit using yarn

```bash
yarn commit
```

The repo is set up to use `commitizen` so if you commit using the yarn command instead of `git commit` you'll be prompted to follow the conventional commits standards.

Pile up commits until you want to push the changes.

#### Publish

Instead of running `git push -u origin master` to push commits to github, run

```bash
yarn publish:packages
```

You will be prompted through the release process. Lerna will do the following:

- assign version numbers for the packages and the sites
- update the CHANGLOG.md files
- push the code to Github
- tag a release
- publish the package/s
- update the versions used in the sites to the latest package versions

## References

[Gatsby](https://github.com/gatsbyjs/gatsby)

[Material-UI](https://github.com/mui-org/material-ui): The fastest way to build server-side rendered Material-UI websites
