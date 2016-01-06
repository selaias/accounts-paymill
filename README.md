# accounts-paymill

Login service for Paymill accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Paymill login services. Example:
```
ServiceConfiguration.configurations.remove({
    service: "paymill"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "paymill" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Paymill button.