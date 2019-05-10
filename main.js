const request = new XMLHttpRequest();
const result = [];
var form = "";
var content;
var now = new Date();
var mon = now.getMonth()+1;
var day = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var seco = now.getSeconds();

var sec = document.querySelectorAll(".show-my-course-item");
var userName = document.querySelectorAll(".name");
for(i=0;i<sec.length;i++){
    var sub = sec[i].innerText.split(' ');
    var shinchoku = sec[i].innerText.split('\n');
    var res = "<div class='text'>"  + sub[0] + 'は' + shinchoku[1] + "</div>";
    result.push(res);
}
var hyoujiData = result.join("<br>");

var hyouji = document.getElementsByClassName('l-column-sub');
if(hyouji[0] === undefined){
	location.reload();
}
hyouji[0].innerHTML="<div class='u-card u-recommendation-list'><div class='u-list-header typo-list-title'>" + userName[0].innerText + "さんの進捗状況</div><div class='u-card-inner'>"+ hyoujiData +"</div></div>"+hyouji[0].innerHTML;