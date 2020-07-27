Unofficial Hypothesis extension
===============================

<!-- [![Build status](https://img.shields.io/travis/hypothesis/browser-extension/master.svg)][travis] -->
[![BSD licensed](https://img.shields.io/badge/license-BSD-blue.svg)][license]

<!-- [travis]: https://travis-ci.org/hypothesis/browser-extension
[irc]: https://www.irccloud.com/invite?channel=%23hypothes.is&amp;hostname=irc.freenode.net&amp;port=6667&amp;ssl=1 -->
[license]: https://github.com/diegodlh/unofficial-hypothesis-extension/blob/master/LICENSE

The *unofficial* Hypothesis extension allows you to annotate web documents using your
[Hypothesis][service] account.

It is a fork of the *official* [Hypothesis browser extension(s)](https://github.com/hypothesis/browser-extension).
Its main purpose is to provide a working extension for the Firefox browser. See this [thread](https://github.com/hypothesis/browser-extension/issues/310) for more details.

To install on your Firefox browser, download the latest xpi file from [here](https://github.com/diegodlh/unofficial-hypothesis-extension/releases/latest).

![Screenshot of Hypothesis client](/images/screenshot.png?raw=true)

[service]: https://hypothes.is

Extra features
-----------
As of v1.470.0.1, the Unofficial extension for Hypothesis enables some customization
of the annotation client. Read more about it [here][extra-features].

[extra-features]: docs/extra-features.md

Known bugs
-----------

* Annotating local PDFs is not supported because Firefox is more restrictive than Chrome regarding extension access to local files. See issue [#100](https://github.com/hypothesis/browser-extension/issues/100).

Development
-----------

The code for the extensions is in the `src/` directory, and can be built into a
browser extension by running:

    npm install
    make SETTINGS_FILE=settings/firefox-prod-amo.json

Once this is done you should be able to load the `build/` directory as an
unpacked extension.

Use `settings/firefox-prod-self.json` for self distribution, instead of distribution through AMO (addons.mozilla.org).
This includes the update_url field in the manifest.json file to handle automatic updates of the self distributed extension.

The extension code has a test suite, which you can run using:

    npm test

Note that the browser extensions are for the most part just a wrapper around the
[*unofficial* Hypothesis client][unofficial-client]. Depending on what you're interested in working on,
you may need to check out the client repository too. If you do that, you can get
the browser extension repository to use your checked-out `unofficial-hypothesis-client` repository by
running

    npm link

in the `unofficial-hypothesis-client` repository, and then

    npm link unofficial-hypothesis

in the `unofficial-browser-extension` repository. After that, a call to `make` will use the
built client from the client repository. Please consult the client's
documentation for instructions on building the client in a development
environment.

**Tip**: If you get a **permission denied** error when running `npm link`
you probably need to fix npm's permissions. See
[Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

**Tip**: To **unlink** your dev browser extension from your dev client run
`npm unlink unofficial-hypothesis` in your browser extension directory
(see the [npm uninstall docs](https://docs.npmjs.com/cli/uninstall)).

See [Building the extension](docs/building.md) for more information.

[unofficial-client]: https://github.com/diegodlh/unofficial-hypothesis-client/

License
-------

The *unofficial* Hypothesis extension is released under the [2-Clause BSD
License][bsd2c], sometimes referred to as the "Simplified BSD License". Some
third-party components are included. They are subject to their own licenses. All
of the license information can be found in the included [LICENSE][license] file.

[bsd2c]: http://www.opensource.org/licenses/BSD-2-Clause
[license]: https://github.com/diegodlh/unofficial-hypothesis-extension/blob/master/LICENSE
