module.exports = {
  // production ... 最適化
  // development ... ソースマップ
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  // import で ts ファイルを解決
  resolve: {
    extensions: [
      '.ts'
    ]
  }
};
  