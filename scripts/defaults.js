
// {(function(){    })()}  

var nav_expand = 565 // VÍNCULO: Váriável JS

/*  
──────────────────────────────────────────────────────
TODO: Header-nav
────────────────────────────────────────────────────── */
/*  
────────────────────────────
TODO:    >  NavMenu-HTML
──────────────────────────── */

document.querySelector('.nav-menu').innerHTML = `

<ul>
<li><a onclick="nav_menu_options(this)">Link 1</a>

    <div>
        <ul>
            <li><a href="#">Link 1.1</a></li>
            <li><a href="#">Link 1.2</a></li>
            <li><a href="#">Link 1.3</a></li>
        </ul>
    </div>

</li> 

<li><a onclick="nav_menu_options(this)">Link 2</a>

    <div>
        <ul class="nav_compact_subOptions_textBelow">
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 2.1</span></a></li>
            <!--<li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 2.2</span></a></li>-->
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 2.3</span></a></li>
            <!--<li><a href="#">Link 2.4</a></li>-->
            <li><a href="#"><img src="images/img-pc.png" alt=" "><span>Link 2.5</span></a></li>
        </ul>
    </div>

</li>

<li><a onclick="nav_menu_options(this)">Link 3</a>

    <div>
        <ul class="nav_subOptions_horizontal  nav_expanded_subOptions_textBelow">
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 3.1</span></a></li>
            <!--<li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 3.2</span></a></li>-->
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 3.3</span></a></li>
           <!-- <li><a href="#">Link 3.4</a></li>-->
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 3.5</span></a></li>
            <li><a href="#"><img src="images/img-pc-vertical.png" alt=" "><span>Link 3.6</span></a></li>
        </ul>
    </div>

</li>

<li><a href="">L4-∅</a><div></div></li><!---->

<li><a onclick="nav_menu_options(this)"><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">L5</a>

    <div>
        <ul>
            <li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 5.1</span></a></li>
            <li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 5.2</span></a></li>
            <li><a href="#"><span><img src="images/textImg_sample_2_1.svg" alt="" class="textImg_Size">Link 5.3</span></a></li>
            <!--<li><a href="#">Link 5.4</a></li>
            <li><a href="#"><img src="images/img-pc.png" alt="" class="nav_poster_margins"><span>Link 5.5</span></a></li> 
            <li><a href="#"><img src="images/img-pc.png" alt="" class="nav_poster_margins"><span>Link 5.6</span></a></li>-->
        </ul>
    </div>

</li>

<li><a href="page_2.html">Pg 2</a><div></div></li>
<li><a aria-label="Hide bar"><img src="images/icon-headerNav-hide.svg" alt="Header-nav button"></a></li>
</ul>
`

/*  
────────────────────────────
TODO:    >  NavMenu-Ações
──────────────────────────── */

var nav_menu_compact_enabled = false
var nav_categories_anchors = document.querySelectorAll('.nav-menu > ul > li > a')
var nav_divs = document.querySelectorAll('.nav-menu > ul > li > div') 
var nav_index = 'none'
var bg_nav_selector = 'url(../../images/bg_nav_selector.png)  center/100% 100%' // VÍNCULO: Váriável JS

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

            for(var i = 0; i < nav_divs.length; i++) {
                nav_categories_anchors[i].style = ''
                nav_divs[i].style = 'display: none'
            }

            nav_index = 'none'
        }
    //}
}

/* // Colocar o código JavaScrip da navegação que está no HTML neste arquivo JavaScript:

console.log(document.querySelectorAll('.nav-menu > ul > li'))

var nav_options = document.querySelectorAll('.nav-menu > ul > li')

for(var i = 0; i < nav_options.length; i++) { 

    //console.log(nav_options[0].lastElementChild.firstElementChild)

    if(nav_options[i].lastElementChild.firstElementChild !== null) { 
        console.log(nav_options[i].lastElementChild.firstElementChild)
    } else { 
        console.log('Falso!')
    }
}

//document.querySelector('#nav-menu > ul > li > a').setAttribute('onclick', 'nav_menu_options(this)')
*/

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

    if(nav_index !== 'none') { 
        if(window.innerWidth >= nav_expand) {
            nav_categories_anchors[nav_index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
        } else { 
            nav_categories_anchors[nav_index].style = 'background: 0' 
        }
     } /*else { 
        if(window.innerWidth < nav_expand) {
            nav_categories_anchors[nav_index].style = 'background: 0' 
        }
     }*/
}

function nav_menu_options(arg) { 
    
    for(var i = 0; i < nav_categories_anchors.length; i++) { // <- Verifica qual <a> de categoria foi clicado.
        if(arg === nav_categories_anchors[i]) {

            nav_index = i
            break  
        }
    }
    
//-------------------------------------------------------------------------------------------------

    if(nav_divs[nav_index].style.display !== 'block') { // <- Habilita/desabilita o <div> de sub opção 
                                                                           // correspondente ao <a> de categoria clicado.

        for(var i = 0; i < nav_divs.length; i++) { // <- Desabilita todos os <div>'s de sub opção.
            nav_categories_anchors[i].style = ''
            nav_divs[i].style = 'display: none'
        }

        if(window.innerWidth >= nav_expand) { 
            nav_categories_anchors[nav_index].style = 
            'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 5px; padding-right: 5px; margin-top: 4px'
        }

        nav_divs[nav_index].style = 'display: block'

        nav_menu_compact_enabled = true

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').style = 'overflow: hidden'
        }

    }else{
        nav_categories_anchors[nav_index].style = ''
        nav_divs[nav_index].style = 'display: none'

        nav_index = 'none'

        nav_menu_compact_enabled = false

        if(window.innerWidth >= nav_expand) { 
            document.querySelector('html').style = 'overflow: auto'
        }
    }
}

// Header-nav button:

document.querySelector('.nav-menu > ul > li:nth-last-of-type(1)').onclick = function() { // <- Hide Header-nav

    for(var i = 0; i < nav_divs.length; i++) {
        nav_categories_anchors[i].style = ''
        nav_divs[i].style = 'display: none'
    }

    nav_menu_compact_enabled = false
    nav_index = 'none'

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

/*  
──────────────────────────────────────────────────────
TODO: Footer-HTML
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

function choice(arg) {

    if(arg.classList.contains('choice_d')) {

        //alert(1)

        arg.classList.toggle('choice_d_open')

    }else{
            
        if(choice_anchorClicked !== null) {

            for(var i = 0; i < arg.children.length; i++) { 

                arg.children[i].children[0].classList.remove('choice_option_on')
            }

            choice_anchorClicked.classList.add('choice_option_on')

            choice_anchorClicked = null
        }
    }
}

function choice_option(arg) {

    choice_anchorClicked =  arg
}












var allChoicesD = document.querySelectorAll('.choice_d');

for(var i = 0; i < allChoicesD.length; i++) { 

var e = document.createElement("li");

    console.log(allChoicesD[i])
    
    allChoicesD[i].appendChild(e)
}
