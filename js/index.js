window.addEventListener('load', function() {
    // 1:获取元素
    var car = document.querySelector('.car');
    var car1 = car.querySelector('.car1');
    var car2 = car.querySelector('.car2');
    var but1 = car.querySelector('.but1');
    var but2 = car.querySelector('.but2');
    var carWidth = car.offsetWidth;
    // console.log(car1.children.length);
    // 鼠标经过停止移动
    car.addEventListener('mouseenter', function() {
        clearInterval(time);
        time = null;
    })
    // 鼠标离开恢复移动
    car.addEventListener('mouseleave', function() {
        time = setInterval(function() {
            but2.click();
        },2000)
    })
    // 2：获取几张图片就插入几个小li
    for (var i = 0; i < car1.children.length; i++) {
        // 创建小li
        var li = document.createElement('li');
        // 记录当前小li的索引号
        li.setAttribute('index', i);
        // 把小li插入car2里面
        car2.appendChild(li);
        // 3：点击一个小li去掉其它小li
        li.addEventListener('click', function() {
            for (var i = 0; i < car2.children.length; i++) {
                car2.children[i].className = '';
            }
            this.className = 'current';
            // 4:点击小li移动ul图片
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            // console.log(car1Width);
            // console.log(index);
            animate(car1, -index * carWidth);
        })
    }
    car2.children[0].className = 'current';
    // 克隆第一张图片
    var first = car1.children[0].cloneNode(true);
    car1.appendChild(first);
    // 点击按钮图片滚动
    var num = 0;
    // 点击小圆圈图片滚动
    var circle = 0; 
    but2.addEventListener('click', function() {
        if (num == car1.children.length - 1) {
            car1.style.left = 0;
            num = 0;
        }
        num++;
        animate(car1, -num * carWidth);
        circle++
        if (circle == car2.children.length) {
            circle = 0;
        }
        circleChange();
    })
    but1.addEventListener('click', function() {
        if (num == 0) {
            num = car1.children.length - 1;
            car1.style.left = -num * carWidth + 'px';
        }
        num--;
        animate(car1, -num * carWidth);
        circle--;
        if (circle < 0) {
            circle = car2.children.length - 1;
        }
        circleChange();
    })
    // 
    function circleChange() {
        for (var i = 0; i < car2.children.length; i++) {
            car2.children[i].className = '';
        }
        car2.children[circle].className = 'current';
    }
    // 自动播放
    var time = setInterval(function() {
        but2.click();
    },4000);
})