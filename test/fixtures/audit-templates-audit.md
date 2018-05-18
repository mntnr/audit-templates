:wave: Hey there! This is the developer experience audit from @mntnr for this repository. I've added in my thoughts below, in the form of a checklist. Looking forward to seeing what you think; let's see if we can resolve all of the open issues and make this repository shine ✨ 💖 ✨

# Repository Review: [mntnr/audit-templates](https://github.com/mntnr/audit-templates)

>       🏔 Auditing templates used by Maintainer Mountaineer!

_For notes on anything crossed out, look below. Note: I use `[~]` to mean that I have proposed a fix in a PR. I know it doesn't render properly in Markdown, but it works pretty well otherwise for that purpose. If I think that something is fine, even if it isn't valid according to this checklist, I've checked it off and included a note._

### Reviewing the Repository Docs

- [ ] Is there a README?
  - [ ] Does it follow [standard-readme](https://github.com/RichardLitt/standard-readme)?
  - [ ] Is it spellchecked?
- [ ] Is there a Code of Conduct, such as the [Contributor Covenant](https://github.com/simonv3/covenant-generator)?
  - [ ] Is it mentioned in the Contribute section of the README? (Note: this isn't needed if you mention it in your CONTRIBUTE.md and it is in this repository.)
  - [ ] Does it reference an email address for violations?
  - [ ] Does it reference a second email address?
- [ ] Is there a `LICENSE` file?
  - [ ] Is this matched in the `package.json`?
  - [ ] Is the year correct?
- [ ] Is there a `.github` or `docs` folder?
  - [ ] Is there an `ISSUE_TEMPLATE.md`?
  - [ ] Is there a `PULL_REQUEST_TEMPLATE.md`?
- [ ] Is there a `CONTRIBUTING.md` file?
  - [ ] Does it mention how to make a PR?
  - [ ] Does it mention what sort of issues you'd like?
  - [ ] Does it mention a `good first issue` label as a starting point?
  - [ ] Does it mention triaging and bug reports as good starting points?
  - [ ] Does it point to a community chat program, like Slack or Gitter?
  - [ ] Does it encourage conversations in issues before opening huge PRs?
  - [ ] Does it specify where to ask questions on process?
  - [ ] Does it explain labels used in the issues?
- [ ] Is there a `CHANGELOG`?
  - [ ] If there isn't, are notes included in the project's releases?
- [ ] Does this pass [`alex`](https://github.com/wooorm/alex) adequately? Run `alex *.md`.
- [ ] Does the repository name itself pass on http://wordsafety.com?

### Process
- [ ] Can I install easily?
- [ ] Can I use this easily?

### Issues and Pull Requests
- [ ] Are there an acceptable amount of pull requests?
- [ ] Are there an acceptable amount of issues?
- [ ] Are an acceptable amount of issues less than six months old?
- [ ] Are there useful issue labels?
- [ ] Are the labels being used?
- [ ] Is there a `good for beginners` or `good first issue` label?
- [ ] Is there a `waiting on contributor` label?

### Bots

_Note: Neither of these are necessary, but they can help with some things. Check out https://probot.github.io/ for some tools._

- [ ] Are there bots enabled?
- [ ] Are the bots listed in the Contribute or Readme files so that users can expect to interact with them?

### Metadata
- [ ] Is there a description on GitHub?
  - [ ] Does the description match the README?
- [ ] Are the topics useful?
- [ ] Is there a website?
  - [ ] Does the website match the project?

### Package Metadata

Note: These should apply to `package.json` (JavaScript), `*.cabal` (Haskell), and `metadata.yml` (Perl), among others.

- [ ] Does the description match the GitHub description?
- [ ] Is there a `bugs` field?
- [ ] Is there a `homepage` field?
- [ ] Are there appropriate `keywords`?
  - [ ] Do these match the topics on GitHub?
- [ ] Run [`depcheck`](https://www.npmjs.com/package/depcheck); do the deps make sense?

### TODO

_Write a note here_

#### Generic
- [ ] I would add a maintainers section, to make it clear who is on the maintainers team. This helps set expectations and clarifies for the users who they can talk to.
- [ ] Add `https` to your repository website link. Currently it is `http`.
- [ ] Consider adding __@contributors__ as maintainers with you. This will save you time.
- [ ] Add a link to your Slack or Gitter! You want to engage with users there.
- [ ] Consider adding a secondary email to the Code of Conduct as a contact - someone may have an issue with _you_ but not want to tell you directly. I know, this idea may be awkward. But you will give them an option in case they do have an option, and this may be good for the overall health of the project.
- [ ] Consider adding `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.md` files to your repository. It looks like you have your PRs well under control, but these may help you in the future. At the least, ask them to run the tests, first, and to read the Usage guides.
- [ ] Consider adding a CLA or asking for signed commits, if you're worried about legality. This is generally only needed when you are building a business out of a code base. In your case, I think you're OK.
- [ ] This audit does _not_ cover license dependency. For that, I suggest using either [licensee](https://github.com/jslicense/licensee.js) or an external tool like [Fossa](https://fossa.io/). Let me know if you want more help here.

#### Issues
- [ ] Add 'discussion' labels to longstanding issues.
- [ ] Considering adding `available` labels as well as `good first issue`. These can be used to signal that you're looking for community involvement for issues. They can also be configured to display on http://up-for-grabs.net. This will help more people interact with your code, and lead to small, iterative work done by others. It may take some time to set up initially - properly scoping issues for newcomers takes some time - but the payback should be worth it.
- [ ] I label pull requests where I am waiting on the Contributor to respond `waiting on contributor`. This helps alleviate pressure on you to close them.

## Contribute back?

This checklist is open source! If you have suggestions or think it could be better, contribute back on [mntnr/audit-templates](https://github.com/mntnr/audit-templates).

Thank you!
