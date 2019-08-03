
function my$(id) {
    return document.getElementById(id);
}


// 获取滚动函数
function getScroll() {
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
    };
}

window.onscroll = function () {
    if (getScroll().top >= my$("scrollPart").offsetHeight) {
        my$("scrollPart").className = "shadow-nav";
        my$("main").style.marginTop = my$("scrollPart").offsetHeight + "px";
    } else {
        my$("scrollPart").className = "pages-nav";
        my$("main").style.marginTop = 20 + "px";
    }
};