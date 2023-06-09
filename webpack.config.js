const path = require("path");

const CSS_PREFIX = "S2Player";

const isProd = process.argv.includes("production");

module.exports = {
  entry: path.join(__dirname, isProd ? "src/index.ts" : "dev.ts"),
  output: {
    filename: isProd ? "ncplayer.min.js" : "app.bundle.js",
    path: path.resolve(__dirname, "test"),

    ...(isProd
      ? {
          library: {
            type: "window",
            name: "NCPlayer",
          },
        }
      : {}),
  },
  experiments: {
    outputModule: isProd,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: `${CSS_PREFIX}_[hash:base64:6]`,
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
