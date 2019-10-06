// Copyright (c) 2019 deviltea
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = {
  devServer: {
    // Enable dev server to accept the external requests.
    disableHostCheck: true
    // public: 'https://a9bb53d0.ngrok.io'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/happy-birthday-yaoandy/'
    : '/'
}
