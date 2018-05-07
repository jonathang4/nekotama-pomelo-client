  var Emitter = require('./js/emitter');
  window.EventEmitter = Emitter;

  var protocol = require('./js/protocol');
  window.Protocol = protocol;
  
  var protobuf = require('./js/protobuf');
  window.protobuf = protobuf;
  console.log("protocol",protocol);
  var pomelo = require('./js/pomelo-client');
  window.pomelo = pomelo;
