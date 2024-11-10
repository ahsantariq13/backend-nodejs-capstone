import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'spaced-comment': ['error', 'always'],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': ['error'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'indent': ['error', 2],
      'comma-spacing': ['error', { before: false, after: true }],
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },
];
