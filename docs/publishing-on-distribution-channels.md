# Publishing on distribution channels

modified from source: https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/release-workflow/distribution-channels.md

This recipe will walk you through a simple example that uses distribution channels to make releases available only to a subset of users, in order to collect feedbacks before distributing the release to all users.

This example uses the **semantic-release** default configuration:
- [branches](../../usage/configuration.md#branches): `['+([0-9])?(.{+([0-9]),x}).x', 'master', 'next', 'next-major', {name: 'beta', prerelease: true}, {name: 'alpha', prerelease: true}]`
- [plugins](../../usage/configuration.md#plugins): `['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/npm', '@semantic-release/github']`

## Initial release

We'll start by making the first commit of the project, with the code for the initial release and the message `feat: initial commit` to `main`. When pushing that commit, **semantic-release** will release the version `1.0.0` and make it available on the default distribution channel which is the dist-tag `@latest` for npm.

The Git history of the repository is:

```
* feat: initial commit # => v1.0.0 on @latest
```

## Releasing a bug fix

We can now continue to commit changes and release updates to our users. For example we can commit a bug fix with the message `fix: a fix` to`main`. When pushing that commit, **semantic-release** will release the version `1.0.1` on the dist-tag `@latest`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0 on @latest
* fix: a fix # => v1.0.1 on @latest
```

## Releasing a feature on next

We now want to develop an important feature, which is a breaking change. Considering the scope of this feature we want to make it available, at first, only to our most dedicated users in order to get feedback. Once we get that feedback we can make improvements and ultimately make the new feature available to all users.

To implement that workflow we can create the branch `next` and commit our feature to this branch. When pushing that commit, **semantic-release** will release the version `2.0.0` on the dist-tag `@next`. That means only the users installing our module with `npm install example-module@next` will receive the version `2.0.0`. Other users installing with `npm install example-module` will still receive the version `1.0.1`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0 on @latest
* fix: a fix # => v1.0.1 on @latest
| \
|  * feat: a big feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0 on @next
```

## Releasing a bug fix on next

One of our users starts to use the new `2.0.0` release and reports a bug. We develop a bug fix and commit it to the `next` branch with the message `fix: fix something on the big feature`. When pushing that commit, **semantic-release** will release the version `2.0.1` on the dist-tag `@next`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0 on @latest
* fix: a fix # => v1.0.1 on @latest
| \
|  * feat: a big feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0 on @next
|  * fix: fix something on the big feature # => v2.0.1 on @next
```

## Releasing a feature on latest

We now want to develop a smaller, non-breaking feature. Its scope is small enough that we don't need to have a phase of feedback and we can release it to all users right away.

If we were to commit that feature on `next` only a subset of users would get it, and we would need to wait for the end of our feedback period in order to make both the big and the small feature available to all users.

Instead, we develop that small feature commit it to`main` with the message `feat: a small feature`. When pushing that commit, **semantic-release** will release the version `1.1.0` on the dist-tag `@latest` so all users can benefit from it right away.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0 on @latest
* fix: a fix # => v1.0.1 on @latest
| \
|  * feat: a big feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0 on @next
|  * fix: fix something on the big feature # => v2.0.1 on @next
*  | feat: a small feature # => v1.1.0 on @latest
```

## Porting a feature to next

Most of our users now have access to the small feature, but we still need to make it available to our users using the `@next` dist-tag. To do so we need to merge our changes made on`main` (the commit `feat: a small feature`) into `next`. 

**IMPORTANT**

> Instead of trying to merge `main` into `next` directly, what you need to do is create a branch off of `main` (that will leave `main` unchanged) then merge that branch into `next`.  


### Resolving conflicts

Apart from any conflicts that might arise in your code, you will experience conflict concerning versioning in

1. `package.json` files

   You can choose the next version, this will be overridden when the push is successfully merged using a value incremented from `lerna.json`

2.  `CHANGLOG.md` files

    Not sure the best way to handle this.  But I think if you choose the diff from next you will be ok, (whatever is in conflict from main is still in main and will be merged when you eventually merge next into main???)

3. `lerna.json`   

   **IMPORTANT**

  > @lerna.json - set version to the increment below the main version.  You are pushing the non-breaking feature from main to next so if main is `3.4.15` set lerna to `4.3.15` so when the package is published it will be incremented to `4.4.15` and then main and next will in sync again.



Once the conflicts are resolved and the merge commit is pushed to `next`, **semantic-release** will release the version `2.1.0` on the dist-tag `@next` which contains both our small and big feature.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0 on @latest
* fix: a fix # => v1.0.1 on @latest
| \
|  * feat: a big feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0 on @next
|  * fix: fix something on the big feature # => v2.0.1 on @next
*  | feat: a small feature # => v1.1.0 on @latest
|  * Merge branch master into next # => v2.1.0 on @next
```

## Adding a version to latest

After a period of feedback from our users using the `@next` dist-tag we feel confident to make our big feature available to all users. To do so we merge the `next` branch into`main`. There should be no conflict as `next` is strictly ahead of`main`.

Once the merge commit is pushed to`main`, **semantic-release** will add the version `2.1.0` to the dist-tag `@latest` so all users will receive it when installing out module with `npm install example-module`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0 on @latest
* fix: a fix # => v1.0.1 on @latest
| \
|  * feat: a big feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0 on @next
|  * fix: fix something on the big feature # => v2.0.1 on @next
*  | feat: a small feature # => v1.1.0 on @latest
|  * Merge branch master into next # => v2.1.0 on @next
| /|
*  | Merge branch next into master # => v2.1.0 on @latest
```

We can now continue to push new fixes and features on`main`, or a new breaking change on `next` as we did before.
