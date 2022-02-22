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

> Starter template for developing and publishing gatsby themes. The project is structured as a monorepo with a folder for GatsbyJS themes and a folder for a GatsbyJS Demo site to test the themes you develop. Comes with semantic-release, lerna and github actions to help streamline workflow.

### 🏠 [Homepage](https://github.com/smerth/template-gatsby-theme#readme)



## Setup

### Create a New Project From This Template

On the GitHub site just click the "Use this template" button.

### Install

Run:

```sh
yarn setup
```

This will run `npm install && yarn build && yarn serve` so you can see if the installation, the build and the demo theme are working as expected before continuing.

## Add Token

You will need to edit the workflow files `checks.yaml` and `publish.yaml` by replacing your organization name and relevant token in 

```
      - name: "Setup npm" # Add our registry to npm config
        run: | # Custom action
          npm set @smerth:registry=https://npm.pkg.github.com/smerth
          npm set "//npm.pkg.github.com/:_authToken=${{ secrets.NPM_TOKEN }}"
```

If you are using public packages from GitHub you can use the `GITHUB_TOKEN ` which is available on secrets for every repository.  However, if you are using your own private packages in your theme you need to create a personal access token and add it to the secrets for you project.

### Replace Project Information

Go into `@root/package.json` and `@packages/gatsby-theme-demo/package.json` and edit the relevant details: project name, author, etc...

### Replace Readme File

Delete the readme file at the project root and the in the theme.  To generate a readme file at the root, run

```
yarn readme
```

For each theme you write you can cd into the theme folder and run that same command

`readme-md-generator` generates a readme file based on your project and theme package.json files.

### Edit Boilerplate Files

Edit `LISENCE` and `CONTRIBUTING.md` 

### Re-set Version

Set Version to 0

### Empty CHANGELOG.md

Delete the contents of CHANGELOG.md.  This will be updated automatically by semantic-release.



## Develop

Delete the demo theme, or overwrite it's contents with your own.



## Publish

The GitHub actions are setup to support the following kind of workflow:

- Contributor creates a new branch off of the `development` branch.  
- Contributor pushes the new branch to GitHub (if others need access to it).  
- `function new(code)=>"magic"`! 
- Contributor commits and pushes the changes to `development` branch on GitHub.  
- Contributor creates a Pull Request on the development branch.
-  GitHub Action `checks.yaml` runs on the creation of pull request and runs any tests you define for the theme under development.
- Contributor and Reviewer communicate
- Reviewer accepts Pull Request and merges into the `development` branch
- GitHub Action `publish.yaml` runs on `github.event.pull_request.merged` and a package is published.  This package will be versioned as a `beta` release
- Package users can test the beta release.  When all the stake-holders are satisfied a Pull Request from `development` to `main` can be issued.
- GitHub Action `publish.yaml` runs on `github.event.pull_request.merged` and a package is published.  This package will be versioned as a `normal` release



## Author

👤 **Stephen Merth <stephen.merth@gmail.com> (https://smerth.github.io/)**

* Website: http://smerth.github.io
* Github: [@smerth](https://github.com/smerth)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Stephen Merth <stephen.merth@gmail.com> (https://smerth.github.io/)](https://github.com/smerth).<br />
This project is [MIT](https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_