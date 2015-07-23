var fs            = require('fs');
var path          = require('path');
var child_process = require('child_process');

var bin = path.join(__dirname, 'bin', process.platform);
var exe = path.join(bin, (process.platform == 'win32' ? '7za.exe' : '7z') );

function unpack(source_file, target_dir) {
  try {
    source_file = path.normalize(source_file);
    target_dir  = path.normalize(target_dir);
    console.log('unpack ' + source_file + ' to ' + target_dir);
    var result = child_process.execFileSync(exe, [
        'x', '-o' + target_dir, source_file]);
    console.log(result.toString('utf-8'));
    return true;
  }
  catch(e) {
    console.error(e.stack)
    console.log(e.stderr.toString('utf-8'));
    if (e.pid) console.log('%s (pid: %d) exited with status %d',
        e.file, e.pid, e.status)
  }
  return false;
}
module.exports = unpack;
