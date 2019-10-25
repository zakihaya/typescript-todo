module.exports = {
  // エントリポイント
  entry: "./src/js/app.ts",
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
