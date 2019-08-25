let body = $response.body
body = JSON.parse(body)
body.data.notice = {};
body = JSON.stringify(body);
$done({body})
