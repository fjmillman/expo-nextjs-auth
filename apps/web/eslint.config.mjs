import webConfig from 'eslint-config/web.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
const config = [{ ignores: ['.next/**'] }, ...webConfig];

export default config;
