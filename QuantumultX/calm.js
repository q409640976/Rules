var obj = JSON.parse($response.body);

obj["subscription"]= {
  "in_free_trial_window": true,
    "subscription_plan": "com.calm.yearly.trial.one_week.usd_70",
    "began": "2019-10-29T18:03:31.000Z",
    "purchaser_platform": "ios",
    "valid": true,
    "is_renewable": true,
    "is_in_billing_retry_period": false,
    "will_renew": true,
    "expires": "2999-11-05T19:03:31.000Z",
    "user_id": "gbiR72bcZ",
    "type": "ios",
    "is_canceled": false,
    "free_trial_began": "2019-10-29T18:03:31.000Z",
    "payment_processor": "itunes",
    "has_ever_done_free_trial": true,
    "is_free": false,
    "is_lifetime": false,
    "free_trial_ended": "2999-11-05T19:03:31.000Z",
    "ios_details": {
      "id": "330000539438840",
      "began": "2019-10-29T18:03:31.000Z",
      "purchaser_platform": "ios",
      "is_free_trial": true,
      "is_renewable": true,
      "is_in_billing_retry_period": false,
      "will_renew": true,
      "expires": "2999-11-05T19:03:31.000Z",
      "is_canceled": false,
      "payment_processor": "itunes",
      "free_trial_began": "2019-10-29T18:03:31.000Z",
      "original_transaction_id": "330000539438840",
      "product_id": "com.calm.yearly.trial.one_week.usd_70",
      "free_trial_ended": "2999-11-05T19:03:31.000Z"
};

$done({body: JSON.stringify(obj)});

