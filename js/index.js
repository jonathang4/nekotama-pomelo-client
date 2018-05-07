  var Emitter = require('./emitter');
  window.EventEmitter = Emitter;

  var protocol = require('./protocol');
  window.Protocol = protocol;
  
  var protobuf = require('./protobuf');
  window.protobuf = protobuf;
  console.log("protocol",protocol);
  var pomelo = require('./pomelo-client');
  window.pomelo = pomelo;
