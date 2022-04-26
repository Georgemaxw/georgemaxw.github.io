/*  
──────────────────────────────────────────────────────
gmes-identity.js
────────────────────────────────────────────────────── */

/* 
──────────────────────────────────────────────────────
TODO: Framework Demos
────────────────────────────────────────────────────── */

{
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

// Switch - Sample functions:

function switch_1(arg){ if(arg.classList.contains('disabled')) { return }; console.log(1) }
function switch_2(arg){ if(arg.classList.contains('disabled')) { return }; console.log(2) }
function switch_3(arg){ if(arg.classList.contains('disabled')) { return }; console.log(3) }
function switch_4(arg){ if(arg.classList.contains('disabled')) { return }; console.log(4) }
function switch_5(arg){ if(arg.classList.contains('disabled')) { return }; console.log(5) }
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

<!--<li><a href="../pages/index.html"><span>Home</span></a><div><ul></ul></div></li>-->

<li><a href="#"><span>News</span></a><div><ul></ul></div></li><!---->

<li><a onclick="nav_menu_options(this)"><span>Game</span></a>

    <div>
        <ul>
            <li><a href="#"><span>History</span></a></li>
            <li><a href="#"><span>Characters</span></a></li>
            <li><a href="types.html"><span>Types</span></a></li>
            <li><a href="skills.html"><span>Skills</span></a></li>
        </ul>
    </div>

</li> 

<li><a href="../blutanium/pages/index.html"><span>Blutanium</span></a><div><ul></ul></div></li>

<!--<li><a href="download.html"><span>Download</span></a><div><ul></ul></div></li>-->

<li><a aria-label="Hide bar"><img src="../blutanium/images/icons/headerNav-hide.svg" alt="Header-nav button"></a></li>
</ul>
`

/*
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
*/

/*  
────────────────────────────
TODO:    >  Nav - JS
──────────────────────────── */

var nav_menu_compact_enabled = false
var nav_options_anchors = document.querySelectorAll('.nav-menu > ul > li > a')
var nav_divs = document.querySelectorAll('.nav-menu > ul > li > div') 
var nav_options_anchorClicked_index = 'none'
// var bg_nav_selector = 'url(../../../blutanium/images/bgs/nav_selector.png)  center/100% 100%' // VÍNCULO: Váriável CSS

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
                            <img class="piece_icon" src="../blutanium/images/icons/email.svg" alt=""> 
                        </a> 
                    </li> 

                    <li>
                        <a class="button_icon rounded green" onclick="lightbox('(68) 2425-8804')"> 
                            <img class="piece_icon" src="../blutanium/images/icons/whatsapp.svg" alt="" style="padding-top: 1px;">
                        </a> 
                    </li> 

                    <li>
                        <a href="#" class="button_icon rounded red"> 
                            <img class="piece_icon" src="../blutanium/images/icons/youtube.svg" alt="">
                        </a> 
                    </li> 

                    <!--
                    <li>
                        <a href="#" class="button_icon rounded"> 
                            <img class="piece_icon" src="../blutanium/images/icons/facebook.svg" alt="">
                        </a>
                    </li>
                    --> 

                    <li>
                        <a href="#" class="button_icon rounded yellow"> 
                            <img class="piece_icon" src="../blutanium/images/icons/instagram.svg" alt="">
                        </a> 
                    </li> 
                </ul>
        
            <!--<p>If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.</p> -->
        
        </address> 
        
        <p class="copyright">© Copyright 2024 <!--by nobody./-->Tec OP Inc. All rights reversed.</p>
        
    </div>
 
`

update_switches_buttons_and_anchors(document.querySelectorAll('footer a')) 

/* 
──────────────────────────────────────────────────────
TODO: Table - Skills
────────────────────────────────────────────────────── */

var type_icon_imgs = document.querySelectorAll('img.type_icon')

imgsNamesAsAlts(type_icon_imgs)

/*  
────────────────────────────
TODO:    > Variables Used In 2+ Topics
──────────────────────────── */

var skills_table_box = document.querySelector('.skills_table_box')

var skills_table_rows = document.querySelectorAll('.skills_table tr')

var skills_table_rows_onlySkills = document.querySelectorAll('.skills_table tr:not(:nth-of-Type(1))')

var skills_table_ths = document.querySelectorAll('.skills_table th')

var STSB_switchs = document.querySelectorAll('.skills_types_switchs_box .switch')

var SDSB_switchs = document.querySelectorAll('.skills_data_switchs_box .switch')

/*  
────────────────────────────
TODO:    > Add Classes Of <th> names
                    In Table Cells
──────────────────────────── */

for (i = 0; i < skills_table_ths.length; i++) {

    var skills_table_th_content = skills_table_ths[i].textContent
    
    skills_table_ths[i].classList.add(skills_table_th_content)

    /*
    for (i2 = 1; i2 < skills_table_rows.length; i2++) {

        if(skills_table_rows[i2]) {

            var tds = skills_table_rows[i2].querySelectorAll(':scope td')

            tds[i].classList.add(skills_table_th_content)
        }
    }
    */
}

/*  
────────────────────────────
TODO:    > Skills Choice
──────────────────────────── */

imgsNamesAsAlts(document.querySelectorAll('.skills_types_choice img'))

function func_skills_types_choices(el) {

    var skills_quantity = 0

    skills_table_rows_onlySkills.forEach(function (skill_row) {

        skill_row.style.display = 'none'
    
        var skill_types_imgs = skill_row.querySelectorAll(':scope .Type img') 


        var switch_show_only_internet_skills_on = 
        document.querySelector('.skills_switch_show_only_internet_skills').classList.contains('on')
    
        var skill_not_available_on_internet = 
        skill_row.querySelector(':scope .Available span').textContent !== 'IRL and Net'

        var always_show_skill_regarding_internet_availability = 
        !(switch_show_only_internet_skills_on && skill_not_available_on_internet)

        if (!(switch_show_only_internet_skills_on && skill_not_available_on_internet)) {
            
        if (el.querySelector('img') === null) { // Quando selecionar para mostrar todas as habilidades.
                
            skill_row.style.display = 'table-row'
            skills_quantity++
            
        } else { // Quando selecionar algum tipo.

            console.log(always_show_skill_regarding_internet_availability)
        
            var this_type_img = getImgName(el.querySelector('img'))

            for (i = 0; i < skill_types_imgs.length; i++) {

                if(getImgName(skill_types_imgs[i]) === this_type_img) {

                    console.log(1)

                    skill_row.style.display = 'table-row'
                    skills_quantity++

                    break

                } else {

                    console.log(0)

                    skill_row.style.display = 'none'
                }
            }
        }

        }

    })

    // document.querySelector('.skills_table_box').style.display = 'block'
    // document.querySelector('.skills_quantity').style.display = 'block'

    document.querySelector('.skills_quantity span').textContent = skills_quantity
} 

document.querySelector('.skills_switch_show_only_internet_skills').addEventListener('click', function() { 

    var skills_choice = document.querySelector('.skills_types_choice')
    // var skills_choice_options = document.querySelectorAll('.skills_types_choice > li')
    var skills_choice_options_anchor = document.querySelectorAll('.skills_types_choice > li a')
    
    // var skills_choice_actual_type = document.querySelector('.skills_types_choice > li > a span').textContent

    // console.log(skills_choice_actual_type)
    
    choice(skills_choice)

/*  */
    skills_choice_options_anchor.forEach(function (option) {
    
        if (option.classList.contains('on')) {

            func_skills_types_choices(option)
            choice_option(option)
        }
    })

    choice(skills_choice)  

/* 
    skills_choice_options_anchor.forEach(function (option) {

        if (option.querySelector(':scope span').textContent === skills_choice_actual_type) {
            
            func_skills_types_choices(option)
            choice_option(option)
        }
    })

    choice(skills_choice)
    */    
 })

 












/*  

*/
















/*  
────────────────────────────
OUT:    > Skills Types Switchs
──────────────────────────── */

/*  
────────────────────────────
OUT:        >> Initial Settings
──────────────────────────── 

var quantity_of_types_activated = 0

for (i = 0; i < skills_table_rows.length; i++) {

    skills_table_rows[i].activated_skill_counter = 0
}

imgsNamesAsAlts(document.querySelectorAll('.skills_types_switchs_box img'))
*/

/*  
────────────────────────────
OUT:        >> Skills Types Switchs Function
──────────────────────────── 

function F_skills_types_switchs(el) {

    for (i = 1; i < skills_table_rows.length; i++) {
        
        var imgs_type = skills_table_rows[i].querySelectorAll(':scope .Type img') 

        var this_type = getImgName(el.querySelector('.piece_icon'))

        for (i2 = 0; i2 < imgs_type.length; i2++) {

            if(getImgName(imgs_type[i2]) === this_type) {

                if(el.classList.contains('on')) {

                    quantity_of_types_activated--
                    skills_table_rows[i].activated_skill_counter--
                } else {
                    quantity_of_types_activated++
                    skills_table_rows[i].activated_skill_counter++
                }

                if(skills_table_rows[i].activated_skill_counter >= 1) {

                    skills_table_rows[i].style.display = 'table-row'
                } else {
                    skills_table_rows[i].style.display = 'none'
                }

                if(quantity_of_types_activated >= 1) {

                    document.querySelector('.skills_table_box').style.display = 'block'
                } else {
                    document.querySelector('.skills_table_box').style.display = 'none'
                }
            }
        }            
    }
}*/

/*  
────────────────────────────
OUT:            >> 'All' Switch
──────────────────────────── 

function F_skills_types_all_switch(el) {

    if (el.classList.contains('on')) {
        
        for (ix = 1; ix < STSB_switchs.length; ix++) {

            if (STSB_switchs[ix].classList.contains('on')) {
                
                F_skills_types_switchs(STSB_switchs[ix])
                switch_event(STSB_switchs[ix]) 
            }
        }
    } else {
        
        for (ix = 1; ix < STSB_switchs.length; ix++) {

            if (!STSB_switchs[ix].classList.contains('on')) {
                
                F_skills_types_switchs(STSB_switchs[ix])
                switch_event(STSB_switchs[ix]) 
            }
        }
    }
}*/

/*  
────────────────────────────
OUT:            >> Switch - hide skill names
──────────────────────────── 

function F_hide_skills_names(el) {
    
    STSB_switchs.forEach(function (current_switch) {
    
        if (el.classList.contains('on')) {
            
            //current_switch.querySelector('.piece_text').style.display = 'inline'
            current_switch.classList.remove('hide_skills_names')
            document.querySelector('.skills_types_switchs_box').classList.remove('hide_skills_names__justifyContent_center')
        } else {
            //current_switch.querySelector('.piece_text').style.display = 'none'
            current_switch.classList.add('hide_skills_names')
            document.querySelector('.skills_types_switchs_box').classList.add('hide_skills_names__justifyContent_center')
        }
    })
}*/

/*  
────────────────────────────
TODO:    > Skills Data Switchs
──────────────────────────── */

/*  
────────────────────────────
TODO:      >> Decrease Size Of Buttons 
                                On Highest Screen Width
──────────────────────────── 

var larger_screen_minWidth_setting = 1366 // VÍNCULO: Váriável JS, SCSS, e HTML (CSS no <style>).

onresize = function() {

    if(window.innerWidth >= larger_screen_minWidth_setting) {

        SDSB_switchs.forEach(function (current_switch) {
        
            current_switch.classList.add('small')
        })
    } else {

        SDSB_switchs.forEach(function (current_switch) {
        
            current_switch.classList.remove('small')
        })
    }
}*/
 
/*  
────────────────────────────
TODO:      >> Labels
──────────────────────────── */

for (i = 1; i < SDSB_switchs.length; i++) {

    SDSB_switchs[i].querySelector(':scope .piece_text').textContent = skills_table_ths[i - 1].textContent
}

/*  
────────────────────────────
TODO:      >> Set Switches Widths
──────────────────────────── */

function skills_data_switchs_width() {  

    SDSB_switchs.forEach(function (swt) {

        var dad = swt.parentElement
    
        var dad_width = Number(getComputedStyle(dad).getPropertyValue('width').slice(0,-2)) 
    
        swt.style.width = dad_width +'px'
    })
}
 
skills_data_switchs_width()

window.addEventListener('resize', skills_data_switchs_width)
  
/*  
────────────────────────────
TODO:      >> Logic
──────────────────────────── */

function F_skills_data_switchs(el) {

    if(!el.classList.contains('disabled')) {

                for (i = 0; i < SDSB_switchs.length; i++) {

            if (el === SDSB_switchs[i]) {
                    
                var SDSB_switchs_indexSwitch = i - 1
            }
        }

        if (el.classList.contains('on')) {
            
            skills_table_ths[SDSB_switchs_indexSwitch].style.display = 'none'

            for (i = 1; i < skills_table_rows.length; i++) {
            
                skills_table_rows[i].querySelectorAll(':scope td')[SDSB_switchs_indexSwitch].style.display = 'none'
            }
        } else {
            skills_table_ths[SDSB_switchs_indexSwitch].style.display = 'table-cell'

            for (i = 1; i < skills_table_rows.length; i++) {
            
                skills_table_rows[i].querySelectorAll(':scope td')[SDSB_switchs_indexSwitch].style.display = 'table-cell'
            }
        }
    }
}

/*  
────────────────────────────
TODO:          >>> 'All' Switch
──────────────────────────── */

function F_skills_data_all_switch(el) {

    if (el.classList.contains('on')) {
        
        for (ix = 1; ix < SDSB_switchs.length; ix++) {

            if (SDSB_switchs[ix].classList.contains('on')) {
                
                if (!hidden_data_indexes.some(function(item) { return item === ix })) {
                    
                    F_skills_data_switchs(SDSB_switchs[ix])
                    switch_event(SDSB_switchs[ix]) 
                }
            }
        }
    } else {
        
        for (ix = 1; ix < SDSB_switchs.length; ix++) {

            if (!SDSB_switchs[ix].classList.contains('on')) {
                
                if (!hidden_data_indexes.some(function(item) { return item === ix })) {
                    
                    F_skills_data_switchs(SDSB_switchs[ix])
                    switch_event(SDSB_switchs[ix]) 
                }
            }
        }
    }
}

/*  
────────────────────────────
TODO:      >> Initial Setting
──────────────────────────── */

/*  
────────────────────────────
TODO:          >>> Activate 'All'
                                        Type switch
──────────────────────────── */

STSB_switchs.forEach(function (current_switch) {

    if (current_switch.querySelector(':scope .piece_text').textContent === 'All') {

        F_skills_types_all_switch(current_switch)
        switch_event(current_switch)
    }
})

/*  
────────────────────────────
TODO:          >>> Activateds Data
──────────────────────────── */

var activated_data = ['Name', 'Type', 'Damage', 'Effect', 'Cost', 'Condition']

var activated_data_indexes = [ ]

for (i = 0; i < activated_data.length; i++) {

    for (i2 = 0; i2 < SDSB_switchs.length; i2++) { 

        if (activated_data[i] === SDSB_switchs[i2].querySelector(':scope .piece_text').textContent) {

            activated_data_indexes.push(i2)
        }
    }
}

for (ix = 0; ix < activated_data_indexes.length; ix++) {

    F_skills_data_switchs(SDSB_switchs[activated_data_indexes[ix]])
    switch_event(SDSB_switchs[activated_data_indexes[ix]])
}

/*  
────────────────────────────
TODO:          >>> 'Name' Data disabled
──────────────────────────── */

for (i = 0; i < SDSB_switchs.length; i++) {

    if (SDSB_switchs[i].querySelector(':scope .piece_text').textContent === 'Name') {

        SDSB_switchs[i].classList.add('disabled')
    }
}

/*  
────────────────────────────
TODO:          >>> Hidden Data Switchs
──────────────────────────── */

var hidden_data_switchs = []
var hidden_data_switchs = ['Name', 'plusTP', 'Notes'] 

var hidden_data_indexes = [ ]

for (i = 0; i < hidden_data_switchs.length; i++) {

    for (i2 = 0; i2 < SDSB_switchs.length; i2++) {

        if (hidden_data_switchs[i] === SDSB_switchs[i2].querySelector(':scope .piece_text').textContent) {

            // SDSB_switchs[i2].style.display = 'none'
            SDSB_switchs[i2].parentElement.style.display = 'none'

            hidden_data_indexes.push(i2)
        }
    }
}

/*  
────────────────────────────
TODO:    > Initial Type & Auto Table Full Screen
──────────────────────────── */

var skills_choice_initial_type = 'All Types'

var skills_choice = document.querySelector('.skills_types_choice')
var skills_choice_options = document.querySelectorAll('.skills_types_choice > li')
var skills_choice_options_anchor = document.querySelectorAll('.skills_types_choice > li a')
 
choice(skills_choice)

skills_choice_options_anchor.forEach(function (option) {

    if (option.querySelector(':scope span').textContent === skills_choice_initial_type) {
        
        func_skills_types_choices(option)
        choice_option(option)
    }
})
 
choice(skills_choice)

// skills_table_box.classList.toggle('skills_table_box_full'); document.body.classList.toggle('overflow_hidden')

/*  
────────────────────────────
TODO:    > Replace Table Header 
                'plusTP' With '+TP'
──────────────────────────── */

// Replace In Table Header:

for (i = 0; i < skills_table_ths.length; i++) {

    if(skills_table_ths[i].textContent.slice(0, 4) === 'plus') {

        skills_table_ths[i].textContent = skills_table_ths[i].textContent.replace('plus', '+')
    }
}

// Replace In Data Switchs Labels:

for (i = 0; i < SDSB_switchs.length; i++) {

    if(SDSB_switchs[i].querySelector(':scope .piece_text').textContent.slice(0, 4) === 'plus') {

        SDSB_switchs[i].querySelector(':scope .piece_text').textContent = SDSB_switchs[i].querySelector(':scope .piece_text').textContent.replace('plus', '+')
    }
}

/*  
────────────────────────────
TODO:    > Replace Table Header 
                'HP_or_AP_or_TP' With 'HP/AP/TP'
──────────────────────────── */

// Replace In Table Header:
/*  
for (i = 0; i < skills_table_ths.length; i++) {

    skills_table_ths[i].textContent = skills_table_ths[i].textContent.replace('_or_', '/')
    skills_table_ths[i].textContent = skills_table_ths[i].textContent.replace('_or_', '/')
}
*/



/* Se for utilizar " Replace Table Header 'HP_or_AP_or_TP' With 'HP/AP/TP' ", 
desbloqueei apenas os códigos desse comentário.*/

var skills_table_th__HP_or_AP_or_TP = document.querySelector('.skills_table th.HP_or_AP_or_TP')

if (skills_table_th__HP_or_AP_or_TP !== null) {
        
    skills_table_th__HP_or_AP_or_TP.textContent = 
    skills_table_th__HP_or_AP_or_TP.textContent.replace('_or_', '/').replace('_or_', '/')

    // Replace In Data Switchs Labels:

    for (i = 0; i < SDSB_switchs.length; i++) {

        SDSB_switchs[i].querySelector(':scope .piece_text').textContent = SDSB_switchs[i].querySelector(':scope .piece_text').textContent.replace('_or_', '/')
        SDSB_switchs[i].querySelector(':scope .piece_text').textContent = SDSB_switchs[i].querySelector(':scope .piece_text').textContent.replace('_or_', '/')
    }
}





/*  
var SDSB__HP_or_AP_or_TP = document.querySelector('.skills_data_switchs_box .HP_or_AP_or_TP')

SDSB__HP_or_AP_or_TP.textContent = 
SDSB__HP_or_AP_or_TP.textContent.replace('_or_', '/').replace('_or_', '/')
*/

/*  
────────────────────────────
TODO:    > Table Full Screen
──────────────────────────── */

// console.log(skills_table_box.getBoundingClientRect())

skills_table_box.addEventListener('click', function() { 
    
    //scroll({ top: skills_table_box.getBoundingClientRect().y  - 72, left: 0, behavior: 'smooth' })

    skills_table_box.classList.toggle('skills_table_box_full')
    document.body.classList.toggle('overflow_hidden')
})











/* 
──────────────────────────────────────────────────────
TODO: ...
────────────────────────────────────────────────────── */

/*  
────────────────────────────
TODO:    > ...
──────────────────────────── */


