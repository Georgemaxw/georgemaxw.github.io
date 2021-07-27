
// {(function(){    })()}  

var nav_expand = 565 // VÍNCULO: Váriável JS

/*  
──────────────────────────────────────────────────────
TODO: Header-nav
────────────────────────────────────────────────────── */
/*  
────────────────────────────
TODO:    >  Nav - Menu - HTML
──────────────────────────── */

document.querySelector('.nav-menu').innerHTML = `

<ul>
<li><a onclick="nav_menu_options(this)">Link 1</a>

    <div>
        <ul>
            <li><a href="#">Link 1.1</a></li>
            <li><a href="page_2.html">Link 1.2</a></li>
            <li><a href="#">Link 1.3</a></li>
        </ul>
    </div>

</li> 

<li><a onclick="nav_menu_options(this)">Link 2</a>

    <div>
        <ul>
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 2.1</span></a></li>
            <!--<li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 2.2</span></a></li>-->
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 2.3</span></a></li>
            <!--<li><a href="#">Link 2.4</a></li>-->
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 2.5</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)">L3</a>

    <div>
        <ul class="nav_compact_subOptions_textBelow">
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 3.1</span></a></li>
            <!--<li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 3.2</span></a></li>-->
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 3.3</span></a></li>
            <!--<li><a href="#">Link 3.4</a></li>-->
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 3.5</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)">L4</a>

    <div>
        <ul class="nav_expanded_subOptions_h nav_expanded_subOptions_textBelow">
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 4.1</span></a></li>
            <!--<li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 4.2</span></a></li>-->
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 4.3</span></a></li>
           <!-- <li><a href="#">Link 4.4</a></li>-->
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 4.5</span></a></li>
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 4.6</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)">L5</a> 

    <div>
        <ul class="nav_expanded_subOptions_h nav_subOptions_textBelow">
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 5.1</span></a></li>
            <!--<li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 5.2</span></a></li>-->
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 5.3</span></a></li>
           <!-- <li><a href="#">Link 5.4</a></li>-->
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 5.5</span></a></li>
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 5.6</span></a></li>
        </ul>
    </div>

</li>

<li><a href="">∅</a><div><ul></ul></div></li><!---->

<li><a onclick="nav_menu_options(this)"><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">L7</a>

    <div>
        <ul>
            <li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 7.1</span></a></li>
            <li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 7.2</span></a></li>
            <li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 7.3</span></a></li>
            <!--<li><a href="#">Link 7.4</a></li>
            <li><a href="#"><img src="images/img-pc.png" alt="" class="nav_poster_margins"><span>Link 7.5</span></a></li> 
            <li><a href="#"><img src="images/img-pc.png" alt="" class="nav_poster_margins"><span>Link 7.6</span></a></li>-->
        </ul>
    </div>

</li>

<li><a href="page.html">P</a><div><ul></ul></div></li>
<li><a aria-label="Hide bar"><img src="images/icon-headerNav-hide.svg" alt="Header-nav button"></a></li>
</ul>
`

/*  
────────────────────────────
TODO:    >  Nav - JS
──────────────────────────── */

var nav_menu_compact_enabled = false
var nav_options_anchors = document.querySelectorAll('.nav-menu > ul > li > a')
var nav_divs = document.querySelectorAll('.nav-menu > ul > li > div') 
//var nav_subOptionsMenu = document.querySelectorAll('.nav-menu > ul > li > div > ul')
var nav_options_anchorClicked_index = 'none'
var bg_nav_selector = 'url(../../images/bg_nav_selector.png)  center/100% 100%' // VÍNCULO: Váriável JS

var nav_html_scrollbar_allowedEnable = false /*  <- Variável necessária para impedir que a scrollbar 
                                                                                        do <html> apareça em momentos em que não se deseja 
                                                                                        quando se redimensiona a janela de visualização. */

document.querySelector('.nav-menu-button').onclick = function() {

    if(document.querySelector('.nav-menu').style.display !== 'block') { 

        document.querySelector('.nav-menu').style = 'display: block'
        document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: none'
        document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: flex'
        document.querySelector('html').classList.add('overflow_hidden')
        nav_html_scrollbar_allowedEnable = true
        nav_menu_compact_enabled = true

    } else {

        document.querySelector('.nav-menu').style = 'display: none'
        document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: none'
        document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: block'
        document.querySelector('html').classList.remove('overflow_hidden')
        nav_menu_compact_enabled = false

        for(var i = 0; i < nav_divs.length; i++) {
            nav_options_anchors[i].style = ''
            nav_divs[i].style = 'display: none'
        }

        nav_options_anchorClicked_index = 'none'
    }
}

window.onresize = function() {
    if(window.innerWidth >= nav_expand) {
        document.querySelector('.nav-menu').style = 'display: block'
        
        if(nav_options_anchorClicked_index === 'none') {

            if(nav_html_scrollbar_allowedEnable === true) {

                document.querySelector('html').classList.remove('overflow_hidden')

                nav_html_scrollbar_allowedEnable = false
            }
        }

    } else {

        if(nav_menu_compact_enabled === true) {
            document.querySelector('.nav-menu').style = 'display: block'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: flex'
            document.querySelector('html').classList.add('overflow_hidden')
            nav_html_scrollbar_allowedEnable = true

        } else {
            document.querySelector('.nav-menu').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: block'
        }
    }

    if(nav_options_anchorClicked_index !== 'none') { 
        if(window.innerWidth >= nav_expand) {
            nav_options_anchors[nav_options_anchorClicked_index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
        } else { 
            nav_options_anchors[nav_options_anchorClicked_index].style = 'background: 0' 
        }
    }
} 

function nav_menu_options(arg) { 
    
    for(var i = 0; i < nav_options_anchors.length; i++) { // <- Verifica qual <a> de categoria foi clicado.
        if(arg === nav_options_anchors[i]) {

            nav_options_anchorClicked_index = i
            break  
        }
    }

    if(nav_divs[nav_options_anchorClicked_index].style.display !== 'block') { // <- Habilita/desabilita o <div> de sub opção 
                                                                           // correspondente ao <a> de categoria clicado.

        for(var i = 0; i < nav_divs.length; i++) { // <- Desabilita todos os <div>'s de sub opção.
            nav_options_anchors[i].style = ''
            nav_divs[i].style = 'display: none'
        }

        if(window.innerWidth >= nav_expand) { 
            nav_options_anchors[nav_options_anchorClicked_index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 5px; padding-right: 5px; margin-top: 4px'
        }

        nav_divs[nav_options_anchorClicked_index].style = 'display: block'

        nav_menu_compact_enabled = true

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').classList.add('overflow_hidden')
            nav_html_scrollbar_allowedEnable = true
        }

    } else {
        nav_options_anchors[nav_options_anchorClicked_index].style = ''
        nav_divs[nav_options_anchorClicked_index].style = 'display: none'

        nav_options_anchorClicked_index = 'none'

        nav_menu_compact_enabled = false

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').classList.remove('overflow_hidden')
        }
    }
}

// Fechar janela do menu ao clicar fora dele:
{

var nav_optionsMenu_clicked = false
var nav_subOptionsMenu_clicked = false

// Janela do menu quando Header-nav está compacto:

    document.querySelector('.nav-menu > ul').onclick = function() { // console.log('optionsMenu')
        nav_optionsMenu_clicked = true
    }

    document.querySelector('.nav-menu').onclick = function() { // console.log('.nav-menu')
        if(nav_optionsMenu_clicked === false) {
            document.querySelector('.nav-menu').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(2)').style = 'display: none'
            document.querySelector('.nav-menu-button :nth-child(1)').style = 'display: block'
            document.querySelector('html').classList.remove('overflow_hidden')
            nav_menu_compact_enabled = false

            for(var i = 0; i < nav_divs.length; i++) {
                nav_options_anchors[i].style = ''
                nav_divs[i].style = 'display: none'
            }
            nav_options_anchorClicked_index = 'none'
        } else {
            nav_optionsMenu_clicked = false
        }
    }

// Janela do menu quando Header-nav está expandido:

    for(var i = 0; i < nav_divs.length; i++) {

        nav_divs[i].children[0].onclick = function() { // console.log('subOptionsMenu') 
            nav_subOptionsMenu_clicked = true
        }
    }

    for(var i = 0; i < nav_divs.length; i++) {

        nav_divs[i].onclick = function() { // console.log('div')
            if(nav_subOptionsMenu_clicked === false) {

                document.querySelector('html').classList.remove('overflow_hidden')
                nav_menu_compact_enabled = false

                for(var i = 0; i < nav_divs.length; i++) {
                    nav_options_anchors[i].style = ''
                    nav_divs[i].style = 'display: none'
                }
                nav_options_anchorClicked_index = 'none'
            } else {
                nav_subOptionsMenu_clicked = false
            }
        }
    }

}

// Header-nav button:

document.querySelector('.nav-menu > ul > li:nth-last-of-type(1)').onclick = function() { // <- Hide Header-nav

    for(var i = 0; i < nav_divs.length; i++) {
        nav_options_anchors[i].style = ''
        nav_divs[i].style = 'display: none'
    }

    nav_menu_compact_enabled = false
    nav_options_anchorClicked_index = 'none'

    if(window.innerWidth >= nav_expand) { 
        document.querySelector('html').classList.remove('overflow_hidden')
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

/*  
──────────────────────────────────────────────────────
TODO: Footer - HTML
────────────────────────────────────────────────────── */

document.querySelector('footer').innerHTML = `

<div class="central footer-content">

<address>

    <!--<p>Contactthe author of this page:</p>-->
    <!--<p>Página escrita por <a href="#"> Chris Mills</a>.</p>-->
    <!--  <ul>
            <li>Phone: <a href="tel:+6824258804">(68) 2425-8804</a></li>
            <li>E-mail: <a href="mailto:support@company.com.br">support@company.com.br</a></p></li>
            </ul>-->
    <!--<p>Follow us on:</p>-->

        <ul class="footer-icons">
            <li><a href="mailto:support@company.com.br"><img src="images/icon-mail.svg" alt=""></a></li>  
            <li><a href="#"><img src="images/icon-facebook.svg" alt=""></a></li>  
            <li><a href="#"><img src="images/icon-youtube.svg" alt=""></a></li> 
            <li><a href="#"><img src="images/icon-twitter.svg" alt=""></a></li> 
            <li><a href="#"><img src="images/icon-instagram.svg" alt=""></a></li>
            <li><a href="#"><img src="images/icon-twitch.svg" alt=""></a></li>
        </ul>

    <!--<p>If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.</p> -->

</address> 

<p class="copyright">© Copyright 2750 <!--by nobody./-->Company Inc. All rights reversed.</p>

    </div>
`

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