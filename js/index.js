// 小banner
var imgLis = document.querySelectorAll('.hotspot ul li');
var leftBtn = document.querySelector('#leftBtn');
var rightBtn = document.querySelector('#rightBtn');
var timer3, timer4;
var v = 0;
// 1.自动播放
function imgAutoMove() {
    timer3 = setInterval(function () {
        minImgDown()
        v++;
        if (v >= imgLis.length) {
            v = 0;
        }
        minImgUp();
    }, 5000)
}
imgMove(imgLis[v], 100); //初始显示第一张
imgAutoMove(); //调用函数自动播放
function minImgDown() {
    imgLis[v].style.zIndex = 1;
    imgLis[v].style.opacity = 0.1;
}
function minImgUp() {
    imgLis[v].style.zIndex = 10;
    imgMove(imgLis[v], 100);
}
function imgMove(dom, target) {
    var opa = 10;
    clearInterval(timer4);
    timer4 = setInterval(function () {
        if (opa > target) {//判断运动方向
            var speed = -5;//透明度减小
        } else {
            var speed = 5;//透明度增加
        }
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(opa - target) <= Math.abs(speed)) {
            clearInterval(timer4);
            dom.style.opacity = target / 100;//手动设置终点
        } else {
            opa += speed;
            dom.style.opacity = opa / 100;//每次的运动
        }
    }, 40);
}
rightBtn.onclick = function () {
    clearInterval(timer3);
    minImgDown()
    v++;
    if (v >= imgLis.length) {
        v = 0;
    }
    minImgUp();
    imgAutoMove();
}
leftBtn.onclick = function () {
    clearInterval(timer3);
    minImgDown()
    v--;
    if (v < 0) {
        v = imgLis.length - 1;
    }
    minImgUp();
    imgAutoMove();
}


//banner
var imgs = document.querySelectorAll('.img img');
var dot = document.querySelectorAll('.dot ul li');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var timer, timer2;
var index = 0;

move(imgs[index], 100); //初始显示第一张
autoMove(); //调用函数自动播放
// 1.自动播放
function autoMove() {
    timer2 = setInterval(function () {
        imgDown();
        index++;
        if (index >= imgs.length) {
            index = 0;
        }
        imgUp();
    }, 3000)
}
// 2.点击数字
for (var i = 0; i < dot.length; i++) {
    dot[i].n = i; //记录dot的下标
    dot[i].onclick = function () {
        clearInterval(timer2); //清除计时器
        imgDown();
        index = this.n;
        imgUp();
        autoMove();//点击之后再自动播放
    }
}
//3.点击左边
right.onclick = function () {
    clearInterval(timer2);
    imgDown();
    index++;
    if (index >= imgs.length) {
        index = 0;
    }
    imgUp();
    autoMove();
}
//4.点击右边
left.onclick = function () {
    clearInterval(timer2);
    imgDown();
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    imgUp();
    autoMove();
}
function imgDown() { //前面一张图片下沉
    imgs[index].style.zIndex = 1;
    imgs[index].style.opacity = 0.1;
    dot[index].className = '';
}
function imgUp() { //后面图片上浮
    imgs[index].style.zIndex = 10;
    dot[index].className = 'show';
    move(imgs[index], 100);
}

function move(dom, target) {
    var opa = 10;
    clearInterval(timer);
    timer = setInterval(function () {
        if (opa > target) {//判断运动方向
            var speed = -5;//透明度减小
        } else {
            var speed = 5;//透明度增加
        }
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(opa - target) <= Math.abs(speed)) {
            clearInterval(timer);
            dom.style.opacity = target / 100;//手动设置终点
        } else {
            opa += speed;
            dom.style.opacity = opa / 100;//每次的运动
        }
    }, 40);
}

// 选择城市 
var selectCity = document.querySelector('.selectCity');
var city = document.querySelector('.city');
var dropdown = document.querySelector('.cityList');
var cityList = document.querySelectorAll('.list a');
var cityBox = document.querySelector('.cityBox');
var prevIndex = 0;
selectCity.onmouseenter = function () {
    dropdown.style.display = 'block';
    cityBox.className = 'cityBox current';
}
selectCity.onmouseleave = function () {
    dropdown.style.display = 'none';
    cityBox.className = 'cityBox';
}
for (var i = 0; i < cityList.length; i++) {
    cityList[i].index = i;  //记录当前下标更新上一次选择
    cityList[i].onmouseenter = function () {
        this.className = 'hover';
        cityList[prevIndex].className = 'show';
    }
    cityList[i].onmouseleave = function () {
        this.className = '';
        cityList[prevIndex].className = 'show';
    }
}
document.onclick = function (ev) {
    var e = ev || window.event;
    var tg = e.target || e.srcElement;
    if (tg.nodeName == 'A' && tg.parentNode.id == 'list') {
        city.innerHTML = tg.innerHTML;
        cityList[prevIndex].className = '';
        tg.className = 'show';
        dropdown.style.display = 'none';
        prevIndex = tg.index;
    }
}

// 顶部导航菜单栏
var lis = document.querySelectorAll('.right-menu li');
function menuTab() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseenter = function () {
            this.className = 'lihover';
        }
        lis[i].onmouseleave = function () {
            this.className = '';
        }
    }
}
menuTab();

// var lis = document.querySelectorAll('.right-menu li');
// var drop = document.querySelectorAll('.right-menu li .dropdown-layer');
// // 顶部导航菜单栏 js控制显示隐藏
// function menuTab() {
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].index = i;
//         lis[i].onmouseenter = function () {
//             lis[this.index].className = 'lihover';
//             drop[this.index].style.display = 'block';
//         }
//         lis[i].onmouseleave = function () {
//             lis[this.index].className = '';
//             drop[this.index].style.display = 'none';
//         }
//     }
// }
// menuTab();



// 购物车
var settleup = document.querySelector('.settleup');
var car = document.querySelector('.car');
var settleupDrop = document.querySelector('.settleup-drop');
settleup.onmouseenter = function () {
    settleupDrop.style.display = 'block';
    car.className = 'car show';
}
settleup.onmouseleave = function () {
    settleupDrop.style.display = 'none';
    car.className = 'car';

}

// 右侧的导航栏
window.onload = function () {
    var sidebarLi = document.querySelectorAll('.sidebar ul li');
    var cells = document.querySelectorAll('.sidebar ul li .cell');
    var dropdowns = document.querySelectorAll('.sidebar ul li .dropdown');
    var prevIndex = 0;
    for (var i = 0; i < sidebarLi.length; i++) {
        sidebarLi[i].index = i;
        sidebarLi[i].onmouseenter = function () {
            dropdowns[this.index].style.display = 'block';
            sidebarLi[this.index].style.background = '#d9d9d9';
        }
        sidebarLi[i].onmouseleave = function () {
            dropdowns[this.index].style.display = 'none';
            sidebarLi[this.index].style.background = '';
        }
    }
}

//   微信二维码
// var weixin = document.querySelector('.jd-weixin img');
// var jdIphone = document.querySelector('.jd-iphone');
// weixin.onmouseenter = function (ev) {
//     var e = ev || window.event;
//     var tg = e.target || e.srcElement;
//     if (tg.nodeName == 'IMG' && tg.parentNode.className == 'jd-weixin') {
//         console.log(tg);
//         jdIphone.style.display = 'block';
//     }
// }



