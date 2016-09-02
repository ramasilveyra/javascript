module.exports = {
  extends: [
    'eslint-config-auth0-base',
    'eslint-config-auth0-base/rules/strict',
    './rules/react',
    './rules/react-a11y'
  ].map(require.resolve),
  rules: {}
};
