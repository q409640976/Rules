// URL = ^https:\/\/oauth\.secure\.pixiv\.net\/auth\/token

let body = $response.body
body=JSON.parse(body)
body['response']['user']['is_premium']=true
body=JSON.stringify(body)
$done({body}