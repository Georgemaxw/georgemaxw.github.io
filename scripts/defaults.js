
function func(arg){ alert(arg) }

// {(function(){ console.log(window.innerWidth) })()}  



var tablet = 500
var bg_nav_selector = 'url(../../images/background-nav-selector.png)  center /100% 100%'

function nav_menu(arg) {

    var categories_anchors = document.querySelectorAll('#nav-menu > ul > li > a')

    // console.log(this === categories_anchors[0])
    
    for(var i = 0; i < categories_anchors.length; i++) {
        if(arg === categories_anchors[i]) {

            var index = i
            break  
        }
    }
    
//-------------------------------------------------------------------------------------------------

    var divs = document.querySelectorAll('#nav-menu > ul > li > div')
    
    if(divs[index].style.display !== 'block') { 

        for(var i = 0; i < divs.length; i++) {
            categories_anchors[i].style = ''
            divs[i].style = 'display: none'
        }
        
        if(window.innerWidth > tablet) { 
            categories_anchors[index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
        }

        divs[index].style = 'display: block'

    }else{
        categories_anchors[index].style = ''
        divs[index].style = 'display: none'
    }
} 