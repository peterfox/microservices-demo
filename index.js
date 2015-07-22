console.log('Loading function');
exports.handler = function(event, context) {
  context.done(null, {"Hello":"World"});  // SUCCESS with message
};
