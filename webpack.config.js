// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

//   module.exports = {
//     mode: 'development',
//     entry: {
//       bundle: path.resolve(__dirname, 'app.js'),
//     },
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'bundle.js',
//       clean: true,
//       assetModuleFilename: '[name][ext]',
//     },
//       devtool: 'source-map',
//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, 'dist'),
//     },
//     port: 3000,
//     open: true,
//     hot: true,
//     compress: true,
//     historyApiFallback: true,
//   },
//   resolve: {
//     fallback: {
     
//       http: require.resolve('stream-http'),
//       https: require.resolve('https-browserify'),
     
//       fs: false, // You can use 'false' or provide a specific polyfill if needed
//     },
//   },
//     module: {
//       rules: [
//               {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//               },
//               {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                   loader: 'babel-loader',
//                   options: {
//                     presets: ['@babel/preset-env'],
//                   },
//                 },
//               },
//               {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 use: ['file-loader'],
//               },
//               // ejs setting failed
//               {
//                 test: /\.ejs$/,
//                 loader: 'ejs-loader',
             
//               },
//             ],
//     },

//     plugins: [
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'agenda.html',
//             template: './views/agenda.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'home.html',
//             template: './views/home.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'profile.html',
//             template: './views/profile.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'register.html',
//             template: './views/register.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'weather.html',
//             template: './views/weather.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'footer.html',
//             template: './views/partials/footer.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'header.html',
//             template: './views/partials/header.ejs',
//           }),
//           new HtmlWebpackPlugin({
//             title: 'instantassistant',
//             filename: 'nav.html',
//             template: './views/partials/nav.ejs',
//           }),
//           new BundleAnalyzerPlugin(),
//         ],
//   }
