/**
 * Created by ken on 2018/5/27.
 */
/*
var datas = [
    {"name" : "乔峰" , "subject" : "语文1" , "score" : 99.2},
    {"name":"张三丰","subject":"语文2","score":80.8},
    {"name":"张无忌","subject":"语文3","score":70.8},
];
var ulAppend = document.querySelector(".s5ul")
var firstLi = document.createElement("li")
ulAppend.appendChild(firstLi)
for(var i = 0;i<datas.length;i++){
    var th = document.createElement("th")
    th.innerHTML = heads[i];
    tr.appendChild(th)
}
//接下来是遍历datas,来判断tr 和里面的td了
for(var j = 0;j<datas.length;j++){
    var trs = document.createElement("tr")
    table.appendChild(trs)
    //接下来遍历对象判断和获取td值,
    for(var key in datas[j]){
        var td = document.createElement("td");
        td.innerHTML = datas[j][key];//这里解析器已经识别了datas[j].所以可以直接用对象[key]的方式
        trs.appendChild(td)
    }
}*/
var loveTT = document.getElementById("loveTT")
loveTT.onclick = function(){
   /* var ulAppend = document.querySelector(".s5ul")
    var liAppend = ["<li>"];
    liAppend.push('<a href="#"><img src="images/vpic_8.png" alt=""/></a>')
    liAppend.push('<p class="version_name">我们的爱</p>')
    liAppend.push('<p class="version_name">哈哈</p>')
    liAppend.push("</li>")
    var allAppend = liAppend.join("");
    ulAppend.innerHTML =allAppend;*/
    //这种方法会冲刷掉之前的写法,要去掉定位才可以正确显示,
    //等下加显示隐藏


}