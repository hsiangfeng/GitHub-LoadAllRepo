module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": [
      "error",
      "never"
    ], // 該規則關閉強制使用對象和數組文字中的逗號
    "no-console": 0, // 關掉console.log()提示
    "no-alert": 0, // alert提示
  }
};