import eslint from '@eslint/js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReactRecommended from 'eslint-plugin-react';
import globals from 'globals';
import tsEslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReactRecommended.configs.flat.recommended,
  pluginReactRecommended.configs.flat['jsx-runtime'],
  pluginJsxA11y.flatConfigs.recommended,
];