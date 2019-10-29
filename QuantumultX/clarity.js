var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];
if(bundle_id == "me.clarityapp")
{
obj.receipt["in_app"] = "[
{"quantity":"1", "product_id":"claritymagazine", "transaction_id":"530000481357673", "original_transaction_id":"530000481357673", "purchase_date":"2019-10-09 18:44:13 Etc/GMT", "purchase_date_ms":"1570646653000", "purchase_date_pst":"2019-10-09 11:44:13 America/Los_Angeles", "original_purchase_date":"2019-10-09 18:44:16 Etc/GMT", "original_purchase_date_ms":"1570646656000", "original_purchase_date_pst":"2019-10-09 11:44:16 America/Los_Angeles", "expires_date":"2999-10-09 18:44:13 Etc/GMT", "expires_date_ms":"1602269053000", "expires_date_pst":"2999-10-09 11:44:13 America/Los_Angeles", "web_order_line_item_id":"530000161222616", "is_trial_period":"false", "is_in_intro_offer_period":"false"}]"
}

$done({body: JSON.stringify(obj)});