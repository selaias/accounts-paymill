# accounts-WePay

Login service for Paymill accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure WePay login services. Example:
```
ServiceConfiguration.configurations.remove({
    service: "Paymill"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "paymill" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Paymill button.