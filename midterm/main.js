$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("stickty");
        }else{
            $('.navbar').removeClass("stickty");
        }
    })
});