module.exports = function (registerCommand) {
  registerCommand(
    'command',
    'description',
    function (groupLocalID, userDisplayName, msgTokens, callback) {
      var response = '...';
      callback(response);
    }
  );
};
