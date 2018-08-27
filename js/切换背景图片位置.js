/**
 * Created by ken on 2018/5/24.
 */
$(function () {

    //做一个导航固定案例   ,好像不太行
    /*   var Hg = $(".bigBox").offset().top;
     $(window).scroll(function() {
     var docSccrollTop = $(document).scrollTop();
     if (docSccrollTop > Hg) {
     $(".bigBox").css({
     "position": "fixed",
     "top": 0
     });
     // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度
     $(".bigBeijing").css("margin-top", $(".bigBox").height());
     } else {
     $(".bigBox").css({
     "position": "static"
     }); /!*静态定位*!/
     $(".bigBeijing").css("margin-top", 0);
     }
     });*/


    $(".headerOneUl li>a").mouseenter(function () {
        var indexxx = 159;
        var indexshu = 35;
        var index = $(this).index() + 1;
        var tt = (indexshu + indexxx) * -1;
        //$(this).css({backgroundPosition : "35px -77px"})
        //$(this).css({backgroundPosition : tt+"px  -77px"})
        //$(this).css({backgroundPosition : "+(indexshu*indexxxx)+" "-77px"})
    })
    /*$(".headerOneUl li>a").hover(function(){
     $(this).css({backgroundColor : "skybule"})
     })*/


    //这是顶部隐藏特效
    $(".bigBox").on("mouseenter", function () {
        //$(".yingchang").addClass("animated rotateInUpRight")
        //$(".yingchang").animate({width:100,height:100,opacity:1},2000)
        $(".yingchang").fadeIn(500);
        //console.log(1);
    })
    $(".yingchang").on("mouseleave", function () {
        $(".yingchang").stop(true, true).slideUp(2000)
    })

    //做个linew标签特效
    $("#texiao1 li a").mouseenter(function () {
        $(this).stop().addClass("animated rotateIn").siblings().removeClass();
    })
    $("#texiao1 li a").mouseleave(function () {
        $(this).removeClass();
    })

    $(".infoOne ul li").children().mouseenter(function () {
        $(this).stop().addClass("animated swing").siblings().removeClass();
    })
    $(".infoOne ul li").children().mouseout(function () {
        $(this).removeClass();
    })

    //做简单的tab栏切换之职业
    $(".tabTwo ul li").on("mouseover", function () {
        //$(this).parent().parent().siblings(".infoOld").children().eq($(this).index()).show().siblings().hide()
        var indexTwo = $(this).index();
        $(".sec3Right").find(".infoOld").children().eq(indexTwo).show().siblings().hide();

    })


    //简单Tab栏切换之公告栏
    $(".newsTab ul li").on("mouseenter", function () {
        // console.log(12);
        var indexppp = $(this).index();
        $(".tabOne_1").children().eq(indexppp).show().siblings().hide()
    })

    function changeImg() {
        var img = document.getElementById("down1")
        if (img.src.indexOf("load1") > 0) {
            img.src = "./images/download2.png"
        } else {
            img.src = "./images/download1.png"
        }
    }

    function changeImg2() {
        var img = document.getElementById("down2")
        if (img.src.indexOf("v1") > 0) {
            img.src = "./images/tv2.png"
        } else {
            img.src = "./images/tv1.png"
        }
    }

    //changeImg()
    /*$("#down1").click(function(){
     var img = document.getElementById("down1")
     if(img.src.indexOf("load1") > 0){
     this.src = "./images/download2.png"
     }else{
     this.src = "./images/download1.png"
     }
     })*/

    var ccww = setInterval(changeImg, 800)
    var ccww = setInterval(changeImg2, 800)


    //彩蛋系列
    $("#logoO").click(function () {
        $("#congdada").hide()
    })
 /*   $("#down1").click(function () {
        $("#congdada").show()
        $("#congdada").animate({
            "left": "0px"
        }, 3000, "linear", function () {
            //console.log(1);
            $("#congdada").animate({
                "width": "0px",
            }, 1500, function () {
                $("#congdada").hide()
            })
        })
    })*/

    $("#down1").click(function () {
        $("#congdada").show()
        $("#congdada").animate({
            "left": "0px"
        }, 3000, "linear", function () {
            //console.log(1);
            $("#congdada")[0].style = ""
            $("#congdada").animate({
                "right": "1000px",
            }, 1500, function () {
                $("#congdada").hide()
            })
        })
    })


    //尾部鼠标移动事件
    $(".section5").on("mouseenter", function () {
        var fuul = $(".section5")
        $(".s5ul li a").on("mouseenter", function (e) {
            var indexLLLL = $(this).parent().index();
            var yidongLeft = indexLLLL * 120 * -1;
            $(this).parent().parent().stop().css({
                "left": yidongLeft
            })
            $(".s5ul li a").children().css("filter", "grayscale(0.9) brightness(1.1)")
            //$(this).addClass("removeClass")
            //console.log($(this).children());
            $(this).children().css("filter", "none")


            //$(".s5ul li a img").eq(this).removeClass("removeClass")
            if (indexLLLL > fuul.children.length) {
                fuul.css("left", 0)
            }
        })
    })


    //尾部广告固定
    $(function () {
        $(".guanggao").on("click", function () {
            // console.log(1)
            $(this).css("z-index", 0)
            $(".guanggaotu").css("display", "block")
        })
    })
    $(function () {
        $(".guanggaotu").on("click", function () {
            // console.log(1)
            $(this).css("display", "none")
            $(".guanggao").css("z-index", 2)
            /*console.log($(document).scrollTop())
             $(document).scrollTop() = 0;*/

            //$("html,body").animate({scrollTop:0}, 50);

        })
    })


    //回到顶部系列
    function changeImg3() {
        var img = document.getElementById("downhuo3")
        if (img.src.indexOf("c_20") > 0) {
            img.src = "./images/vpic_21.png"
        } else {
            img.src = "./images/vpic_20.png"
        }
    }

    var ccww = setInterval(changeImg3, 800)

    //这里要进行判断处理
    /* $(".dibuhuo").click(function(){
     var ele =   $(".dibuhuo")
     ele.animate({
     bottom : "2500%"
     },3500,function(){
     //$("html,body").animate({scrollTop:0}, 3050);
     },2500)
     //$("html,body").animate({scrollTop:0}, 3050);
     })*/
    $(".dibuhuo").click(function(){
        var ele =   $(".dibuhuo")
        $("html,body").animate({scrollTop:"10%"},3500)
        ele.animate({
            bottom : "250%"
        },3500,function(){
            $("html,body").animate({scrollTop:0})
        })
    })

    //做滑块特效
    /*  $(".dibuhuo").click(function(){
     var tup = $(".dibuhuo")
     var ele =   $(".dibuhuo").offset().top;
     var ele1 = $(".dibuhuo").css(bottom)
     console.log(ele1);
     console.log(ele);
     //$("html,body").animate({scrollTop:"10%"},3500)
     ele = $("html,body").scrollTop;
     tup.animate({
     //bottom : "250%"
     ele : 0,

     },3500,function(){
     //$("html,body").animate({scrollTop:0})
     })
     })*/


    //做一个添加图片案例

    //如果是一次性生成,直接用数组把,写好之后再考虑用添加的方法
   /*   var datas = [
        {"name" : "乔峰" , "subject" : "语文1" , "score" : 99.2},
        {"name":"张三丰","subject":"语文2","score":80.8},
        {"name":"张无忌","subject":"语文3","score":70.8},
    ];*/

    $("#loveContent input").focus(function(){
        $("#loveContent input").val("")
    })
    $("#loveContent input").blur(function(){
        var val = $("#loveContent input").val()
        if(val.length < 0){
            $("#loveContent input").val("")
        }
    })

    $("#loveTT").on("click", function () {
        //等下这里加入判断- 输入内容出现第几...个添加元素
        /* var ulBoss = $(".s5ul")
         var liappend = $("<li></li>")
         var aappend = $('<a href="#"><img src="./images/vpic_18.png"/></a>>')
         var pappend = $('<p class="version_name">我们的爱</p>')
         var p1append = $('<p class="version_name">我们的爱</p>')
         var all = "liappend" + "aappend" + "pappend" + "p1append"
         console.log(liappend,aappend);
         ulBoss.append(all);*/
        var ulBoss = $(".s5ul")
        /*        var liappend = $('<li><a href="#"><img src="./images/vpic_18.png"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">我们的爱</p> </li>')
         var aappend = $('>')
         var pappend = $('')
         var p1append = $('')
         var all = "liappend" + "aappend" + "pappend" + "p1append"
         //console.log(liappend,aappend);
         ulBoss.append(liappend);*/

        //获取内容进行判断
        //console.log($("#loveContent"))
        //console.log($("#loveContent input").val());
        var val = $("#loveContent input").val();
        console.log(val);
        if (val.indexOf("王占一") == 0 ) {
            console.log(1);
            var liappend = $('<li><a href="#"><img src="./images/vpic_18.png"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">王占一老师</p> </li>');
            ulBoss.append(liappend);
        } else if (val.indexOf("蒋小聪") == 0) {
            var liappend = $('<li><a href="#"><img src="./images/cong.jpg"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">蒋小聪老师</p> </li>');
            ulBoss.append(liappend);
        }else if (val.indexOf("西岭") == 0) {
            var liappend = $('<li><a href="#"><img src="./images/xi.jpg"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">西岭老师</p> </li>');
            ulBoss.append(liappend);
        }else if (val.indexOf("吴彩媚") == 0) {
            var liappend = $('<li><a href="#"><img src="./images/cai1.jpg"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">吴彩媚老师</p> </li>');
            ulBoss.append(liappend);
        }else if (val.indexOf("朱云飞") == 0) {
            var liappend = $('<li><a href="#"><img src="./images/fei.jpg"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">朱云飞老师</p> </li>');
            ulBoss.append(liappend);


            var liappend = $('<li><a href="#"><img src="./images/fei.jpg"/></a>  <p class="version_name">我们的爱</p>   <p class="version_name">朱云飞老师</p> </li>');




        }

    })


})

/*$(document).on('ready',function(){
 $(".lazy").slick({
 lazyLoad: 'ondemand', // ondemand progressive anticipated
 //infinite: true,
 autoplay : true,
 autoplaySpeed : 1000,
 },1000,function(){
 $("slick-do".slick("slickCurrentSlide"))
 });
 //console.log(slickCurrentSlide());
 })*/
/*
 $("slick-do").on("afterChange",function(){
 lazyLoaded :true,

 },1000,function(){
 $("slick-do".slick("slickCurrentSlide"))
 })*/




