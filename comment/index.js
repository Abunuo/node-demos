/**
 *
 * MODINA 评论脚本
 * by Monologue 2018/9/6
 *
 */
var request = require("request");
var http = require('http');
var j = request.jar();
var userList = [{
    mobile: '15712880306',
    password: '111111'
}, {
    mobile: '13501355743',
    password: 'yu3456789'
}]
var options = {
    baseUrl: 'https://login.modian.com',
    method: 'POST',
    headers: {
        'content-type': 'multipart/form-data; charset=utf-8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
        'Cache-Control': 'no-cache',
    },
    uri: '/u/ulogin/',
    json: true,
    formData: {
        mobile: '15712880306',
        password: '111111',
        type: 1,
        country_code: ''
    }
}
var opt = {
    baseUrl: 'https://zhongchou.modian.com',
    method: 'POST',
    headers: {
        'content-type': 'multipart/form-data; charset=utf-8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
        'Cache-Control': 'no-cache',
    },
    uri: '/dongtai/add_reply',
    json: true,
    formData: {
        post_id: 25160,
        content: '',
        attachment: '',
        sync_sina: ''
    }
}

// 定时器
// setInterval(function(){
// },1000*60*60*24*7);
login_comment();

//登录评论
function login_comment(){
    if(userList.length < 0) return;
    options.formData.mobile = userList[0].mobile;
    options.formData.password = userList[0].password;
    request(options, function(err, httpRes, body){
        if(body && body.status == 'OK'){
            var commentCount = 1;
            console.log('用户'+options.formData.mobile+'已经登录');
            opt.headers.Cookie = getCookie(httpRes.headers);
            var commentAjax = setInterval(function(){
                opt.formData.content = createContent();
                request(opt, function(err, httpRes, body){
                    console.log('\n第'+commentCount+'条：'+opt.formData.content)
                    console.log(body)
                    if(body.code == 1) {
                        commentCount++;
                        if(commentCount > 1){
                            clearInterval(commentAjax);
                            logout(opt.headers.Cookie);
                            userList.shift();
                            console.log('\n\n\n');
                            login_comment();
                        }
                    } else {
                        console.error(err);
                    }
                });
            },1000*60*2)
        } else {
            console.error(err);
        }
    });
}


//退出
function logout(cookie){
    request({
        url:'https://login.modian.com/u/logout?_mpos=nav_logout',
        headers: {
            'Cookie': cookie
        }
    }, function(err, httpRes, body){})
}


//获取 cookie
function getCookie(headers) {
    var cookies = headers['set-cookie'],
        resCookie = '';
    cookies.forEach(function(item){
        var currCookie = item.split(';')[0];
        if(currCookie.split('=')[0] == 'PHPSESSID') {
             resCookie = currCookie;
        }
    })
    return resCookie;
}

//生成内容
function createContent() {
    var word = '';
    for(var i = 0; i < 20; i++){
        word += String.fromCodePoint(Math.round(Math.random() * 20901) + 19968)
    }
    return word;
}
