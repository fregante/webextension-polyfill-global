#!/bin/bash
npm publish || true # Try publishing the version in git, in case it was manually changed
if npm version "$(npm info webextension-polyfill version)"; then
	npm publish || true
fi
