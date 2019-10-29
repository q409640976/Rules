var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];
if(bundle_id == "cn.linfei.SimpleRecorder")
{
obj.receipt.in_app = [
{"quantity":"1", "product_id":"cn.linfei.SimpleRecorder.Plus.Monthly", "transaction_id":"330000538609468", "original_transaction_id":"330000538609468", "purchase_date":"2019-10-27 14:04:46 Etc/GMT", "purchase_date_ms":"1572185086000", "purchase_date_pst":"2019-10-27 07:04:46 America/Los_Angeles", "original_purchase_date":"2019-10-27 14:04:47 Etc/GMT", "original_purchase_date_ms":"1572185087000", "original_purchase_date_pst":"2019-10-27 07:04:47 America/Los_Angeles", "expires_date":"2999-10-30 14:04:46 Etc/GMT", "expires_date_ms":"1572444286000", "expires_date_pst":"2999-10-30 07:04:46 America/Los_Angeles", "web_order_line_item_id":"330000185047927", "is_trial_period":"true", "is_in_intro_offer_period":"false"}]
}

$done({body: JSON.stringify(obj)});