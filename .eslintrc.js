module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off' //disabled due windows/linux conflict
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    'APP_KEY': true,
    'BASE_URL': true,
    'ARTISTS_SERVICE': true,
    'EVENTS_SERVICE': true,
  },
};
