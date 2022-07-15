function openNav() {
    document.getElementById("mySidenav").style.height="100%";
    // document.getElementById("mySidenav").style.width="100%";
    backgroundColor="rgba(0,0,0,0.95)";
    document.getElementById("mySidenav").style.paddingTop="60px";
}

function closeNav() {
    document.getElementById("mySidenav").style.height="0";
    document.getElementById("mySidenav").style.paddingTop="0px";
}



let slides = $(".slider .slide");
let sno = 0;
let lastNo = slides.length - 1;
function playSlide(dir) {
    let end, init;
    if( dir == 1 ) {
        end = "100%";
        init = "-100%";
    } else {
        end = "-100%";
        init = "100%";
    }
    if( $(slides[sno]).is(":animated") ) return;
    $(slides[sno]).siblings(".slide").css({left:init});
    $(slides[sno]).animate({
        left: end
    },1000,function(){
        $(this).css({left: init});
    });
    sno = sno + dir;
    if( sno > lastNo ) sno = 0;
    if( sno < 0 ) sno = lastNo;
    $(slides[sno]).animate({left: 0},1000);
}