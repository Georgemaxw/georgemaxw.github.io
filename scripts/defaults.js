/**/
function func(arg){ alert(arg) }

// {(function(){    })()}  



var nav_open = 501 

var categories_anchors = document.querySelectorAll('#nav-menu > ul > li > a')
var divs = document.querySelectorAll('#nav-menu > ul > li > div') 
var bg_nav_selector = 'url(../../images/background-nav-selector.png)  center/100% 100%'

document.querySelector('.nav-menu-button').onclick = function() { 

    //if(window.innerWidth < nav_open) { 

        if(document.querySelector('#nav-menu').style.display !== 'block') { 
            //document.querySelector('#nav-menu').style = 'display: block'
            //document.querySelector('.nav-menu-button').setAttribute('href', '')
            //document.querySelector('#nav-menu').style = 'position: fixed; top: -48px;'
            document.querySelector('#nav-menu').style = 'width: 0;'
            document.querySelector('.nav-menu-button img').setAttribute('src', '')
            document.querySelector('.nav-menu-button img').setAttribute('alt', '')
            document.querySelector('.nav-menu-close_button').style = 'display: flex !important'
            document.querySelector('html').style = 'overflow: hidden'
        } else {
            //document.querySelector('#nav-menu > ul').style = 'display: none'
            //document.querySelector('.nav-menu-button').setAttribute('href', '#nav-menu')
            document.querySelector('.nav-menu-close_button').style = 'display: none'
            //document.querySelector('.nav-menu-button img').setAttribute('src', 'images/icon-menu.svg')
            //document.querySelector('.nav-menu-button img').setAttribute('alt', 'Menu button')

            //document.querySelector('#nav-menu').style = 'position: static;' 
            //document.querySelector('html').style = 'overflow: auto'

            for(var i = 0; i < divs.length; i++) {
                categories_anchors[i].style = ''
                divs[i].style = 'display: none'
            }
        }
    //}
}

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

        if(window.innerWidth > nav_open) { 
            categories_anchors[index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
        }

        divs[index].style = 'display: block'

        if(window.innerWidth > nav_open) { 
            document.querySelector('html').style = 'overflow: hidden'
        }

    }else{
        categories_anchors[index].style = ''
        divs[index].style = 'display: none'

        if(window.innerWidth > nav_open) { 
            document.querySelector('html').style = 'overflow: auto'
        }
    }
} 






document.querySelector('#nav-menu > ul > li:nth-last-of-type(1)').onclick = function() {

    for(var i = 0; i < divs.length; i++) {
        categories_anchors[i].style = ''
        divs[i].style = 'display: none'
    }

    if(window.innerWidth >= nav_open) { 
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