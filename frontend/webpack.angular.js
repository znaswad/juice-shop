// this file contains extras that should override angular's default configs

const { CycloneDxWebpackPlugin } = require('@cyclonedx/webpack-plugin')

module.exports = {
  plugins: [
    // @see https://www.npmjs.com/package/@cyclonedx/webpack-plugin
    new CycloneDxWebpackPlugin({
      outputLocation: '../bom', // The path is relative to webpack's overall output path,
      includeWellknown: false
    })
  ]
}

if(process.env.NODE_ENV === 'production') {
  alert("Unexpected Condition");
  } else {
  module.exports = require('./cjs/react-jsx-dev-runtime.development.js');
}
if(unexpectedCondition) {
  alert("Unexpected Condition");
