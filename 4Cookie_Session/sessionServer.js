const http = require('http');
const fs=require('fs');
const {URL}=require('url');
const a = require('cookie-parser');
console.log(a);

// const session = {};
// let count = 0;

// function makeContents(fileName,res){
//     fs.readFile(fileName, (err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.writeHead(200,
//             {'Content-Type':'text/html;charset=utf-8'});
//         res.end(data);
//     }); 
// }

// http.createServer((req,res)=>{
//     console.log(req.url, " ", session);
//     if(req.url==='/'){
//         makeContents('./index.html',res);
//         // res.end();
//     }else if(req.url.startsWith('/login')){
        
//         //1. id/pw 꺼내기
//         const myURL=new URL('http://localhost:9999'+req.url);
//         const id = myURL.searchParams.get('id');
//         const pw = myURL.searchParams.get('pw');
//         //2. id!=null && pw != null ==> login ok ==> sessionid 만들기
//         if(id && pw){
//             session[++count]={
//                 id,
//                 pw,
//                 sayJS(){
//                     //...이렇게 하는 것과 다르게 하는 방식의 문제를 알기 위해 현재 공부하고 있는 것. 프로토타입을 배운 이유도 이것 때문.
//                     //매우 중요.
//                 }
//             };//session.1.id / session.1.pw 로 접근하게되는 것.
//             //3. 이 세션 id를 쿠키로 만들고 res정보를 세팅해줘야함.
//             res.writeHead(200,{
//                 'Content-Type':'text/html;charset=utf-8',
//                 'Set-Cookie':`NODE_SESSIONID=${count}`});
//                 res.write(`${id}님 환영합니다.`);
//                 makeContents('./product.html',res);//위쪽의 res와 이 줄의 res가 다른 res이므로 동시성 문제가 발생함.
//                 //같은 객체에 대해서 나는 얘가 이미 끝났다고 생각하고 return하려고하는데 이 객체는 넘어가서 꼬여버리게된다.
//                 // res.end();
//             }
//             //4. else ==> 로그인 fail ==> index로 응대.
//             else{
//                 makeContents('./index.html',res);
                
//             }
//         }else if(req.url.startsWith('/basket')){
//             let session_var_name;
//             const myURL=new URL('http://localhost:9999'+req.url);
//             const product = myURL.searchParams.get('product');
//             req.headers.cookie.split(';').forEach((ele)=>{
//                 if(ele.startsWith('NODE_SESSIONID')){
//                 session_var_name = ele.split('=')[1];//값을 얻을 때는 1, 이름을 얻을 때는 0.
//                 const logined_id = session[session_var_name].id;//cookie의 value가 session의 이름이 됨.
//                 if(logined_id){//login status check ok
//                     if(session[session_var_name].product){
//                         session[session_var_name].product.push(product);
//                     }else{
//                         session[session_var_name].product=[product];
//                     }
//                     res.writeHead(200,{
//                         'Content-Type' : 'text/html;charset=utf-8',
//                     });
//                     res.write(`${id}님의 장바구니에 ${product}가 담겼습니다.`);
//                     res.write('<hr><h3>장바구니 목록</h3>');
//                     session[session_var_name].product.forEach((ele)=>{
//                         res.write(`<br>${ele}`);
//                     });//배열에 있는 것을 하나하나 꺼내주는 것이 forEach임.
//                     // res.write("<a href=''>keep shoping</a>")
//                     makeContents('./product.html',res);
//                     res.end();
//                 }else{
//                     //session id 는 있지만 login id가 없는 상태. 해킹으로 규정.
//                     //개발자들이 까먹기 쉬움. 세션아이디가 있으면 id가 당연히 있을것이라고 생각하는데 그렇지 않음.
//                     //해킹사고-->침해대응
//                 }
//              }else{//session id를 가져오지 못한 상황. 해킹 상태는 아님, 일반 유저들도 브라우저로 직접 url을 적을 때가 있음. 
//                 //한 창의 url을 넣고 새창을 여는 경우 등.
//                 makeContents('./index.html',res);
//              }
//          });//NODE_SESSIONID=1
//         }else{
//             console.log(req.url);
//             console.log(req.headers);
//             res.writeHead(200,
//                 {'Content-Type':'text/html;charset=utf-8'});
//             res.end('요청 처리 불가');
//     }
// }).listen(9999,()=>{
//     console.log('9999 server ready...');
// });


