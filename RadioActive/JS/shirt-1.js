/*
$(".imagenlupa").click(function(e){
    var enlaceimagen = e.target.src; 
    var lightbox = '<div id="lightbox">'+
                    '<img src="./img/1-2.jpg" id="zoom_mw" data-zoom-image="./img/1-2.jpg">'+
                    '<div class="btn-close">X</div>'+
                    '</div>'
    $('body').append(lightbox); 
    $("#zoom_mw").elevateZoom({
        scrollZoom : true,
		cursor: "crosshair",
		zoomWindowOffetx: 15
    });
    
    $(".btn-close").click(function(){
        $("#lightbox").remove();
        $(".zoomContainer").remove();
    })
    
})
*/
$("#zoom_05").elevateZoom({ 
    scrollZoom : true,
    zoomType: "inner",
    cursor: "crosshair"
  });