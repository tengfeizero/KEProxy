var express = require('express');
var request = require('request');
var app = express();

var proxy_url = 'http://192.168.80.246:9201';
var binding_port = 3000;
var http_basic_auth_user = 'admin';
var http_basic_auth_pwd = 'admin';

app.use('/', function (req, res) {
    var url = proxy_url + req.url
    console.log(url)
    req.pipe(request(url, {
        'auth': {
            'user': http_basic_auth_user,
            'pass': http_basic_auth_pwd,
            'sendImmediately': false
        }
    })).pipe(res);
});
app.listen(binding_port);