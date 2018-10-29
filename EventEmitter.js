var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();
    process.nextTick(function() {
        var count = 0;
        e.emit('start');
        var t = setInterval(function() {
            e.emit('data', count++);
            if (count == c) {
                e.emit('done', count);
                clearInterval(t);
            }
        }, 10);
    });
    
    return (e);
};

var r = getResource(5);

r.on('start', function() {
    console.log('Event Emitter started');
});

r.on('data', function(data) {
    console.log('    Received data ==> ' + data);
});
        
r.on('done', function(totalCount) {
    console.log('Done after ' + totalCount + ' events!');
});
