// URL = ^https:\/\/app-api\.pixiv\.net\/v1\/search.*popular

let url = 'https://pixiv.mlyx.workers.dev/?api=pixiv'

let headers = $request.headers
$httpClient.get(url, (error, response, data) => {
    if (error) {
        $done({})
    }
    else {
        headers['Authorization'] = `Bearer ${data}`
        $done({headers})
    }
})