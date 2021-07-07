
function func(arg){ alert(arg) }

{(function(){ console.log(window.innerWidth) })()}  



function nav_menu(arg) {

    var categories_anchors = document.querySelectorAll('#nav-menu > ul > li > a')

    // console.log(categories_anchors)

    // console.log(this === categories_anchors[0])
    
    for(var i = 0; i < categories_anchors.length; i++) {
        if(arg === categories_anchors[i]) {

            var index = i
            // console.log(i + 1 +'º <a>!')
            break  
        }
    }
    
//-------------------------------------------------------------------------------------------------

    var divs = document.querySelectorAll('#nav-menu > ul > li > div')

    console.log(divs[index].style)
    
    
    if(divs[index].style.display !== 'block') { 

        for(var i = 0; i < divs.length; i++) {
            categories_anchors[i].style = ''
            divs[i].style = 'display: none'
        }
        
        if(window.innerWidth > 500) { 
            categories_anchors[index].style = 
            'background: hsla(0, 0%, 0%, 0.1); border-radius: 15px; padding: 0 4px; height: 40px; margin-top: 4px' 
        }
        divs[index].style = 'display: block'

    }else{
        categories_anchors[index].style = ''
        divs[index].style = 'display: none'
    }
}                                