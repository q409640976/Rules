let obj = JSON.parse($response.body);
obj = {
  "originalTransactionId": "330000538589189",
  "subscriptionState": "trial",
  "isInGracePeriod": false,
  "subscriptionExpirationDate": "13:59 03/11/2999",
  "subscriptionAutoRenewStatus": "autoRenewOff",
  "isEligibleForIntroPeriod": false,
  "isPDFExpert6User": true,
  "subscriptionReceiptId": "1553358285000"
};
$done({body: JSON.stringify(obj)});