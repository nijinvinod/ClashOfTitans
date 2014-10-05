$(document).ready(function () {
	var container = $("#container");
    var itemArrays = [];
    var traversedHeight = 0;
    var itemsTraversed = 0;
    var liHeight = 20;
    
    var animateCount = 0;
    
    /* Function to scroll */
    function scrollTop(scrollHeight){
        $(container).animate({top:scrollHeight});
    }
    
    /* Function to calculate height to scroll */
    function keyPressed(direction){
        if(direction==true)
        {
            itemsTraversed++;
            $(itemArrays[itemsTraversed]).css("visibility","visible");
            if(itemsTraversed > itemArrays.length){
                itemsTraversed--;
                return;
            }
        }
        else{
            if(itemsTraversed==0){
                return;
            }
        }
        
        if(itemsTraversed>0){$(".showNow").show();}
        else{$(".showNow").hide();}
        
        var elemHeight = $(itemArrays[itemsTraversed]).innerHeight();
        
        if(direction==true)
            traversedHeight += elemHeight + liHeight;
        else{
            traversedHeight -= elemHeight + liHeight;
            itemsTraversed--;
        }
            
        scrollTop("-"+traversedHeight+"px");
    }
    
    /* Recursive Function to get nodes to be scrolled */
    function getAllNodes(root){
        if(root!=undefined){
            var totalChildren = $(root).children().length;
            if($(root).hasClass("iterate")){
                itemArrays.push(root);
            }
            for(var i=0;i<totalChildren;i++){
                getAllNodes($(root).children()[i]);
            }
        }
    }
    
    /* Function to detect key press */
    $("body").keydown(function(e) {
        if(e.keyCode == 40) { // down
            keyPressed(true);
        }
        if(e.keyCode == 38) { // up
            keyPressed(false);
        }
        
        
        
        if(e.keyCode == 70) { // make container fixed to have animate effect.
             $(container).css("position","fixed");
        }
        if(e.keyCode == 82) { // make container relative
            $(container).css("position","relative");
        }
        if(e.keyCode == 83){      //Swift Code
            showShift();
        }
        
        if(e.keyCode == 90){
            $("#animate"+animateCount).removeClass("doAnimate");
            $("#animate"+animateCount).addClass("doAnimateBack");
            animateCount++;
            $("#animate"+animateCount).addClass("doAnimate");
        }
    });

    /* Function to call Swift */
    function showShift(){
         $(".swift").fadeToggle();
    }
    
    getAllNodes(container);
    
    f = itemArrays;
});