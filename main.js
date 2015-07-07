var fs            = require('fs');
var path          = require('path');
var child_process = require('child_process');

var bin = path.join(__dirname, 'bin', process.platform);
var exe = path.join(bin, (process.platform == 'win32' ? '7za.exe' : '7z') );

function unpack(source_file, target_dir) {
  var result = child_process.execFileSync(
    exe, [
    'x', '-o' + target_dir, source_file
  ]);
  /*, {}, function (error, stdout, stderr) {

    console.log('unpack');
    if (error)  console.log(error);
    if (stdout) console.log(stdout.toString('utf-8'));
    if (stderr) console.log(stderr.toString('utf-8'));
  });
  */
  console.log(result.toString('utf-8'));
}
module.exports = unpack;
