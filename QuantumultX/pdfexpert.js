var obj = JSON.parse($response.body);

obj= {
  "subscriptionExpirationDate": "13:15 03/11/2099"
};

$done({body: JSON.stringify(obj)});
