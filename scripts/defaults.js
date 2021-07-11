/**/
function func(arg){ alert(arg) }

// {(function(){    })()}  



var tablet = 500

var categories_anchors = document.querySelectorAll('#nav-menu > ul > li > a')
var divs = document.querySelectorAll('#nav-menu > ul > li > div') 
var bg_nav_selector = 'url(../../images/background-nav-selector.png)  center/100% 100%'

function nav_menu(arg) {


    // console.log(this === categories_anchors[0])
    
    for(var i = 0; i < categories_anchors.length; i++) {
        if(arg === categories_anchors[i]) {

            var index = i
            break  
        }
    }
    
//-------------------------------------------------------------------------------------------------

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

        if(window.innerWidth > tablet) { 
            document.querySelector('html').style = 'overflow: hidden'
        }

    }else{
        categories_anchors[index].style = ''
        divs[index].style = 'display: none'

        if(window.innerWidth > tablet) { 
            document.querySelector('html').style = 'overflow: auto'
        }
    }
} 






document.querySelector('#nav-menu > ul > li:nth-last-of-type(1)').onclick = function() {

    for(var i = 0; i < divs.length; i++) {
        categories_anchors[i].style = ''
        divs[i].style = 'display: none'
    }

    if(window.innerWidth > tablet) { 
        document.querySelector('html').style = 'overflow: auto'
    }
    
    document.querySelector('header').style.display = 'none'
    document.querySelector('.block-hack').style.display = 'none'
    document.querySelector('.show-header-button').style.display = 'block'
}

document.querySelector('.show-header-button').onclick = function() {
    document.querySelector('header').style.display = 'block'
    document.querySelector('.block-hack').style.display = 'block'
    document.querySelector('.show-header-button').style.display = 'none'
}