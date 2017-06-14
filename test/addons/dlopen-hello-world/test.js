'use strict';
const common = require('../../common');
const assert = require('assert');
const os = require('os');
process.dlopen(module, require.resolve(`./build/${common.buildType}/binding`),
               os.constants.dlopen.RTLD_NOW | os.constants.dlopen.RTLD_LOCAL)
assert.strictEqual(module.exports.hello(), 'world');
console.log('binding.hello() =', module.exports.hello());
