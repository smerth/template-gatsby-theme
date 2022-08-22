# template-gatsby-theme

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/smerth/template-GatsbyJS-theme#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/smerth/template-GatsbyJS-theme/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/smerth/template-gatsby-theme)](https://github.com/smerth/template-gatsby-theme/blob/master/LICENSE)

> A starter template for developing and publishing GatsbyJS themes. The project is structured as a monorepo with a folder for GatsbyJS themes and GatsbyJS Demo site to test the themes you develop. This repo uses semantic-release, lerna and github actions to help streamline your publishing workflow.



## Features

- Monorepo - develop themes and test in a gatsby site in one repo
- Semantic Release CLI - run `yarn commit` to generate a server compliant commit
- Github Action to automate publishing theme packages
- Github Action to automate running tests
- Packages are published on pull-request merges making life easier for the maintainer
- Configured to support using and publishing private packages
- Supports using `semantic-release` workflows, check the [docs folder](docs)



## Use this template

>  Follow these steps **in order** to quickly setup your new project



### 1. Create a repository from the template

On the [GitHub page for this repository](https://github.com/smerth/template-gatsby-theme), click the `use this template` button to create a new repository from this template. Clone your new repository to your local dev environment.



### 2. Add Repository Secret to the Repo 

In your GitHub account create a Personal Access Token (PAT) with all permissions for managing repos and packages.

In your new repository from this template create a new repository secret for github actions.  Call it NPM_TOKEN and give it the value from your PAT.

The GitHub action that handles pubilishing packages and installing packages will use this PAT value to authenticate and enable publishing and installing private GitHub packages to the GitHub package registry.



### 3. Update package.json files

> IMPORTANT!!!
>
> YOU MUST UPDATE THE INFORMATION IN THE PACKAGE.JSON FILES PRIOR TO PUBLISHING YOUR FIRST PACKAGE OTHERWISE YOU MIGHT ENCOUNTER PROBLEMS WITH THE PACKAGE BEING PUBLISHED TO THE WRONG REPO!

- @root/package.json edit:
  - name
  - all repo urls
  - author
  - description
  - dependancies (change to the name-spaced name of your package)
- @packages change the name of the package folder to the name of your package
- @packages/<YOUR-PACKAGE>/package.json
  - name (the name of your package must be name spaced to publish to GitHub Package Registry)
  - all repo urls
  - author
  - description
- @demo/packages.json
  - dependancies change to use your package name.
- @demo/gatsby-config.js
  - change plugin to the name of your plugin




### 4. Install packages

```bash
yarn
```



### 5. Generate readme files

To generate a README at the project root run `npx readme-md-generator`.

Do this again in the package folder.

Find out more about [readme-md-generator](https://github.com/kefranabg/readme-md-generator).




### 6. Install packages

- run `yarn setup` to install components



### 7. Test demo site

- run `yarn develop` to test the demo site in development mode
- run `yarn build` to test that the demo site builds properly



### 8. First commit, push, and publish

In future you will publish packages by creating pull requests against the supported branches, according to the workflows outlined in the docs folder. 

When a pull request is merged, a GitHub action will handle versioning and publish a release. However **a first package must be published manually** to start the ball rolling. 

To accomplish this you will need to: install dependancies, add, commit, and push the changes, and publish a package through lerna.  Luckily there is a script for that. 

```bash
yarn first-commit
```



### 9. Publish package @latest version

```bash
yarn first-commit
```

The `yarn first-commit` script will add, commit, and push the changes to GitHub, then publish the first package `@latest` version, with the versioning managed by Lerna.

Output will be something like this:

```bash
lerna success published @smerth/verbose-spork 1.1.0
lerna notice
lerna notice 📦  @smerth/verbose-spork@1.1.0
lerna notice === Tarball Contents ===
lerna notice 0B    gatsby-browser.js
lerna notice 0B    gatsby-config.js
lerna notice 0B    gatsby-ssr.js
lerna notice 603B  src/templates/Homepage.js
lerna notice 9B    index.js
lerna notice 372B  src/templates/Secondpage.js
lerna notice 986B  package.json
lerna notice 1.1kB LICENSE.md
lerna notice 66B   README.md
lerna notice === Tarball Details ===
lerna notice name:          @smerth/verbose-spork
lerna notice version:       1.1.0
lerna notice filename:      smerth-verbose-spork-1.1.0.tgz
lerna notice package size:  1.8 kB
lerna notice unpacked size: 3.1 kB
```

Check `@package/package.json` and `@demo/package.json`.  Both should display the same version: `1.1.0`

Check GitHub your package should be published @version 1.1.0 and marked as `Latest version`



### 10. Create a next branch

- run `git checkout -b next`
- publish `next` branch to GitHub



### 11.  Publish package @next version

- create a feature off of `next` call it  `next-feature-1`
- publish the branch
- **do some coding in the package**
- commit your changes with `yarn commit` this will take you through a CLI for semantic-versioning to make sure your commits conform to some standards in terms of versioning and comments.  *Make this a breaking change. That will bump the version for `next` package publication and it will be easier to see how this whole flow works.*
- run `git push` to GitHub
- create a pull request from this `feature` branch to `next` branch.
- resolve any differences (there should really be any at this point.)
- merge the pull request

Merging the pull request from a `feature` branch to the `next` branch triggers the GitHub Workflow named "publish"

Workflows are defined in `.github/workflows` and you can edit them if necessary.

The result should be that the GitHub Workflow "publish" publishes the first `@next` version of the package.

```bash
lerna notice 📦  @smerth/verbose-spork@2.0.0
lerna notice === Tarball Contents === 
lerna notice 6.1kB src/styles/normalize.css   
lerna notice 123B  src/styles/sitewide.css    
lerna notice 0B    gatsby-browser.js          
lerna notice 0B    gatsby-config.js           
lerna notice 0B    gatsby-ssr.js              
lerna notice 649B  src/templates/Homepage.js  
lerna notice 9B    index.js                   
lerna notice 185B  src/components/Layout.js   
lerna notice 384B  src/templates/Secondpage.js
lerna notice 986B  package.json               
lerna notice 1.1kB LICENSE.md                 
lerna notice 63B   README.md                  
lerna notice === Tarball Details === 
lerna notice name:          @smerth/verbose-spork                   
lerna notice version:       2.0.0                                   
lerna notice filename:      smerth-verbose-spork-2.0.0.tgz   
```

Check on GitHub and you will see the @next version of the package has been published as version 2.0.0 but the @latest version remains version 1.1.0

In your code editor switch to the next branch.  See that the version of the package required by the demo site remains at 1.1.0.  This is because you have not pulled the latest changes from GitHub.  Pull.  Now the next branch is requiring the package @2.0.0 (the `next` version of the package.)



## Publish the demo site

The demo site can be published to AWS Amplify using the gatsby-monorepo CloudFormation template.



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

### Test Workflow

The GitHub Workflow `test.yaml` runs the test script defined in `@root/package.json` you can implement any script you like here to accomodate your testing strategy.

If you are not implementing testing, or testing out this template to see if you want to use it, you can turn off this action on GitHub to avoid having to wait for it to run.

This action runs on pull-requests and updates. However, you can merge a pull request even if this action fails.  

It is possible to prevent a maintainer from merging the pull-request if the action fails but that requires further work.

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
