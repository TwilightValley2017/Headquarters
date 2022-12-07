module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true, // https://www.codegrepper.com/tpc/%27__dirname%27+is+not+defined.eslintno-undef
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module", // https://www.jianshu.com/p/2d6550a83f06 | https://juejin.cn/post/7025870140537307150
    },
    "rules": {
      semi: ["error", "never"]
    }
}
