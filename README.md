# TypeScriptでTODOアプリ

## 環境構築

参考

https://ics.media/entry/16329/

必要なパッケージのインストール

```
yarn add --dev webpack webpack-cli typescript ts-loader
```

package.jsonに追記

```json
{
  // -- 追記ここから
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development -w"
  },
  // -- 追記ここまで
  "devDependencies": {
    "ts-loader": "^6.2.1",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9"
  },
  // -- 追記ここから
  "private": true
  // -- 追記ここまで
}
```

tsconfig.json追加

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "module": "es2015"
  }
}
```

webpack.config.js追加

```json
module.exports = {
  // エントリポイント
  entry: "./src/js/app.ts",
  // 出力先
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  }
};
```
