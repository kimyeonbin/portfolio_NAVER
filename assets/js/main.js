$(function(){
    // 상단으로올라가는_버튼
    $('.content-top').click(function(e){
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
});