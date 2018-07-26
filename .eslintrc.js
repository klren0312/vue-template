module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 2空格缩进 auto
    "indent": [
      "error",
      2
    ],
    // unix 换行风格 auto
    // "linebreak-style": [
    //   "error",
    //   "windows"
    // ],
    // 强制单引号 auto
    "quotes": [
      "error",
      "single"
    ],
    // 禁止分号 auto
    "semi": [
      "error",
      "never"
    ],
    // 变量定义或参数声明未使用
    "no-cond-assign": [
      "warn"
    ],
    // 强制 !== 和 ===, 和 null 或 undefined 比较例外
    "eqeqeq": [
      "error",
      "allow-null"
    ],
    // 强制大括号风格 auto
    "curly": [
      "error",
      "all"
    ],
    // 强制末尾换行 auto
    // "eol-last": [
    //   "error"
    // ],
    // 关键字空格 auto
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    // 强制单行代码块中使用空格 auto
    "block-spacing": [
      "error",
      "always"
    ],
    // 逗号前面不能由空格, 后面要空格 auto
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    // 冒号前面不能有空格, 后面必须有空格, 键值需水平对齐 auto
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "align": "value"
      }
    ],
    // 参数未使用提示
    "no-unused-vars": [
      "warn",
      {
        "var": "all",
        "all": "all"
      }
    ],
    // 禁用行尾空格 auto
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    // 函数左括号左边不能有空格 auto
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    // 操作符周围有空格 auto
    "space-infix-ops": [
      "error",
      {
        "int32Hint": false
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}