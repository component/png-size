
/**
 * Module dependencies.
 */

var File = require('file');

/**
 * Read dimensions from PNG `file` and invoke `fn(err, w, h)`.
 *
 * @param {File|Blob} file
 * @param {Function} fn
 * @api public
 */

module.exports = function(file, fn){
  File(file).toArrayBuffer(function(err, buf){
    if (err) return fn(err);
    var off = 16;
    var view = new DataView(buf);
    var w = view.getUint32(off, false));
    var h = view.getUint32(off + 4, false);
    fn(null, w, h);
  });
};
