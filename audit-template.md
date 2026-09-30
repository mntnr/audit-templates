:wave: Hey there! This is the developer experience audit from @mntnr for this repository. I've added in my thoughts below, in the form of a checklist. Looking forward to seeing what you think; let's see if we can resolve all of the open issues and make this repository shine ✨ 💖 ✨

# Repository Review: [[INSERT REPONAME]](https://github.com/[INSERT REPONAME])

> [INSERT GITHUB DESCRIPTION]

_For notes on anything crossed out, look below. Where I've proposed a fix in a PR, I've checked the item off and linked the PR next to it, like this: (fix proposed in #123). If I think that something is fine, even if it isn't valid according to this checklist, I've checked it off and included a note._

_Tip: GitHub's own checklist at **Insights → Community Standards** covers several of these items at a glance._

### Reviewing the Repository Docs

- [ ] Is there a README?
  - [ ] Does it follow [standard-readme](https://github.com/RichardLitt/standard-readme)?
  - [ ] Is it spellchecked?
  - [ ] Do images have alt text?
  - [ ] Do the badges work?
- [ ] Is there a Code of Conduct, such as the [Contributor Covenant](https://www.contributor-covenant.org/)?
  - [ ] Is it mentioned in the Contribute section of the README? (Note: this isn't needed if you mention it in your `CONTRIBUTING.md` and it is in this repository.)
  - [ ] Does it explain how reports are handled and how it is enforced?
  - [ ] Does more than one person receive reports?
  - [ ] Can someone make a report without it going to the person they are reporting?
- [ ] Is there a `LICENSE` file?
  - [ ] Is this matched by a valid [SPDX identifier](https://spdx.org/licenses/) in the package metadata?
  - [ ] _(Optional)_ Is the repository [REUSE](https://reuse.software/) compliant?
- [ ] Is there a `.github` folder, or an organization-wide `.github` repository that provides default community files?
  - [ ] Are there [issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms) in `.github/ISSUE_TEMPLATE/` ([example](https://github.com/babel/babel/issues/new/choose))?
  - [ ] Is there an `ISSUE_TEMPLATE/config.yml` that disables blank issues or points questions elsewhere?
  - [ ] Is there a `PULL_REQUEST_TEMPLATE.md`?
- [ ] Is there a `CONTRIBUTING.md` file?
  - [ ] Does it mention how to make a PR?
  - [ ] Does it mention what sort of issues you'd like?
  - [ ] Does it mention the `good first issue` and `help wanted` labels as starting points?
  - [ ] Does it mention triaging and bug reports as good starting points?
  - [ ] Does it point to a place for community conversation, like GitHub Discussions, Discord, or Matrix?
  - [ ] Does it encourage conversations in issues before opening huge PRs?
  - [ ] Does it specify where to ask questions on process?
  - [ ] Does it explain labels used in the issues?
  - [ ] Does it state a policy on AI-assisted contributions?
- [ ] Is there a `SUPPORT.md`, or another clear place that says where to get help?
- [ ] Is there a `CHANGELOG`, ideally following [Keep a Changelog](https://keepachangelog.com/)?
  - [ ] If there isn't, are notes included in the project's releases?
- [ ] Does this pass [`alex`](https://github.com/get-alex/alex) adequately? Run `alex *.md`.
- [ ] Does the repository name itself pass on http://wordsafety.com?
- [ ] Can users follow updates without watching the whole repository, for example through releases or an Announcements category in GitHub Discussions?
- [ ] _(Research software)_ Is there a `CITATION.cff` file?

### Process
- [ ] Can I install easily?
- [ ] Can I use this easily?

### Issues and Pull Requests
- [ ] What is the median time to first response on new issues and PRs?
- [ ] How many PRs have been open with no activity for more than 30 days?
- [ ] How many people merged PRs in the last 12 months?
- [ ] Are there useful issue labels?
- [ ] Are the labels being used? What share of open issues are labeled?
- [ ] Is there a `good first issue` label?
- [ ] Is there a `help wanted` label?
- [ ] Is there a `waiting on contributor` label?
- [ ] If a bot automatically closes stale issues or PRs, is that really needed? These bots can drive contributors away.

### Security
- [ ] Is there a `SECURITY.md`?
- [ ] Is [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository) enabled?
- [ ] Are Dependabot alerts and security updates enabled?
  - [ ] Are there open alerts that need attention?
- [ ] Is secret scanning enabled, with push protection?
- [ ] Is code scanning (such as CodeQL) set up, where it makes sense?
- [ ] Is the default branch protected by a branch ruleset that requires review and passing checks?
- [ ] Does the organization require two-factor authentication?
- [ ] Do GitHub Actions workflows use minimal `GITHUB_TOKEN` permissions?
  - [ ] Are third-party actions pinned to a full commit SHA?
- [ ] What score does the [OpenSSF Scorecard](https://scorecard.dev/) give?

### CI and Releases
- [ ] Do tests run automatically on every PR?
- [ ] Are the tests passing on the default branch?
- [ ] Are releases tagged and versioned with [semver](https://semver.org/)?
- [ ] Do releases have notes? GitHub can generate them automatically.
- [ ] For published packages, are releases published with provenance or trusted publishing?

### Governance and Sustainability
- [ ] Is it clear who the maintainers are, through a `CODEOWNERS` file or a maintainers section?
- [ ] Is there a `GOVERNANCE.md`, or a section explaining how decisions are made?
- [ ] Is there more than one person who can merge and release?
- [ ] Is there a `.github/FUNDING.yml`, if the project accepts funding?

### Automation

_Note: None of these are necessary, but they can help with some things. [GitHub Actions](https://github.com/features/actions), [Dependabot](https://docs.github.com/en/code-security/dependabot), and [Renovate](https://docs.renovatebot.com/) cover most needs._

- [ ] Are there bots or automated workflows enabled?
- [ ] Are the bots listed in the Contribute or Readme files so that users can expect to interact with them?

### Metadata
- [ ] Is the default branch named `main`?
- [ ] Is there a description on GitHub?
  - [ ] Does the description match the README?
- [ ] Are the topics useful?
- [ ] Is there a social preview image?
- [ ] Is there a website?
  - [ ] Does the website match the project?
  - [ ] Does it use `https`?

### Package Metadata

Note: These should apply to `package.json` (JavaScript), `pyproject.toml` (Python), `Cargo.toml` (Rust), `*.cabal` (Haskell), and `META.yml` (Perl), among others.

- [ ] Does the description match the GitHub description?
- [ ] Is there a `bugs` field?
- [ ] Is there a `homepage` field?
- [ ] Is there a `repository` field?
- [ ] Are the supported runtime versions stated (such as `engines`)?
- [ ] Are the published files limited (such as `files` or `exports`)?
- [ ] Is there a `funding` field, if the project accepts funding?
- [ ] Are there appropriate `keywords`?
  - [ ] Do these match the topics on GitHub?
- [ ] Run [`depcheck`](https://www.npmjs.com/package/depcheck); do the deps make sense?
- [ ] Run `npm audit` (or the equivalent); are there known vulnerabilities?

### TODO

_Write a note here_

#### Generic
- [ ] I would add a maintainers section or a `CODEOWNERS` file, to make it clear who is on the maintainers team. This helps set expectations and clarifies for the users who they can talk to.
- [ ] Add `https` to your repository website link. Currently it is `http`.
- [ ] Consider adding __@contributors__ as maintainers with you. This will save you time.
- [ ] Consider enabling GitHub Discussions, or linking to your Discord or Matrix, so users have a place to talk that isn't the issue tracker.
- [ ] Consider having a second person receive Code of Conduct reports - someone may have an issue with _you_ but not want to tell you directly. I know, this idea may be awkward. But you will give them an option in case they do have an issue, and this may be good for the overall health of the project.
- [ ] Consider adding issue forms and a `PULL_REQUEST_TEMPLATE.md` to your repository. It looks like you have your PRs well under control, but these may help you in the future. At the least, ask contributors to run the tests first, and to read the Usage guides.
- [ ] Consider adding a `SECURITY.md` and enabling private vulnerability reporting, so that people can tell you about security problems without disclosing them publicly.
- [ ] Consider asking contributors to sign off their commits under the [Developer Certificate of Origin](https://developercertificate.org/) (DCO), if you're worried about legality. It is lighter-weight than a CLA, which is generally only needed when you are building a business out of a code base. In your case, I think you're OK.
- [ ] This audit does _not_ cover license dependency. For that, I suggest using [licensee](https://github.com/jslicense/licensee.js), GitHub's [dependency review](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review), or an external tool like [Fossa](https://fossa.io/). Let me know if you want more help here.

#### Issues
- [ ] Add 'discussion' labels to longstanding issues, or move them to GitHub Discussions.
- [ ] Consider using the `help wanted` label as well as `good first issue`. These signal that you're looking for community involvement, and GitHub, [goodfirstissue.dev](https://goodfirstissue.dev/), and [up-for-grabs.net](https://up-for-grabs.net/) can surface them to new contributors. This will help more people interact with your code, and lead to small, iterative work done by others. It may take some time to set up initially - properly scoping issues for newcomers takes some time - but the payback should be worth it.
- [ ] I label pull requests where I am waiting on the Contributor to respond `waiting on contributor`. This helps alleviate pressure on you to close them.

## Contribute back?

This checklist is open source! If you have suggestions or think it could be better, contribute back on [mntnr/audit-templates](https://github.com/mntnr/audit-templates).

Thank you!
