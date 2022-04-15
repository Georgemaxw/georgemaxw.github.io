/* 
──────────────────────────────────────────────────────
gmes-defaults.js
────────────────────────────────────────────────────── */

/* Test: */ // if(document.body.prop === true) { console.log('S') } else { console.log('N') } 

/*  
──────────────────────────────────────────────────────
TODO: Global Variables
────────────────────────────────────────────────────── */

var $is_cellphone = innerWidth <= 500 || innerHeight <= 500

var $is_mobile = innerWidth <= 1366 && innerHeight <= 1366

var $color_theme = 'DeepSkyBlue' // VÍNCULO: Váriável SCSS

/*  
──────────────────────────────────────────────────────
TODO: Switches & Buttons
────────────────────────────────────────────────────── */

function switch_event(arg) {

    if(arg.classList.contains('disabled')) {
        
    } else {
        arg.classList.toggle('on')
    }
}

/*
// Usando e.target fica bugado:

var switches = document.querySelectorAll('.switch')

for (i = 0; i < switches.length; i++) {
    
    switches[i].onclick = function(e) {

        if(e.target.parentNode.classList.contains('disabled')) {
            return
        }
    
        e.target.parentNode.classList.toggle('on')
    }
}
*/

/*  
────────────────────────────
TODO:    > Switches, Buttons, And Anchors All Type Button
──────────────────────────── */

var $is_safari_for_desktop_or_is_a_mobile_browser = navigator.vendor.indexOf('Apple') !== -1
var $is_safari_for_desktop_or_is_a_tablet_browser = $is_safari_for_desktop_or_is_a_mobile_browser && !($is_cellphone)

function switches_buttons_and_anchors__type_button($switches_or_buttons_or_anchors) {

    /*
    var $color_shadow_box_inset_switch_type_button_dark = 'hsla(0, 0%, 0%, 0.33)' // VÍNCULO: Váriável SCSS
    var $color_shadow_box_inset_element_type_button_clear = 'white' // VÍNCULO: Váriável SCSS
    var $bg_element_type_button_clear_blue = 'linear-gradient(to bottom, hsla(0, 0%, 100%, 0.15) 46%, hsla(0, 0%, 100%, 0.64), white), hsl(193, 100%, 80%)' // VÍNCULO: Váriável SCSS
    */
    
    $switches_or_buttons_or_anchors.forEach(function ($swt_or_btn_or_a) {

        if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) {

            // --------- Concerto de bugs ---------

            // Bug Fix 1 - As sombras internas criadas pelo box-shadow ('box-shadow: inset ...') dos elementos com qualquer uma das classes 
            // 'pill' ou 'rounded' PODEM não renderizar corretamente no Safari para desktop dependendo do tamanho da janela (seja o 
            // tamanho horizontal ou vertical):

            // if (($swt_or_btn_or_a.classList.contains('pill') || $swt_or_btn_or_a.classList.contains('rounded')) && $is_safari_for_desktop_or_is_a_tablet_browser) { 
            // 
            //     $swt_or_btn_or_a.classList.remove('pill')
            //     $swt_or_btn_or_a.classList.remove('rounded')
            // }

            // Bug Fix 2 - Os elementos com as classes 'button_icon' e 'rounded' ficam muito grandes no mobile:

            /*
            if ($swt_or_btn_or_a.classList.contains('button_icon') && $swt_or_btn_or_a.classList.contains('rounded') && $is_mobile) { 

                $swt_or_btn_or_a.classList.remove('rounded')
                $swt_or_btn_or_a.classList.add('pill')
            }
            */

            // --------- Variáveis ---------
            
            // Obs.: As variáveis '$swt_or_btn_or_a_width' e '$swt_or_btn_or_a_height' não foram colocadas aqui pois 
            // a largura e altura dos botões variam desde o do início até o final desta função.

            var $piece_label = $swt_or_btn_or_a.querySelector(':scope .piece_label')
            var $piece_icon = $swt_or_btn_or_a.querySelector(':scope .piece_icon')
            var $piece_text = $swt_or_btn_or_a.querySelector(':scope .piece_text')

            if ($piece_icon !== null) {

                var $piece_icon_width = Number(getComputedStyle($piece_icon).getPropertyValue('width').slice(0,-2)) 
                var $piece_icon_height = Number(getComputedStyle($piece_icon).getPropertyValue('height').slice(0,-2)) 
                var $piece_icon_area = $piece_icon_width * $piece_icon_height
                var $piece_icon_size_default = 32
                var $swt_or_btn_or_a__type_button_icon_min_size = 50
            }
            
            if ($piece_text !== null) {  

                // var $piece_text_width = Number(getComputedStyle($piece_text).getPropertyValue('width').slice(0,-2)) 
                var $piece_text_height = Number(getComputedStyle($piece_text).getPropertyValue('height').slice(0,-2)) 
                var $piece_text_height_of_1_line = 35.84
                // var $piece_text_height_of_2_lines = 57.69
            }

            /* 
            // Variável  $smallest_initial_dimension:
            if($swt_or_btn_or_a.classList.contains('button_full') && !$swt_or_btn_or_a.classList.contains('rounded') && !$swt_or_btn_or_a.classList.contains('text_below')) { var $smallest_initial_dimension = 54 }
            if($swt_or_btn_or_a.classList.contains('button_full') && !$swt_or_btn_or_a.classList.contains('rounded') && $swt_or_btn_or_a.classList.contains('text_below')) { var $smallest_initial_dimension = 92.69 }
            if($swt_or_btn_or_a.classList.contains('button_text') && !$swt_or_btn_or_a.classList.contains('rounded')) { var $smallest_initial_dimension = 41.84 }
            if($swt_or_btn_or_a.classList.contains('button_icon') && !($swt_or_btn_or_a.classList.contains('pill') || $swt_or_btn_or_a.classList.contains('rounded'))) { var $smallest_initial_dimension = 50 }
            if($swt_or_btn_or_a.classList.contains('button_icon') && $swt_or_btn_or_a.classList.contains('pill') && !$swt_or_btn_or_a.classList.contains('rounded')) { var $smallest_initial_dimension = 56 }
            if($swt_or_btn_or_a.classList.contains('rounded')) { var $smallest_initial_dimension = 56 }

            var $swt_or_btn_or_a_is_square = !($swt_or_btn_or_a.classList.contains('pill') || $swt_or_btn_or_a.classList.contains('rounded'))
            */

            // --------- Brilho ---------

            var $shine = $swt_or_btn_or_a.querySelector(':scope .button_shine_top') 

            if ($shine === null) {

                var $shine = document.createElement('div')

                $shine.classList.add('button_shine_top')

                if ($piece_label !== null) { $swt_or_btn_or_a.querySelector(':scope .piece_label').insertAdjacentElement('afterbegin', $shine) } 
                else if ($piece_icon !== null) { $swt_or_btn_or_a.querySelector(':scope .piece_icon').insertAdjacentElement('beforebegin', $shine) }
                else if ($piece_text !== null) { $swt_or_btn_or_a.querySelector(':scope .piece_text').insertAdjacentElement('beforebegin', $shine) }
            }

            /* 
            // --------- Definir o border-radius dos ícones ---------

            if ($piece_icon !== null) { $piece_icon.style.borderRadius = 1/4 * Math.min($piece_icon_width, $piece_icon_height) +'px' }

            // --------- Definir o preenchimento dos 'button_full' e 'button_text', ambos com 'pill' --------- 

            var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

            if($swt_or_btn_or_a.classList.contains('pill')) {

                if($swt_or_btn_or_a.classList.contains('button_full')) { 

                    var $swt_or_btn_or_a_height_of_1_row = 54

                    if ($swt_or_btn_or_a_height > $swt_or_btn_or_a_height_of_1_row) {

                        var $padding_top_and_bottom = 11 + 0.09 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row)  

                        $swt_or_btn_or_a.style.paddingTop = $padding_top_and_bottom +'px' 
                        $swt_or_btn_or_a.style.paddingBottom = $padding_top_and_bottom +'px'  
                        $swt_or_btn_or_a.style.paddingRight = 20 + 0.17 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row) +'px'     

                    } else {

                        $swt_or_btn_or_a.style.paddingRight = '20px' 
                    }

                    if(!$swt_or_btn_or_a.classList.contains('text_below')) {

                        $swt_or_btn_or_a.style.paddingLeft = 18 + Math.max(0, 0.29 * ($piece_icon_height - $piece_icon_size_default)) +'px'  
                    }
                }

                if($swt_or_btn_or_a.classList.contains('button_text')) {

                    var $swt_or_btn_or_a_height_of_1_row = 42

                    if ($swt_or_btn_or_a_height > $swt_or_btn_or_a_height_of_1_row) {
                        
                        var $padding_top_and_bottom = 10 + 0.1 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row)  
                        var padding_left_and_right = 13 + 0.15 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row)  

                        $swt_or_btn_or_a.style.padding = $padding_top_and_bottom +'px '+ padding_left_and_right +'px'  

                    } else {

                        $swt_or_btn_or_a.style.paddingLeft = '13px' 
                        $swt_or_btn_or_a.style.paddingRight = '13px' 
                    } 
                }
            }

            // --------- Definir o preenchimento dos 'button_full' sem a classe 'text_below' e com 'rounded' --------- 

            if($swt_or_btn_or_a.classList.contains('button_full') && $swt_or_btn_or_a.classList.contains('rounded') && !$swt_or_btn_or_a.classList.contains('text_below')) {

                if ($piece_icon_width === $piece_icon_height) {
                    
                    $swt_or_btn_or_a.style.paddingLeft = 18 + Math.max(0, 0.06 * ($piece_icon_height - $piece_icon_size_default)) +'px'

                } else {

                    $swt_or_btn_or_a.style.paddingLeft = 18 + Math.max(0, 0.22 * ($piece_icon_height - $piece_icon_size_default)) +'px'
                }
            }

            // --------- Definir o preenchimento dos 'button_icon' ---------

            if($swt_or_btn_or_a.classList.contains('button_icon')) {
            
                if($swt_or_btn_or_a_is_square) {

                    $swt_or_btn_or_a.style.padding = (9/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'
                } 
                
                if($swt_or_btn_or_a.classList.contains('pill')) {

                    if($piece_icon_width === $piece_icon_height) {

                        if($piece_icon_width <= 32 || $piece_icon_height <= 32) {

                            $swt_or_btn_or_a.style.padding = (12/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'

                        } else {

                            $swt_or_btn_or_a.style.padding = (11/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'
                        }

                    } else if ($piece_icon_width > $piece_icon_height) {

                        $swt_or_btn_or_a.style.padding = (10/32) * $piece_icon_height +'px '+ (13/32) * $piece_icon_height +'px'

                    }  else if ($piece_icon_width < $piece_icon_height) {

                        $swt_or_btn_or_a.style.padding = (13/32) * $piece_icon_width +'px '+ (10/32) * $piece_icon_width +'px'
                    }
                }
                
                if($swt_or_btn_or_a.classList.contains('rounded')) {

                    if($piece_icon_width <= 32 || $piece_icon_height <= 32) {

                        $swt_or_btn_or_a.style.padding = (12/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'

                    } else {

                        $swt_or_btn_or_a.style.padding = (11/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'
                    }
                }
            }

            // ---------- Definir o raio das bordas dos botões normais (quadrados) e de seus brilhos ----------

            if($swt_or_btn_or_a_is_square) {

                var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 
                
                $swt_or_btn_or_a.style.borderRadius = 1/4 * Math.min($swt_or_btn_or_a_width, $swt_or_btn_or_a_height) +'px' 

                var $shine_width = Number(getComputedStyle($shine).getPropertyValue('width').slice(0,-2)) 
                var $shine_height = Number(getComputedStyle($shine).getPropertyValue('height').slice(0,-2)) 

                $shine.style.borderRadius = 1/4 * Math.min($shine_width, 2 * $shine_height) - 2 +'px' 
            } 

            // ---------- Definir a posição horizontal e a largura do brilho dos botões com a classe 'pill' ----------

            if($swt_or_btn_or_a.classList.contains('pill')) {

                var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

                if($swt_or_btn_or_a_width >= $swt_or_btn_or_a_height) {

                    var $shine_x = (12/54) * ($swt_or_btn_or_a_height) +'px'  

                } else {

                    var $a = (12/54) * ($swt_or_btn_or_a_width) - (0.2 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_width))
                    var $b = 0.094 * $swt_or_btn_or_a_width

                    var $shine_x = Math.max($a, $b) +'px'
                } 
        
                $shine.style.left = $shine_x 
                $shine.style.width = 'calc(100% - 2 * '+ $shine_x +')'
            }
            */

            // ---------- Arredondar 'button_full's e 'button_text's com a classe 'rounded' ---------- 

            if($swt_or_btn_or_a.classList.contains('rounded') && !$swt_or_btn_or_a.classList.contains('button_icon') && !$swt_or_btn_or_a.classList.contains('text_below')) {

                var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

                var $swt_or_btn_or_a_width_ceil = Math.ceil($swt_or_btn_or_a_width)
                var $swt_or_btn_or_a_height_ceil = Math.ceil($swt_or_btn_or_a_height)

                if($swt_or_btn_or_a_width_ceil > $swt_or_btn_or_a_height_ceil) {
            
                    $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_width_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                    $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_width_ceil + 'px'
            
                } else if ($swt_or_btn_or_a_width_ceil < $swt_or_btn_or_a_height_ceil) {
            
                    $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_height_ceil + 'px'
                    $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_height_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                }

                // Maneira alternativa:

                // if($swt_or_btn_or_a_width >= $swt_or_btn_or_a_height) { 

                //     var $padding_top_current =  Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('padding-top').slice(0,-2))
                //     var $padding_bottom_current =  Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('padding-bottom').slice(0,-2))

                //     $swt_or_btn_or_a.style.paddingTop = $padding_top_current + 1/2 * ($swt_or_btn_or_a_width - $swt_or_btn_or_a_height) + 'px'
                //     $swt_or_btn_or_a.style.paddingBottom = $padding_bottom_current + 1/2 * ($swt_or_btn_or_a_width - $swt_or_btn_or_a_height) + 'px'

                // } else {  

                //     $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_height_ceil + 'px'
                //     $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_height_ceil + 'px'
                // }
            }

            // ---------- Posição e preenchimento da etiqueta de hover dos botões de ícone ---------- 

            if($swt_or_btn_or_a.classList.contains('button_icon')) {

                if ($piece_text !== null) {

                    var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                    var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

                    $piece_text.style.display = 'none' // Esta propriedade foi aplicada aqui para que o JS consiga pegar o valor '$piece_text_width' antes do elemento '$piece_text' ser ocultado.

                    if (!$swt_or_btn_or_a.classList.contains('disabled')) {

                        if ($swt_or_btn_or_a_height >= $swt_or_btn_or_a__type_button_icon_min_size) {

                            var $y0 = 45 + Math.max(0, $piece_text_height - $piece_text_height_of_1_line) 
                            var $y_offset = Math.max(0, Math.min(15, 0.00028 * (($swt_or_btn_or_a_width * $swt_or_btn_or_a_height) - ($swt_or_btn_or_a__type_button_icon_min_size * $swt_or_btn_or_a__type_button_icon_min_size))))

                            $piece_text.style.top = -1 * ($y0 + $y_offset) + 'px'  
                        }
                    }

                    /*
                    // Padding:

                    if ($piece_text_height > Math.ceil($piece_text_height_of_2_lines)) { // Altura para 3+ linhas.

                        $piece_text.style.paddingTop = '10px'  
                        $piece_text.style.paddingLeft = '11px'
                        $piece_text.style.paddingRight = '11px'
                
                    } else {

                        $piece_text.style.paddingLeft = '9px'
                        $piece_text.style.paddingRight = '9px'
                    } 
                    */
                }
            }
            
            // --------- Definir os estilos dos 'button_full' com 'text_below' --------- 

            if($swt_or_btn_or_a.classList.contains('button_full') && $swt_or_btn_or_a.classList.contains('text_below')) {

                /*  
                if($swt_or_btn_or_a_is_square) {

                    var $icon_margin_T = Math.max(10, 0.00050 * $piece_icon_area)
                    var $icon_margin_B = Math.max(10, 0.00036 * $piece_icon_area) 
                    var $icon_margin_LR = Math.max(10, 0.00050 * $piece_icon_area)
            
                    $piece_icon.style.marginTop = $icon_margin_T +'px '
                    $piece_icon.style.marginBottom = $icon_margin_B +'px '
                    $piece_icon.style.marginLeft = $icon_margin_LR +'px'  
                    $piece_icon.style.marginRight = $icon_margin_LR +'px'

                    $swt_or_btn_or_a.style.paddingBottom = $icon_margin_B +'px'
                } 

                if ($swt_or_btn_or_a.classList.contains('pill')) { 

                    var $icon_margin_T = Math.max(10, 0.00050 * $piece_icon_area)
                    var $icon_margin_B = Math.max(10, 0.00043 * $piece_icon_area)  
                    var $icon_margin_LR = Math.max(12, 0.0011 * $piece_icon_area)
            
                    $piece_icon.style.marginTop = $icon_margin_T +'px'
                    $piece_icon.style.marginBottom = $icon_margin_B +'px'
                    $piece_icon.style.marginLeft = $icon_margin_LR +'px'  
                    $piece_icon.style.marginRight = $icon_margin_LR +'px'

                    $swt_or_btn_or_a.style.paddingBottom = 1.14 * $icon_margin_B +'px'

                    var $text_margin_LR = 12

                    $piece_text.style.marginLeft = $text_margin_LR +'px'  
                    $piece_text.style.marginRight = $text_margin_LR +'px'   

                    $swt_or_btn_or_a.style.paddingRight = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('padding-left').slice(0,-2))  +'px'
                }  

                if($swt_or_btn_or_a.classList.contains('rounded')) {

                    var $icon_margin_T = Math.max(20, 0.00073 * $piece_icon_area)
                    var $icon_margin_B = Math.max(10, 0.00036 * $piece_icon_area) 
                    var $icon_margin_LR = Math.max(10, 0.00050 * $piece_icon_area)
            
                    $piece_icon.style.marginTop = $icon_margin_T +'px '
                    $piece_icon.style.marginBottom = $icon_margin_B +'px '
                    $piece_icon.style.marginLeft = $icon_margin_LR +'px'  
                    $piece_icon.style.marginRight = $icon_margin_LR +'px'

                    $swt_or_btn_or_a.style.paddingBottom = $icon_margin_B +'px'

                    var $text_margin_LR = 10 + 0.0035 * $piece_icon_area

                    $piece_text.style.marginLeft = $text_margin_LR +'px'  
                    $piece_text.style.marginRight = $text_margin_LR +'px'   
                }
                */
            
                if($swt_or_btn_or_a.classList.contains('rounded')) { // Arredondar botões com a classe 'rounded'.
            
                    var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                    var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 
                
                    var $swt_or_btn_or_a_width_ceil = Math.ceil($swt_or_btn_or_a_width)
                    var $swt_or_btn_or_a_height_ceil = Math.ceil($swt_or_btn_or_a_height)
                
                    if($swt_or_btn_or_a_width_ceil >= $swt_or_btn_or_a_height_ceil) { 
                
                        $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_width_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                        $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_width_ceil + 'px'
                
                    } else {
                
                        $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_height_ceil + 'px'
                        $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_height_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                    }
                }
            }

            /*  
            // --------- Definir o box-shadow --------- 

            var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
            var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

            var $constant_of_increase = (1/(136)) * (Math.max(   (Math.min($swt_or_btn_or_a_width, $swt_or_btn_or_a_height) - $smallest_initial_dimension), 0   ))

            var $OFF_square_delta_blur = 5 * $constant_of_increase 
            var $OFF_square_delta_spread = 2 * $constant_of_increase
            var $OFF_pill_and_rounded_delta_blur = 4 * $constant_of_increase
            var $OFF_pill_and_rounded_delta_spread = 3 * $constant_of_increase

            var $ON_square_delta_blur = 5 * $constant_of_increase 
            var $ON_square_delta_spread = 5 * $constant_of_increase 
            var $ON_pill_and_rounded_delta_blur = 7 * $constant_of_increase 
            var $ON_pill_and_rounded_delta_spread = 5 * $constant_of_increase 

            var $box_shadow_out_clear_square = '0px 0px 12px 0px '+ $color_theme
            var $box_shadow_out_clear_no_square = '0px 0px 12px 0px '+ $color_theme

            update_button_boxShadow($swt_or_btn_or_a)

            function update_button_boxShadow() {

                if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) { 

                    if($swt_or_btn_or_a.classList.contains('switch')) { 

                        if(!$swt_or_btn_or_a.classList.contains('on')) { // OFF

                            if($swt_or_btn_or_a_is_square) {

                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (8 + $OFF_square_delta_blur) +'px '+ (1 + $OFF_square_delta_spread) +'px '+ $color_shadow_box_inset_switch_type_button_dark

                            } else {
                                
                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (10 + $OFF_pill_and_rounded_delta_blur) +'px '+ (1 + $OFF_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_switch_type_button_dark
                            }

                        } else { // ON

                            if($swt_or_btn_or_a_is_square) {

                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (4 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_square

                            } else {

                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (4 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_no_square
                            }
                        }

                    } else if ($swt_or_btn_or_a.nodeName === 'BUTTON') { // NORMAL (NO HOVER)

                        set_button_no_hover_box_shadow($swt_or_btn_or_a)
                    }
                }
            }

            // 'if' necessário para que um switch não fique com mais do que 1 evento de 
            //'click' caso esta função venha a ser executada novamente no mesmo switch:
            if(!$swt_or_btn_or_a.have_power_effect) {

                $swt_or_btn_or_a.have_power_effect = true

                if($swt_or_btn_or_a.classList.contains('switch')) {

                    $swt_or_btn_or_a.addEventListener('click', function() {

                        update_button_boxShadow($swt_or_btn_or_a)
                    })
                }
            }

            // 'if' necessário para que um <button> não fique com mais do que 1 evento de 'mouseenter' 
            // e de 'mouseleave' caso esta função venha a ser executada novamente no mesmo <button>:
            if(!$swt_or_btn_or_a.have_hover_effect) { 

                $swt_or_btn_or_a.have_hover_effect = true

                if($swt_or_btn_or_a.nodeName === 'BUTTON') {

                    $swt_or_btn_or_a.addEventListener('mouseenter', function() { // HOVER EFFECT

                        if(!$swt_or_btn_or_a.classList.contains('disabled')) { // ENABLED 

                            // 'if' necessário para que caso o botão mude para o tipo 'image', não apareça o efeito de hover nele:
                            if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) {

                                $swt_or_btn_or_a.style.background = $bg_element_type_button_clear_blue

                                if($swt_or_btn_or_a_is_square) {

                                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (5 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_square

                                } else {

                                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (5 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_no_square
                                }
                            }
                        }    
                    })

                    $swt_or_btn_or_a.addEventListener('mouseleave', function() { // HOVER LEAVE EFFECT (Estado normal)

                        if(!$swt_or_btn_or_a.classList.contains('disabled')) { // ENABLED

                            // 'if' necessário para que caso o botão mude para o tipo 'image', não apareça o efeito de hover nele:
                            if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) {

                                $swt_or_btn_or_a.style.background = ''

                                set_button_no_hover_box_shadow($swt_or_btn_or_a)
                            }
                        }    
                    })
                }
            }

            function set_button_no_hover_box_shadow($swt_or_btn_or_a) {

                if($swt_or_btn_or_a_is_square) {

                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (6 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', 0px 0px 0px 1px hsl(195, 100%, 77%)'

                } else { 

                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (6 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', 0px 0px 0px 1px hsl(195, 100%, 77%)'
                }
            }
            */
        }
    })
}

switches_buttons_and_anchors__type_button(document.querySelectorAll('.switch.button_full, .switch.button_text, .switch.button_icon, button.button_full, button.button_text, button.button_icon, a.button_full, a.button_text, a.button_icon'))

/*  
────────────────────────────
TODO:    > Switches, Buttons, And Anchors All Type Image
──────────────────────────── */

function switches_buttons_and_anchors__type_image($switches_or_buttons_or_anchors) {

    $switches_or_buttons_or_anchors.forEach(function ($swt_or_btn_or_a) {

        if($swt_or_btn_or_a.classList.contains('image')) {

            var $piece_icon = $swt_or_btn_or_a.querySelector(':scope .piece_icon')
            var $piece_icon_width = Number(getComputedStyle($piece_icon).getPropertyValue('width').slice(0,-2)) 
            var $piece_icon_height = Number(getComputedStyle($piece_icon).getPropertyValue('height').slice(0,-2)) 
            var $piece_icon_area = $piece_icon_width * $piece_icon_height

            var $piece_icon_min_size = 48

            var $piece_text = $swt_or_btn_or_a.querySelector(':scope .piece_text')

            if ($piece_text !== null) {  

                // var $piece_text_width = Number(getComputedStyle($piece_text).getPropertyValue('width').slice(0,-2)) 
                var $piece_text_height = Number(getComputedStyle($piece_text).getPropertyValue('height').slice(0,-2)) 
            }

            var $piece_text_height_of_1_line = 35.84
            var $piece_text_height_of_2_lines = 57.69

            /*
            // --------- Arredondar os ícones --------- 
            
            $piece_icon.style.borderRadius = 1/4 * Math.min($piece_icon_width, $piece_icon_height) +'px' 
            */

            // ---------- Propriedade top da etiqueta de hover ---------- 

            if ($piece_text !== null) { 

                $piece_text.style.display = 'none' // Esta propriedade foi aplicada aqui para que o JS consiga pegar o valor '$piece_text_height' antes do elemento '$piece_text' ser ocultado.

                if (!$swt_or_btn_or_a.classList.contains('disabled')) {

                    var $y0 = 45 + Math.max(0, $piece_text_height - $piece_text_height_of_1_line)
                    var $y_offset = Math.min(15, 0.00028 * ($piece_icon_area - ($piece_icon_min_size * $piece_icon_min_size)))

                    $piece_text.style.top = -1 * ($y0 + $y_offset) + 'px'
                }
            }

            /*  
            // ---------- Padding da etiqueta de hover ---------- 

            if ($piece_text !== null) {

                if ($piece_text_height > Math.ceil($piece_text_height_of_2_lines)) { // Altura para 3+ linhas.
                    
                    $piece_text.style.paddingTop = '10px'  
                    $piece_text.style.paddingLeft = '11px'
                    $piece_text.style.paddingRight = '11px'

                } else {

                    $piece_text.style.paddingLeft = '9px'
                    $piece_text.style.paddingRight = '9px'
                } 
            }
            */
        }
    })
}

switches_buttons_and_anchors__type_image(document.querySelectorAll('.switch.image, button.image, a.image'))

/*  
────────────────────────────
TODO:    > Update Switches And Buttons
──────────────────────────── */

function update_switches_buttons_and_anchors($switches_or_buttons_or_anchors, type_number) {

    $switches_or_buttons_or_anchors.forEach(function ($swt_or_btn_or_a) {

        // --------- Desfazer alterações dos tipos --------- 

        var $piece_icon = $swt_or_btn_or_a.querySelector(':scope .piece_icon')
        var $piece_text = $swt_or_btn_or_a.querySelector(':scope .piece_text')
        var $shine = $swt_or_btn_or_a.querySelector(':scope .button_shine_top') 

        $swt_or_btn_or_a.style.width = '' 
        $swt_or_btn_or_a.style.height = ''
        $swt_or_btn_or_a.style.padding = ''
        $swt_or_btn_or_a.style.borderRadius = ''
        $swt_or_btn_or_a.style.boxShadow = ''

        if ($piece_icon !== null) {  

            $piece_icon.style.borderRadius = ''
            $piece_icon.style.margin = ''
        }

        if ($piece_text !== null) {  

            $piece_text.style.display = 'inline'
            $piece_text.style.padding = ''
            $piece_text.style.margin = ''
            $piece_text.style.top = ''
        }

        if ($shine !== null) { // <- Verifica se o brilho existe.

            $swt_or_btn_or_a.querySelector(':scope .button_shine_top').remove()

            /* $shine.style.width = ''; $shine.style.borderRadius = ''; $shine.style.left = '' */
        }
        
        // --------- Mudar tipo --------- 

        if ((1 <= type_number && type_number <= 17 && $swt_or_btn_or_a.classList.contains('switch')) || (1 <= type_number && type_number <= 14)) { 

            $swt_or_btn_or_a.classList.remove('button_full')
            $swt_or_btn_or_a.classList.remove('button_text')
            $swt_or_btn_or_a.classList.remove('button_icon')
            $swt_or_btn_or_a.classList.remove('text_below')
            $swt_or_btn_or_a.classList.remove('pill')
            $swt_or_btn_or_a.classList.remove('rounded')
            $swt_or_btn_or_a.classList.remove('image')
            $swt_or_btn_or_a.classList.remove('key_full')
            $swt_or_btn_or_a.classList.remove('key_text')
            $swt_or_btn_or_a.classList.remove('inverted')
            
            if (type_number == 01) { $swt_or_btn_or_a.classList.add('button_full') }
            if (type_number == 02) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 03) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 04) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('pill'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 05) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 06) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('rounded'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 07) { $swt_or_btn_or_a.classList.add('button_text')  }
            if (type_number == 08) { $swt_or_btn_or_a.classList.add('button_text'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 09) { $swt_or_btn_or_a.classList.add('button_text'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 10) { $swt_or_btn_or_a.classList.add('button_icon')  }
            if (type_number == 11) { $swt_or_btn_or_a.classList.add('button_icon'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 12) { $swt_or_btn_or_a.classList.add('button_icon'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 13) { $swt_or_btn_or_a.classList.add('image')  }
            if (type_number == 14) { $swt_or_btn_or_a.classList.add('image'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 15) { $swt_or_btn_or_a.classList.add('key_full')  }
            if (type_number == 16) { $swt_or_btn_or_a.classList.add('key_text')  }
            if (type_number == 17) { $swt_or_btn_or_a.classList.add('key_text'); $swt_or_btn_or_a.classList.add('inverted') }
        }
    })

    // --------- Atualizar switches e buttons --------- 
    
    switches_buttons_and_anchors__type_button($switches_or_buttons_or_anchors)
    switches_buttons_and_anchors__type_image($switches_or_buttons_or_anchors)
}

/*
function update_switches_buttons_and_anchors_resize() {  

    update_switches_buttons_and_anchors(document.querySelectorAll('.switch.button_full, .switch.button_text, .switch.button_icon, button.button_full, button.button_text, button.button_icon, a.button_full, a.button_text, a.button_icon, .switch.image, button.image, a.image'))
}

window.addEventListener('resize', update_switches_buttons_and_anchors_resize)
*/
 
/*  
──────────────────────────────────────────────────────
TODO: Choices 
────────────────────────────────────────────────────── */

var choice_anchorClicked = null
var choice_anchorClickedBefore = null /* <- Variável necessária para 
salvar o valor de 'choice_anchorClicked' antes de se clicar em uma opção 
desabilitada, já que ao fazer isso, ela será alterada, e depois retorná-la ao seu 
valor anterior. Isso é necessário, pois 'choice_anchorClicked' determina a 
opção que aparece em um 'dropdown' quando ele está fechado.
*/
 
var dropdown_open = false

function choice(arg) {

    var dropdown_liClicked = null

    if(arg.classList.contains('dropdown')) {

        if(arg.classList.contains('dropdown_open')) {

                for(var i = 0; i < arg.children.length; i++) { 

                    if(arg.children[i].children[0] === choice_anchorClicked) {

                        dropdown_liClicked = arg.children[i]
                        break
                    }
                }

            if(choice_anchorClicked !== 'disabled') {

                for(var i = 0; i < arg.children.length; i++) { 

                    arg.children[i].style = 'display: none'
                }

                if(dropdown_liClicked !==  null) {

                    dropdown_liClicked.style = 'display: inline-flex'

                } else {

                    arg.children[0].style = 'display: inline-flex'
                }



                var $shine = document.createElement('div') 

                $shine.classList.add('choice_shine_top')
            
                arg.insertAdjacentElement('afterbegin', $shine)
            }

        } else {

            if(arg.classList.contains('disabled')) { 
                
                return 
            }

            

            var $shine = arg.querySelector(':scope .choice_shine_top') 

            if ($shine !== null) {

                $shine.remove()
            }



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
            arg.classList.toggle('dropdown_open')

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

/* Espaço no final ('li' invisível) do menu dos dropdowns: */

var allChoicesD = document.querySelectorAll('.dropdown')

for(var i = 0; i < allChoicesD.length; i++) { 

var e = document.createElement("li")

    allChoicesD[i].appendChild(e)
}

/*  
────────────────────────────
TODO:    > Shine
──────────────────────────── */

document.querySelectorAll('.choice').forEach(function ($choice) {

    if($choice.classList.contains('horizontal')) {

        var $shine = document.createElement('div') 

        $shine.classList.add('choice_shine_top')

        $choice.querySelector(':scope li:nth-of-type(1)').insertAdjacentElement('afterbegin', $shine)

        var $choice_parts = $choice.querySelectorAll(':scope a') 
        
        $choice_parts.forEach(function (part) {

            var $shine = document.createElement('div') 

            $shine.classList.add('choice_shine_top')
        
            part.insertAdjacentElement('afterbegin', $shine)
        })
    }

    if($choice.classList.contains('vertical')) {

        var $shine = document.createElement('div') 

        $shine.classList.add('choice_shine_top')

        $choice.querySelector(':scope li:nth-of-type(1)').insertAdjacentElement('afterbegin', $shine) 
    }

    if($choice.classList.contains('dropdown')) {

        var $shine = document.createElement('div') 

        $shine.classList.add('choice_shine_top')

        $choice.insertAdjacentElement('afterbegin', $shine)
    }
})

/*  
──────────────────────────────────────────────────────
TODO: Lightbox
────────────────────────────────────────────────────── */
{

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

    lightbox_animation_show()
}

function lightbox2(txt, img, width) { 

    document.querySelector('.lightbox_img').classList.add('lightbox_img_rounded')

    lightbox(txt, img, width)
}

//------ Lightbox - Show Animation ------//

{ 
    var lightbox_ = document.querySelector('.lightbox')
    var dy = 130 // Última alteração: -20
    var t = 0.25 // Última alteração: -0.05

    function lightbox_animation_show() {

        animation(t) // Unidade: s

        function animation(duration) {

            var  timestamp_firstRepetition
                
            function step(timestamp) {
                
                if (timestamp_firstRepetition === undefined) { timestamp_firstRepetition = timestamp  }
                
                var elapsed = timestamp - timestamp_firstRepetition

                var elapsed_seconds = elapsed/1000 

                if (isNaN(duration)) { var $t = elapsed_seconds } else { var $t = Math.min(elapsed_seconds, duration) }
                
                //---------------------------------------------------------------------------------------
                    
                    lightbox_.style.opacity = ($t/t)
                    lightbox_.style.transform = 'translateY(' + ((dy * ((1/t) * $t)) - dy) + 'px)'
            
                //---------------------------------------------------------------------------------------

                if (isNaN(duration)) { window.requestAnimationFrame(step) } else { if ($t < duration) { window.requestAnimationFrame(step) } }
            } 

            window.requestAnimationFrame(step)
        }
    }
}

function lightbox_close(arg) {

    // As variáveis desta animação de fechar o lightbox estão na animação de abrir.

    animation(t) // Unidade: s

    function animation(duration) {

        var  timestamp_firstRepetition
            
        function step(timestamp) {
            
            if (timestamp_firstRepetition === undefined) { timestamp_firstRepetition = timestamp  }
            
            var elapsed = timestamp - timestamp_firstRepetition

            var elapsed_seconds = elapsed/1000 

            if (isNaN(duration)) { var $t = elapsed_seconds } else { var $t = Math.min(elapsed_seconds, duration) }
            
            //---------------------------------------------------------------------------------------
            
            lightbox_.style.opacity = (1 - ($t/t)) 
            lightbox_.style.transform = 'translateY(' + (($t/t) * dy) + 'px)'
    
            //---------------------------------------------------------------------------------------

            if (isNaN(duration)) { window.requestAnimationFrame(step) } else { if ($t < duration) { window.requestAnimationFrame(step) } }
        
            // Nota: Tive que colocar este 'if' dentro da lógica da animação, pois o JS não espera a animação terminar para executar os códigos posteriores à animação.
            if ($t === duration) { 

                document.querySelector('html').classList.remove('overflow_hidden')
                document.querySelector('.lightbox_img').classList.remove('lightbox_img_rounded')
                arg.parentNode.parentNode.style = 'display: none';  
            }
        }

        window.requestAnimationFrame(step)
    }
    
}

} 


/*  
──────────────────────────────────────────────────────
TODO: Button Hide
────────────────────────────────────────────────────── */

var all_button_hide = document.querySelectorAll('.button_hide')

for(var i = 0; i < all_button_hide.length; i++) {

    all_button_hide[i].setAttribute('onclick', 'button_hide(this)')
}

function button_hide(arg) {

    localStorage.setItem(arg.parentNode.id, arg.parentNode.id)
    
    arg.parentNode.style = 'display: none'
} 

//Show alll no clicked:

for(var i = 0; i < all_button_hide.length; i++) {

    if(all_button_hide[i].parentNode.id !== localStorage.getItem(all_button_hide[i].parentNode.id)) {

        all_button_hide[i].parentNode.style = 'display: block' 
    }
} 

/*  
──────────────────────────────────────────────────────
TODO: Is-A-Number Function
────────────────────────────────────────────────────── */

function isAN(x) {

    if(typeof x === 'bigint') {

        return true
    }

    if(typeof x === 'string') {

        while(x[0] === ' ') {

            x = x.slice(1)
        }

        if(x === '') {
            
            return false
        }
    }

    if(typeof x === 'boolean' || x instanceof Array || x === null) {

        return false
    }

    return !isNaN(x)
}

/*  
──────────────────────────────────────────────────────
TODO: Image Filename as ALT Attribute Value
────────────────────────────────────────────────────── */

function imgsNamesAsAlts(imgs) {

    for (i = 0; i < imgs.length; i++) {
        
        var img_src = imgs[i].src

        var index_bar = img_src.indexOf("/")

        while(index_bar !== -1) {

            img_src = img_src.slice(index_bar + 1)

            index_bar = img_src.indexOf("/")
        }

        var index_dot = img_src.indexOf(".")

        img_src = img_src.slice(0, index_dot)

        imgs[i].alt = img_src
    }
}

/*  
──────────────────────────────────────────────────────
TODO: Get Image Filename
────────────────────────────────────────────────────── */

function getImgName(img) {

    var img_src = img.src

    var index_bar = img_src.indexOf("/")

    while(index_bar !== -1) {

        img_src = img_src.slice(index_bar + 1)

        index_bar = img_src.indexOf("/")
    }

    var index_dot = img_src.indexOf(".")

    img_src = img_src.slice(0, index_dot)

    return img_src   
}




















/*  
// Gambiarra para poder alterar o estilo de um pseudo elemento (pois 
// não tem como selecionar um pseudo elemento via Java script):

var stylesheet = document.styleSheets[2]

var rule

for(i = 0; i < stylesheet.cssRules.length; i++) {

    if(stylesheet.cssRules[i].selectorText === '.switch.button_full.pill .piece_label::after') {
        
        rule = stylesheet.cssRules[i]
    }
}

var $shine_x = '10px'

rule.style.setProperty('left', $shine_x)
rule.style.setProperty('width', 'calc(100% - 2 * '+ $shine_x +')')
*/