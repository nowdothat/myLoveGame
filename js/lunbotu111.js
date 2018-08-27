/**
 * Created by ken on 2018/5/10.
 *
 * 1.获取元素, 根据索引进行对应ul位置的改变
 * 2.设定向右移动的规律.执行向右轮播的定时器
 * 3.
 *
 */
//先获取元素,移动ul
function animate(element,target,step){
    //为了保证总是只有一个定时器作用，每次做动画之前，先把上一次动画的定时器清楚
    clearInterval(element.timer);
    // 继续进化，可以用同一个逻辑控制往左或者往右都可以
    element.timer = setInterval(function(){
        // 获取当前值
        var current = element.offsetLeft;
        // 计算下一步的位置
        step = step || 30;
        // 判断一下方向是往哪个方向
        if(current > target){
            // 如果当前比目标大，就是往左走，减少
            current -= step;
        }else{
            current += step;
        }
        // 设置回元素的样式
        element.style.left = current + "px";
        // 停下
        if( Math.abs(target - current) <= step ){
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    },20);
}

var box = document.getElementById("lunboyi");
var ul = box.children[0]//图片的父盒子
var lis = ul.children;//图片的所有集合


var tagI = document.getElementById("lunzi");//索引的父盒子
var ol = tagI.children; //下面的索引
//console.log(ol,tagI,lis)

var duiying = ol;
//console.log(duiying);
var lastPic = lis[0].cloneNode(true);
ul.appendChild(lastPic); //
var width = lis[0].offsetWidth;

for(var i = 0;i<duiying.length;i++){
    duiying[i].index = i;
    duiying[i].onmouseover = mouseoverHandle;
}
duiying[0].className = "color-lan";
function mouseoverHandle(){
    var index = this.index;
    var currentLeft = index*width * -1;
    animate(ul,currentLeft);
    for(var i = 0;i<duiying.length;i++){
        duiying[i].className = ""
    }
    duiying[index].className = "color-lan";
    currentSuoyin = index;
}
//然后执行mouseoverHandle的函数行不行?
//然后在外面定义一个索引使其对应起来?
var currentSuoyin = 0;

//定时器
function rotateV2(){
    if(currentSuoyin == lis.length-1){
        ul.style.left = 0;
        currentSuoyin = 0;
    }
    currentSuoyin++;
    var currentLeft = currentSuoyin *width * -1;
    animate(ul,currentLeft);
    //然后在这里进行索引的判断生成
    for(var i = 0;i<duiying.length;i++){
        duiying[i].className = ""
    }
    if(currentSuoyin == lis.length -1){
        duiying[0].className = "color-lan"
    }else{
        duiying[currentSuoyin].className = "color-lan"
    }
}
var temer = setInterval(rotateV2,1500)

box.onmouseover = function(){
    clearInterval(temer);
}
box.onmouseout = function(){
    temer = setInterval(rotateV2,1500);
}


function animateV2(element,target,step){
    //为了保证总是只有一个定时器作用，每次做动画之前，先把上一次动画的定时器清楚
    clearInterval(element.timer);
    // 继续进化，可以用同一个逻辑控制往左或者往右都可以
    element.timer = setInterval(function(){
        // 获取当前值
        var current = element.offsetLeft;
        // 计算下一步的位置
        step = step || 30;
        // 判断一下方向是往哪个方向
        if(current > target){
            // 如果当前比目标大，就是往左走，减少
            current -= step;
        }else{
            current += step;
        }
        // 设置回元素的样式
        element.style.left = current + "px";
        // 停下
        if( Math.abs(target - current) <= step ){
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    },20);
}