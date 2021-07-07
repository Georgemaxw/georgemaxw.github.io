function ok(p){
    alert(p)
}

function nav_menu(arg) {

    var categories_anchors = document.querySelectorAll('#nav-menu > ul > li > a')

    // console.log(categories_anchors)

    // console.log(this === categories_anchors[0])
    
    for(var i = 0; i < categories_anchors.length; i++) {
        if(arg === categories_anchors[i]) {
            var ul_index = i
            // console.log(i + 1 +'º <a>!')
            break  
        }
    }
    
//-------------------------------------------------------------------------------------------------

    var array = document.querySelectorAll('#nav-menu > ul > li > div')
    var el = array[ul_index]

    //console.log(el === )
    
    
    if(el.style.display !== 'block') { 

        for(var i = 0; i < array.length; i++) {
            array[i].style = 'display: none'
        }
        
        el.style = 'display: block'

    }else{
        el.style = 'display: none'
    }
}                                