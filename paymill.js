Accounts.oauth.registerService('paymill');
if (Meteor.isClient) {
  Meteor.loginWithPaymill = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Paymill.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.paymill'],
    forOtherUsers: ['services.paymill.id']
  });
}