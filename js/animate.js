// obj目标对象，target目标距离
function animate(obj, target, red) {
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.time);
            if (red) {
                red();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}
// 获取元素
// var d1 = document.querySelector('.d1');
// // 用回调函数不断重复这个操作并赋值
// var time = setInterval(function() {
//     if (d1.offsetLeft > 400) {
//         clearInterval(time);
//     }
//     d1.style.left = d1.offsetLeft + 1 + 'px';
// },10)