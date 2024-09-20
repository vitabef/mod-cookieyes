# Hinode Module - CookieYes

<!-- Tagline -->
<p align="center">
    <b>A Hugo module to integrate CookieYes with your Hinode site (work in progress)</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/gethinode/mod-cookieyes/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/gethinode/mod-cookieyes.svg">
    </a>
    <a href="https://github.com/gethinode/mod-cookieyes/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/gethinode/mod-cookieyes.svg">
    </a>
    <a href="https://github.com/gethinode/mod-cookieyes/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/gethinode/mod-cookieyes.svg">
    </a>
    <a href="https://github.com/gethinode/mod-cookieyes/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/gethinode/mod-cookieyes">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module to integrate [CookieYes][cookieyes] with your Hinode site. Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Configuration

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| cookieyes.force           | false   | Trigger to force include the CookieYes scripts, bypassing other settings. Use this setting for debugging and testing only. |
| cookieyes.id              | false   | ID of your CookieYes banner. See the installation code in the advanced settings of your CookieYes account. The code is available by clicking the button next to the cookie banner status. The `{code}` is defined in the banner code URL in the following pattern: `https://cdn-cookieyes.com/client_data/{code}/script.js`. |

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
[cookieyes]: https://cookieyes.com/
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
