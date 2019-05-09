const request = new XMLHttpRequest();
const result = [];
var form = "";
var content;

var sec = document.querySelectorAll(".show-my-course-item");
for(i=0;i<sec.length;i++){
    var sub = sec[i].innerText.split(' ');
    var shinchoku = sec[i].innerText.split('\n');
    result.push(sub[0] + 'は' + shinchoku[1]);
}
var data = result.join("\n");
console.log(data);
var contentData = encodeURIComponent('content') + "=" + encodeURIComponent(data);
url = "https://*************.com/LINE_send.php";
request.open("POST", url);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(contentData);