
// {(function(){    })()}  

var nav_expand = 565 // VÍNCULO: Váriável JS

/*  
──────────────────────────────────────────────────────
TODO: Header-nav
────────────────────────────────────────────────────── */

var nav_menu_compact_enabled = false
var categories_anchors = document.querySelectorAll('.nav-menu > ul > li > a')
var divs = document.querySelectorAll('.nav-menu > ul > li > div') 
var index = 'none'
var bg_nav_selector = 'url(../../images/background-nav-selector.png)  center/100% 100%' // VÍNCULO: Váriável JS

document.querySelector('.nav-menu-button').onclick = function() { 

    //if(window.innerWidth < nav_expand) { 

        if(document.querySelector('.nav-menu').style.display !== 'block') { 

            document.querySelector('.nav-menu').style = 'display: block'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: flex'
            document.querySelector('html').style = 'overflow: hidden'
            nav_menu_compact_enabled = true
        } else {
            document.querySelector('.nav-menu').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: block'
            document.querySelector('html').style = 'overflow: auto'
            nav_menu_compact_enabled = false

            for(var i = 0; i < divs.length; i++) {
                categories_anchors[i].style = ''
                divs[i].style = 'display: none'
            }

            index = 'none'
        }
    //}
}

window.onresize = function() { 
    if(window.innerWidth >= nav_expand) {
        document.querySelector('.nav-menu').style = 'display: block'
    } else {
        if(nav_menu_compact_enabled === true) {
            document.querySelector('.nav-menu').style = 'display: block'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: flex'
            document.querySelector('html').style = 'overflow: hidden'
        } else {
            document.querySelector('.nav-menu').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: block'
            document.querySelector('html').style = 'overflow: auto'
        }
    }

    if(index !== 'none') { 
        if(window.innerWidth >= nav_expand) {
            categories_anchors[index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
        } else { 
            categories_anchors[index].style = 'background: 0' 
        }
     } /*else { 
        if(window.innerWidth < nav_expand) {
            categories_anchors[index].style = 'background: 0' 
        }
     }*/
}

function nav_menu_options(arg) { 
    
    for(var i = 0; i < categories_anchors.length; i++) { // <- Verifica qual <a> de categoria foi clicado.
        if(arg === categories_anchors[i]) {

            index = i
            break  
        }
    }
    
//-------------------------------------------------------------------------------------------------

    if(divs[index].style.display !== 'block') { // <- Habilita/desabilita o <div> de sub opção 
                                                                           // correspondente ao <a> de categoria clicado.

        for(var i = 0; i < divs.length; i++) { // <- Desabilita todos os <div>'s de sub opção.
            categories_anchors[i].style = ''
            divs[i].style = 'display: none'
        }

        if(window.innerWidth >= nav_expand) { 
            categories_anchors[index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 5px; padding-right: 5px; margin-top: 4px'
        }

        divs[index].style = 'display: block'

        nav_menu_compact_enabled = true

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').style = 'overflow: hidden'
        }

    }else{
        categories_anchors[index].style = ''
        divs[index].style = 'display: none'

        index = 'none'

        nav_menu_compact_enabled = false

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').style = 'overflow: auto'
        }
    }
}

// Header-nav button:

document.querySelector('.nav-menu > ul > li:nth-last-of-type(1)').onclick = function() { // <- Hide Header-nav

    for(var i = 0; i < divs.length; i++) {
        categories_anchors[i].style = ''
        divs[i].style = 'display: none'
    }

    nav_menu_compact_enabled = false
    index = 'none'

    if(window.innerWidth >= nav_expand) { 
        document.querySelector('html').style = 'overflow: auto'
    }
    
    document.querySelector('.header-nav').style.display = 'none'
    document.querySelector('.block-hack').style.display = 'none'
    document.querySelector('.headerNav-button').style.display = 'block'
}

document.querySelector('.headerNav-button').onclick = function() { // <- Show Header-nav
    document.querySelector('.header-nav').style.display = 'block'
    document.querySelector('.block-hack').style.display = 'block'
    document.querySelector('.headerNav-button').style.display = 'none'
}