$(function(){
    // 상단으로올라가는_버튼
    $('.content-top').click(function(e){
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    //a태그를_버튼으로_작동
    $('.sc-news .btn-prev, .sc-themecast .group-category .btn, .shop-control .btn').click(function(e){
        e.preventDefault();
    })
});