/*
启用此脚本后再 Safari 打开 https://workingcopy.app/education/ 点击「tap here to access all pro features.」中的 here 跳转到 Working Copy，登录自己的 GitHub 账号即可解锁
*/

// URL = ^https:\/\/education\.github\.com\/api\/user$

$done({body: '{"student": true}'})