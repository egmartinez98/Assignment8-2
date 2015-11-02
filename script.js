$(document).ready(function () {
    $("#1").css({"color": "black"});
    
    $("#1").on("click", function () {
        $("img").hide();
        $("#img1").fadeIn(1000);
        $("a").css({"color": "blue"});
        $("#1").css({"color": "black"});
    });
    
    $("#2").on("click", function () {
        $("img").hide();
        $("#img2").fadeIn(1000);
        $("a").css({"color": "blue"});
        $("#2").css({"color": "black"});
    });
    
    $("#3").on("click", function () {
        $("img").hide();
        $("#img3").fadeIn(1000);
        $("a").css({"color": "blue"});
        $("#3").css({"color": "black"});
    });
    
    $("#4").on("click", function () {
        $("img").hide();
        $("#img4").fadeIn(1000);
        $("a").css({"color": "blue"});
        $("#4").css({"color": "black"});
    });
    
    $("#5").on("click", function () {
        $("img").hide();
        $("#img5").fadeIn(1000);
        $("a").css({"color": "blue"});
        $("#5").css({"color": "black"});
    });
    
    
    
    $("#tab1").on("click", function () {
        $(".text").hide();
        $("#text1").show();
        
    });
    
    $("#tab2").on("click", function () {
        $(".text").hide();
        $("#text2").show();
        
    });
    
    $("#tab3").on("click", function () {
        $(".text").hide();
        $("#text3").show();
        
    });
    
        
    
});