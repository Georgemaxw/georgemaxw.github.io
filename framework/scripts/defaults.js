/* 
──────────────────────────────────────────────────────
gmes-defaults.js
────────────────────────────────────────────────────── */

/*  
──────────────────────────────────────────────────────
TODO: Choice 
────────────────────────────────────────────────────── */

var choice_anchorClicked = null
var choice_anchorClickedBefore = null /* <- Variável necessária para 
salvar o valor de 'choice_anchorClicked' antes de se clicar em uma opção 
desabilitada, já que ao fazer isso, ela será alterada, e depois retorná-la ao seu 
valor anterior. Isso é necessário, pois 'choice_anchorClicked' determina a 
opção que aparece em um 'choice_d' quando ele está fechado.
*/

var choice_d_open = false

function choice(arg) {

    var choice_d_liClicked = null

    if(arg.classList.contains('choice_d')) {

        if(arg.classList.contains('choice_d_open')) {

                for(var i = 0; i < arg.children.length; i++) { 

                    if(arg.children[i].children[0] === choice_anchorClicked) {

                        choice_d_liClicked = arg.children[i]
                        break
                    }
                }

            if(choice_anchorClicked !== 'disabled') {

                for(var i = 0; i < arg.children.length; i++) { 

                    arg.children[i].style = 'display: none'
                }

                if(choice_d_liClicked !==  null) {

                    choice_d_liClicked.style = 'display: inline-flex' 
                } else {
                    arg.children[0].style = 'display: inline-flex'
                }
            }

        } else {

            if(arg.classList.contains('disabled')) { return }

            arg.children[0].style = 'display: none'
            
            for(var i = 1; i < arg.children.length; i++) { 

                arg.children[i].style = 'display: inline-flex'
            } 

            if(choice_anchorClicked !== null) {
                
                for(var i = 1; i < arg.children.length - 1; i++) { 

                    arg.children[i].children[0].classList.remove('on')
                }

                choice_anchorClicked.classList.add('on')
            }
        }
            
        if(choice_anchorClicked !== 'disabled') {

            document.querySelector('html').classList.toggle('overflow_hidden')
            arg.classList.toggle('choice_d_open')

        } else {
            choice_anchorClicked = choice_anchorClickedBefore
        }

    } else {

        if(choice_anchorClicked === null || choice_anchorClicked === 'disabled') { return }

        for(var i = 0; i < arg.children.length; i++) { 

            arg.children[i].children[0].classList.remove('on')
        }

        choice_anchorClicked.classList.add('on')

        choice_anchorClicked = null
        
        /*
        if(choice_anchorClicked !== null) {

            for(var i = 0; i < arg.children.length; i++) { 

                arg.children[i].children[0].classList.remove('on')
            }

            choice_anchorClicked.classList.add('on')

            choice_anchorClicked = null
        }
        */
    }
}

function choice_option(arg) { 

    if(arg.classList.contains('disabled')) { 

        choice_anchorClickedBefore = choice_anchorClicked

        choice_anchorClicked = 'disabled'

    } else {
        choice_anchorClicked =  arg
    }
}

// Espaço no final ('li' invisível) do menu dos dropdowns:

var allChoicesD = document.querySelectorAll('.choice_d')

for(var i = 0; i < allChoicesD.length; i++) { 

var e = document.createElement("li")

    allChoicesD[i].appendChild(e)
}

/*  
──────────────────────────────────────────────────────
TODO: Switch
────────────────────────────────────────────────────── */
/*
var switch_all = document.querySelectorAll('.switch')
var switch_actual

for(var i = 0; i < switch_all.length; i++) {

    switch_actual = switch_all[i]

    switch_all[i].onclick = function() { 

        console.log(switch_actual)
        
        switch_actual.classList.toggle('on')
    }
}
*/

function switch_event(arg) {

    if(arg.classList.contains('disabled')) {
        return
    }

    arg.classList.toggle('on')
} 

/*  
──────────────────────────────────────────────────────
TODO: Lightbox
────────────────────────────────────────────────────── */

var lightbox_html = document.createElement("div");

lightbox_html.classList.add("lightbox")

lightbox_html.innerHTML = `
<div>
        <a class="lightbox_closeArea" onclick="lightbox_close(this)"></a> 
        <div class="lightbox_layout">
            <img src="" alt="" class="lightbox_img">
            <div class="lightbox_text"></div>
        </div>
</div>
`

document.body.appendChild(lightbox_html);

function lightbox(txt, img, width) { 

    document.querySelector('html').classList.add('overflow_hidden') 

    document.querySelector('.lightbox_text').innerHTML = txt

    if(img === undefined) {
        document.querySelector('.lightbox_img').setAttribute('src', '') 
        document.querySelector('.lightbox_img').classList.remove('lightbox_img_marginBottom')
    } else {
        document.querySelector('.lightbox_img').setAttribute('src', img) 
        document.querySelector('.lightbox_img').classList.add('lightbox_img_marginBottom')
    } 
 
    if(width === undefined) {
        document.querySelector('.lightbox_img').style = 'width: auto' 
    } else {
        document.querySelector('.lightbox_img').style = 'width: '+ width
    }

    document.querySelector('.lightbox').style = 'display: flex'
}

function lightbox2(txt, img, width) { 

    document.querySelector('.lightbox_img').classList.add('lightbox_img_rounded')

    lightbox(txt, img, width)
}

function lightbox_close(arg) {
    
    document.querySelector('html').classList.remove('overflow_hidden')

    document.querySelector('.lightbox_img').classList.remove('lightbox_img_rounded')

    arg.parentNode.parentNode.style = 'display: none';  
}