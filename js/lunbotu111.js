/**
 * Created by ken on 2018/5/10.
 *
 * 1.��ȡԪ��, �����������ж�Ӧulλ�õĸı�
 * 2.�趨�����ƶ��Ĺ���.ִ�������ֲ��Ķ�ʱ��
 * 3.
 *
 */
//�Ȼ�ȡԪ��,�ƶ�ul
function animate(element,target,step){
    //Ϊ�˱�֤����ֻ��һ����ʱ�����ã�ÿ��������֮ǰ���Ȱ���һ�ζ����Ķ�ʱ�����
    clearInterval(element.timer);
    // ����������������ͬһ���߼���������������Ҷ�����
    element.timer = setInterval(function(){
        // ��ȡ��ǰֵ
        var current = element.offsetLeft;
        // ������һ����λ��
        step = step || 30;
        // �ж�һ�·��������ĸ�����
        if(current > target){
            // �����ǰ��Ŀ��󣬾��������ߣ�����
            current -= step;
        }else{
            current += step;
        }
        // ���û�Ԫ�ص���ʽ
        element.style.left = current + "px";
        // ͣ��
        if( Math.abs(target - current) <= step ){
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    },20);
}

var box = document.getElementById("lunboyi");
var ul = box.children[0]//ͼƬ�ĸ�����
var lis = ul.children;//ͼƬ�����м���


var tagI = document.getElementById("lunzi");//�����ĸ�����
var ol = tagI.children; //���������
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
//Ȼ��ִ��mouseoverHandle�ĺ����в���?
//Ȼ�������涨��һ������ʹ���Ӧ����?
var currentSuoyin = 0;

//��ʱ��
function rotateV2(){
    if(currentSuoyin == lis.length-1){
        ul.style.left = 0;
        currentSuoyin = 0;
    }
    currentSuoyin++;
    var currentLeft = currentSuoyin *width * -1;
    animate(ul,currentLeft);
    //Ȼ������������������ж�����
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
    //Ϊ�˱�֤����ֻ��һ����ʱ�����ã�ÿ��������֮ǰ���Ȱ���һ�ζ����Ķ�ʱ�����
    clearInterval(element.timer);
    // ����������������ͬһ���߼���������������Ҷ�����
    element.timer = setInterval(function(){
        // ��ȡ��ǰֵ
        var current = element.offsetLeft;
        // ������һ����λ��
        step = step || 30;
        // �ж�һ�·��������ĸ�����
        if(current > target){
            // �����ǰ��Ŀ��󣬾��������ߣ�����
            current -= step;
        }else{
            current += step;
        }
        // ���û�Ԫ�ص���ʽ
        element.style.left = current + "px";
        // ͣ��
        if( Math.abs(target - current) <= step ){
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    },20);
}