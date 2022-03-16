/*  
──────────────────────────────────────────────────────
gmes-identity.js
────────────────────────────────────────────────────── */

/* 
──────────────────────────────────────────────────────
TODO: Framework Demos
────────────────────────────────────────────────────── */

/*  
────────────────────────────
TODO:    Choices
──────────────────────────── */

// Choice - Sample functions:

function choice_option_1(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(1) }
function choice_option_2(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(2) }
function choice_option_3(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(3) }
function choice_option_4(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(4) }
function choice_option_5(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(5) }

// Choice - Example 1 functions:

function choice_example_1_Action_1() {

    var choice_divsExample_1 = document.querySelector('.choice_example_1').children

    for(var i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_1').style = 'display: block'
}

function choice_example_1_Action_2() {

    var choice_divsExample_1 = document.querySelector('.choice_example_1').children

    for(var i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_2').style = 'display: block'
}

function choice_example_1_Action_3() {

    var choice_divsExample_1 = document.querySelector('.choice_example_1').children

    for(var i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_3').style = 'display: block'
}

// Choice - Example 2 functions:

function choice_example_2_Action_1() {

    var choice_divsExample_2 = document.querySelector('.choice_example_2').children

    for(var i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_1').style = 'display: block'
}

function choice_example_2_Action_2() {

    var choice_divsExample_2 = document.querySelector('.choice_example_2').children

    for(var i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_2').style = 'display: block'
}

function choice_example_2_Action_3() {

    var choice_divsExample_2 = document.querySelector('.choice_example_2').children

    for(var i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_3').style = 'display: block'
}

/*  
────────────────────────────
TODO:    Switches
──────────────────────────── */

// Switches & Buttons - Sample functions:

function switch_1(arg){ if(arg.classList.contains('disabled')) { return }; console.log(1) /*console.log(arg.className) */ } 
function switch_2(arg){ if(arg.classList.contains('disabled')) { return }; console.log(2) }
function switch_3(arg){ if(arg.classList.contains('disabled')) { return }; console.log(3) }
function switch_4(arg){ if(arg.classList.contains('disabled')) { return }; console.log(4) }
function switch_5(arg){ if(arg.classList.contains('disabled')) { return }; console.log(5) }

// Tests Switches - No Unnecessary Pieces - Turn ON/OFF:

var switches_group_2 = document.querySelector('.tests_toggle_switches_no_unnecessary_pieces')

if (switches_group_2 !== null) {

    switches_group_2.addEventListener('click', function() {
        
        var switches = document.querySelectorAll('.test_switches_group_2 .switch')
        
        switches.forEach(function ($switch) { 

            switch_event($switch) 
        })
    })
}

// Tests Switches - Change Styles - Turn ON/OFF:

var switches_group = document.querySelector('.tests_toggle_switches_change_styles')

if (switches_group !== null) {
        
    switches_group.addEventListener('click', function() { 
        
        var switches = document.querySelectorAll('.test_switches_group .switch')
        
        switches.forEach(function ($switch) { 

            switch_event($switch) 
        })
    })
}

// Switches Change Color:

token_clickable_for_switches_blue = document.querySelector('.switches_change_color .blue').addEventListener('click', func_change_swts_color)
token_clickable_for_switches_red = document.querySelector('.switches_change_color .red').addEventListener('click', func_change_swts_color)
token_clickable_for_switches_yellow = document.querySelector('.switches_change_color .yellow').addEventListener('click', func_change_swts_color)
token_clickable_for_switches_green = document.querySelector('.switches_change_color .green').addEventListener('click', func_change_swts_color)
token_clickable_for_switches_black = document.querySelector('.switches_change_color .black').addEventListener('click', func_change_swts_color)
 
function func_change_swts_color() { 

    var new_color = this.classList[1]

    var switches = document.querySelectorAll('.test_switches_group .switch')
 
    switches.forEach(function (swt) {

        swt.classList.remove('blue')
        swt.classList.remove('red')
        swt.classList.remove('green')
        swt.classList.remove('yellow')
        swt.classList.remove('black')
    
        swt.classList.add(new_color)
    })
}  

// <button>/<a> Change Color:

token_clickable_for_buttons_blue = document.querySelector('.button_or_a__change_color .blue').addEventListener('click', func_change_btns_color)
token_clickable_for_buttons_red = document.querySelector('.button_or_a__change_color .red').addEventListener('click', func_change_btns_color)
token_clickable_for_buttons_yellow = document.querySelector('.button_or_a__change_color .yellow').addEventListener('click', func_change_btns_color)
token_clickable_for_buttons_green = document.querySelector('.button_or_a__change_color .green').addEventListener('click', func_change_btns_color)
token_clickable_for_buttons_black = document.querySelector('.button_or_a__change_color .black').addEventListener('click', func_change_btns_color)
 
function func_change_btns_color() { 

    var new_color = this.classList[1]

    var buttons = document.querySelectorAll('.test_buttons_group button')
 
    buttons.forEach(function (button) {

        button.classList.remove('blue')
        button.classList.remove('red')
        button.classList.remove('green')
        button.classList.remove('yellow')
        button.classList.remove('black')
    
        button.classList.add(new_color)
    })
} 

/*  
──────────────────────────────────────────────────────
TODO: Header-nav
────────────────────────────────────────────────────── */

{
var nav_expand = 565 // VÍNCULO: Váriável SCSS 

/*  
────────────────────────────
TODO:    >  Nav - Menu - HTML
──────────────────────────── */

document.querySelector('.nav-menu').innerHTML = `

<ul>
<li><a onclick="nav_menu_options(this)"><span>Link 1</span></a>

    <div>
        <ul>
            <li><a href="#"><span>Link 1.1</span></a></li>
            <li><a href="#"><span>Link 1.2</span></a></li>
            <li><a href="#"><span>Link 1.3</span></a></li>
        </ul>
    </div>

</li> 

<li><a onclick="nav_menu_options(this)"><span>Link 2</span></a>

    <div>
        <ul>
            <li><a href="#"><img src="../images/exs/landscape.png" alt=" "><span>Link 2.1</span></a></li>
            <!--<li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 2.2</span></a></li>-->
            <li><a href="#"><img src="../images/exs/landscape.png" alt=" "><span>Link 2.3</span></a></li>
            <!--<li><a href="#">Link 2.4</a></li>-->
            <li><a href="#"><img src="../images/exs/landscape.png" alt=" "><span>Link 2.5</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)"><span>L3</span></a>

    <div>
        <ul class="nav_compact_sub_options_text_below">
            <li><a href="#"><img src="../images/exs/landscape.png" alt=" "><span>Link 3.1</span></a></li>
            <!--<li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 3.2</span></a></li>-->
            <li><a href="#"><img src="../images/exs/landscape.png" alt=" "><span>Link 3.3</span></a></li>
            <!--<li><a href="#">Link 3.4</a></li>-->
            <li><a href="#"><img src="../images/exs/landscape.png" alt=" "><span>Link 3.5</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)"><span>L4</span></a>

    <div>
        <ul class="nav_expanded_sub_options_h nav_expanded_sub_options_text_below">
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 4.1</span></a></li>
            <!--<li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 4.2</span></a></li>-->
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 4.3</span></a></li>
           <!-- <li><a href="#">Link 4.4</a></li>-->
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 4.5</span></a></li>
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 4.6</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)"><span>L5</span></a> 

    <div>
        <ul class="nav_expanded_sub_options_h nav_sub_options_text_below">
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 5.1</span></a></li>
            <!--<li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 5.2</span></a></li>-->
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 5.3</span></a></li>
           <!-- <li><a href="#">Link 5.4</a></li>-->
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 5.5</span></a></li>
            <li><a href="#"><img src="../images/exs/portrait.png" alt=" "><span>Link 5.6</span></a></li>
        </ul>
    </div>

</li>

<li><a href=""><span>∅</span></a><div><ul></ul></div></li><!---->

<li><a onclick="nav_menu_options(this)"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">L7</span></a>

    <div>
        <ul>
            <li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 7.1</span></a></li>
            <li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 7.2</span></a></li>
            <li><a href="#"><span><img src="../images/exs/text_img_2_1.svg" alt="" class="text_img_size">Link 7.3</span></a></li>
            <!--<li><a href="#">Link 7.4</a></li>
            <li><a href="#"><img src="../images/exs/landscape.png" alt="" class="nav_poster_margins"><span>Link 7.5</span></a></li> 
            <li><a href="#"><img src="../images/exs/landscape.png" alt="" class="nav_poster_margins"><span>Link 7.6</span></a></li>-->
        </ul>
    </div>

</li>

<li><a href="page.html"><span>P</span></a><div><ul></ul></div></li>
<li><a aria-label="Hide bar"><img src="../images/icons/headerNav-hide.svg" alt="Header-nav button"></a></li>
</ul>
`

/*  
────────────────────────────
TODO:    >  Nav - JS
──────────────────────────── */

var nav_menu_compact_enabled = false
var nav_options_anchors = document.querySelectorAll('.nav-menu > ul > li > a')
var nav_divs = document.querySelectorAll('.nav-menu > ul > li > div') 
var nav_options_anchorClicked_index = 'none'
// var bg_nav_selector = 'url(../../../images/bgs/nav_selector.png)  center/100% 100%' // VÍNCULO: Váriável CSS

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
            //nav_options_anchors[i].style = ''
            nav_options_anchors[i].classList.remove('nav_selector')
            nav_divs[i].style = 'display: none'
        }

        nav_options_anchorClicked_index = 'none'
    }
}

window.onresize = function() {
    if(window.innerWidth >= nav_expand) {
        //document.querySelector('.nav-menu').style = 'display: inline-block'
         
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
            //nav_options_anchors[nav_options_anchorClicked_index].style = 
            //'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
            nav_options_anchors[nav_options_anchorClicked_index].classList.add('nav_selector')

        } else { 
            //nav_options_anchors[nav_options_anchorClicked_index].style = 'background: 0' 
            nav_options_anchors[nav_options_anchorClicked_index].classList.remove('nav_selector')
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
            // nav_options_anchors[i].style = ''
            nav_options_anchors[i].classList.remove('nav_selector')
            nav_divs[i].style = 'display: none'
        }

        if(window.innerWidth >= nav_expand) { 
            //nav_options_anchors[nav_options_anchorClicked_index].style = 
            //'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 5px; padding-right: 5px; margin-top: 4px'
            nav_options_anchors[nav_options_anchorClicked_index].classList.add('nav_selector')
        }

        nav_divs[nav_options_anchorClicked_index].style = 'display: block'

        nav_menu_compact_enabled = true

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').classList.add('overflow_hidden')
            nav_html_scrollbar_allowedEnable = true
        }

    } else {
        //nav_options_anchors[nav_options_anchorClicked_index].style = ''
        nav_options_anchors[nav_options_anchorClicked_index].classList.remove('nav_selector')
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
                // nav_options_anchors[i].style = ''
                nav_options_anchors[i].classList.remove('nav_selector')
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
                    // nav_options_anchors[i].style = ''
                    nav_options_anchors[i].classList.remove('nav_selector')
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
        //nav_options_anchors[i].style = ''
        nav_options_anchors[i].classList.remove('nav_selector')
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

                    <!-- Footer anterior: -->
                    <!--  
                    <li><a href="mailto:support@company.com.br"><img src="../images/icons/mail.svg" alt=""></a></li>  
                    <li><a href="#"><img src="../images/icons/youtube.svg" alt=""></a></li> 
                    <li><a href="#"><img src="../images/icons/twitch.svg" alt=""></a></li>
                    <li><a href="#"><img src="../images/icons/instagram.svg" alt=""></a></li>
                    <li><a href="#"><img src="../images/icons/facebook.svg" alt=""></a></li>  
                    <li><a href="#"><img src="../images/icons/twitter.svg" alt=""></a></li> 
                    -->

                    <!-- Footer novo: -->

                    <li>
                        <a href="mailto:support@company.com.br" class="button_icon rounded"> 
                            <img class="piece_icon" src="../images/icons/email.svg" alt=""> 
                        </a> 
                    </li> 

                    <li>
                        <a class="button_icon rounded green" onclick="lightbox('(68) 2425-8804')"> 
                            <img class="piece_icon" src="../images/icons/whatsapp.svg" alt="" style="padding-top: 1px;">
                        </a> 
                    </li> 

                    <li>
                        <a href="#" class="button_icon rounded red"> 
                            <img class="piece_icon" src="../images/icons/youtube.svg" alt="">
                        </a> 
                    </li> 

                    <!-- 
                    <li>
                        <a href="#" class="button_icon rounded"> 
                            <img class="piece_icon" src="../images/icons/facebook.svg" alt="">
                        </a>
                    </li>
                    -->

                    <li>
                        <a href="#" class="button_icon rounded yellow"> 
                            <img class="piece_icon" src="../images/icons/instagram.svg" alt="">
                        </a> 
                    </li> 
                </ul>
        
            <!--<p>If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.</p> -->
        
        </address> 
        
        <p class="copyright">© Copyright 2750 <!--by nobody./-->Company Inc. All rights reversed.</p>
        
    </div>
 
`

update_switches_buttons_and_anchors(document.querySelectorAll('footer a')) 

/* 
──────────────────────────────────────────────────────
TODO: ...
────────────────────────────────────────────────────── */