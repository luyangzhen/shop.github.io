window.addEventListener('load', function() {
    var banner_width = document.querySelector('.banner_width');
    var pb = document.querySelector('.pb');
    var banner_Height = banner_width.offsetHeight;
    // console.log(banner_Height);
    pb.style.height = banner_Height + 430 + 'px';
})