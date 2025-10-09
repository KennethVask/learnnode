import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


let pages = [];
for(let i = 1; i<10; i++){
  let page =   new HtmlWebpackPlugin({
      filename:`page${i}.html`,
      template: './src/views/page.njk',
      templateParameters: {
        page: i
      }
    });
    pages.push(page);
}

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ],
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {}
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.njk',
      templateParameters: {
        name: 'Kenneth',
        fruits: ['apple', 'cherry', 'mango', 'pineapple']
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'About.html',
      template: './src/views/About.njk',
    }), new HtmlWebpackPlugin({
      filename: 'Contacts.html',
      template: './src/views/Contacts.njk',
    }),
    ...pages
  ],
};
