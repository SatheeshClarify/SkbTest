//Change message on SIGTERM event
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    process.stdout.write('Data ----> ' + chunk);
});

process.stdin.on('end', function() {
    process.stderr.write('End\n');
});

process.on('SIGTERM', function() {
    process.stderr.write('Got a SIGTERM - About to terminate???');
});

console.log('Node is running as id: ' + process.pid);