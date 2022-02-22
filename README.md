<h1 align="center">Welcome to template-gatsby-theme 👋</h1>
<p>
  <a href="https://github.com/smerth/template-gatsby-theme#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/smerth/template-gatsby-theme/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/smerth/template-gatsby-theme" />
  </a>
</p>

> Starter template for developing and publishing gatsby themes. The project is structured as a monorepo with a folder for GatsbyJS themes and a folder for a GatsbyJS Demo site to test the themes you develop. Comes with semantic-release, lerna and github actions to help streamline a publishing workflow.

### 🏠 [Homepage](https://github.com/smerth/template-gatsby-theme#readme)

## Supported Workflow

This template should make it easier to publish and support GatsbyJS theme development following this workflow:

- Contributor creates a new branch off of  `development`.  Let's call it: `new-feature`.
- Contributor pushes the `new-feature` branch to GitHub (if others need access to it).  
- Contributor codes up the new feature.
- Contributor commits and pushes the changes in the `new-feature` branch to the `development` branch on GitHub.  
- Contributor creates a Pull Request from the `new-feature` branch the `development` branch.
- The GitHub Action defined in `checks.yaml` runs on the creation of a Pull Request.  It runs the tests you define for the theme under development. (In the template it runs the test script in the demo theme).
- Maintainer reveiws the pull request.  More commits are added to the pull request as needed.  Each time the Pull Request is updated, the checks action runs so the Maintainer and Contributor can identify problems.
- Maintainer accepts Pull Request and merges it into the `development` branch
- The GitHub Action defined in `publish.yaml` runs on `github.event.pull_request.merged` and a package is published.  This package will be versioned as a beta release since the Pull Request is merged into the `development` branch.
- At this point the Contributor can delete the `new-feature` branch.
- Theme Users can install the beta-release Package and test it out.  When all the stake-holders are satisfied the beta-release is ready to move into production the Maintainer can issue a Pull Request from `development` to `main` .
- The GitHub Action defined in `publish.yaml` runs on `github.event.pull_request.merged` and a package is published.  This package will be versioned as a `normal` release since the Pull Request was issued against the main branch.

## Setup

### Create a New Project From This Template

On the GitHub site just click the "Use this template" button.

### Install

```sh
yarn install
```

To install, build and serve from a single command use `yarn start`.

### Edit GitHub Actions

You will need to edit the workflow files `checks.yaml` and `publish.yaml` to:

- replace "@smerth" with your organization name
- Add your own token replacing "NPM_TOKEN"

```
      - name: "Setup npm" # Add our registry to npm config
        run: | # Custom action
          npm set @smerth:registry=https://npm.pkg.github.com/smerth
          npm set "//npm.pkg.github.com/:_authToken=${{ secrets.NPM_TOKEN }}"
```

If you are only using public packages from GitHub to develop your theme, you can use the `GITHUB_TOKEN` which is available on secrets for every repository.  However, if you are using your own private packages in your theme you need to create a personal access token and add it to the secrets for you project.

### Replace Project Information

Go into `@root/package.json` and `@packages/gatsby-theme-demo/package.json` and edit the relevant details: project name, author, keywords, description, etc...

### Replace Readme File

Delete the readme files at the project root and in the theme.  To generate a readme file at the root, run

```
yarn readme
```

For each theme you write you can cd into the theme folder and run that same command to generate a readme file for each theme.

`readme-md-generator` generates a readme file based on your project and theme package.json files.  These need to be as complete as possible for `readme-md-generator` to lift default values for use in generating the readme files.

### Edit Boilerplate Files

Edit `LISENCE` and `CONTRIBUTING.md`  to suit your needs.

### Re-set versions

Check that the version for all themes used in the demo gatsby site is set to "*".  Otherwise the GitHub Actions will have difficulty finding and installing theme the first time the check action runs.  Don't worry this will be updated and managed for you with each merge.

Set version of your theme packages and the demo site to your preferred starting point. Maybe `0.0.0`, or `1.0.0`...

### Empty CHANGELOG.md

Delete the contents of CHANGELOG.md (at the root and in the theme).  These will be updated automatically by semantic-release when new code is merged.

## Develop

Delete the demo theme, or overwrite it's contents with your own.  Add multiple themes if necessary.

The standard GatsbyJS commands can be run from the scripts in the root `package.json`.  To add more demo Gatsby sites you'll need to aliases these scripts.

```
"start": "npm install && yarn build && yarn serve",
```

to

```
"develop:1": "yarn workspace demo1 start",
"develop:2": "yarn workspace demo2 start",
```

etc...

## Author

👤 **Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>)**

- Website: <http://smerth.github.io>
- Github: [@smerth](https://github.com/smerth)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Stephen Merth <stephen.merth@gmail.com> (<https://smerth.github.io/>)](https://github.com/smerth).<br />
This project is [MIT](https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
