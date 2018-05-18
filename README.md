# Audit Templates

> 🏔 Auditing templates used by Maintainer Mountaineer!

This is where we store our auditing templates. This repo also houses a global npm script which will print out an auditing template, given a GitHub repository.

## Install

First, install it globally.

```sh
$ npm i -g audit-templates
```

This will give you a global executable, `audit-templates`.

## Usage

Provide `audit-templates` with a GitHub repository in the form of `user/reponame` in order to have it print out a template for you.

```sh
$ audit-templates mntnr/audit-templates
Replacing repo name and description...
Done! Created file audit-templates-audit.md.
$ audit-templates mntnr/audit-templates overthere/yeahhh.md
```

## Contribute

If you'd like to contribute, edit, or copy them, feel free to do so!

Questions? Open an issue!

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE) © 2018 Burnt Fen Creative LLC.
