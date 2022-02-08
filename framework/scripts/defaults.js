/* 
──────────────────────────────────────────────────────
gmes-defaults.js
────────────────────────────────────────────────────── */

/*  
──────────────────────────────────────────────────────
TODO: Global Variables
────────────────────────────────────────────────────── */

var $color_theme = 'DeepSkyBlue' // VÍNCULO: Váriável SCSS

/*  
──────────────────────────────────────────────────────
TODO: Switches (And Buttons)
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
TODO:    > Switches Type Button And Buttons Type Button
──────────────────────────── */

var $color_shadow_box_inset_switch_button_dark = 'hsla(0, 0%, 0%, 0.33)' // VÍNCULO: Váriável SCSS
var $color_shadow_box_inset_switch_button_clear = 'white' // VÍNCULO: Váriável SCSS

function switches_type_button_and_buttons_type_button(elements) {

    elements.forEach(function ($switch) {

        if($switch.classList.contains('button') || $switch.classList.contains('button_text') || $switch.classList.contains('button_icon')) {

            // Bug Fix - O box-shadow interno dos elementos com a classe 'pill' ou 'rounded' não renderizam corretamente no Safari para desktop:

            var is_an_apple_desktop_browser = (navigator.vendor.indexOf('Apple') !== -1) && (navigator.userAgent.indexOf('Chrome') === -1)
            
            if (($switch.classList.contains('pill') || $switch.classList.contains('rounded')) && is_an_apple_desktop_browser) { 
            
                $switch.classList.remove('pill')
                $switch.classList.remove('rounded')
            }

            // Bug Fix - Os elementos com as classes 'button_icon' e 'rounded' ficam muito grandes no mobile:

            if ($switch.classList.contains('button_icon') && $switch.classList.contains('rounded') && innerWidth <= 1366 && innerHeight <= 1366) { 

                $switch.classList.remove('rounded')
                $switch.classList.add('pill')
            }



            var switch_is_square = !($switch.classList.contains('pill') || $switch.classList.contains('rounded'))

            // Obs.: As variáveis 'switch_width' e 'switch_height' não foram colocadas aqui pois 
            // a largura e altura dos botões variam desde o do início até o final desta função.

            var switch_icon_size_default = 32

            var switch_icon = $switch.querySelector(':scope .switch_icon')

            var switch_icon_width = Number(getComputedStyle(switch_icon).getPropertyValue('width').slice(0,-2)) 
            var switch_icon_height = Number(getComputedStyle(switch_icon).getPropertyValue('height').slice(0,-2)) 
            var switch_icon_area = switch_icon_width * switch_icon_height

            var switch_text = $switch.querySelector(':scope .switch_text')
            var switch_text_width = Number(getComputedStyle(switch_text).getPropertyValue('width').slice(0,-2)) 
            var switch_text_height = Number(getComputedStyle(switch_text).getPropertyValue('height').slice(0,-2)) 

            // Variável  smallest_initial_dimension:
            if($switch.classList.contains('button') && !$switch.classList.contains('rounded') && !$switch.classList.contains('text_below')) { var smallest_initial_dimension = 54 }
            if($switch.classList.contains('button') && !$switch.classList.contains('rounded') && $switch.classList.contains('text_below')) { var smallest_initial_dimension = 92.69 }
            if($switch.classList.contains('button_text') && !$switch.classList.contains('rounded')) { var smallest_initial_dimension = 41.84 }
            if($switch.classList.contains('button_icon') && !($switch.classList.contains('pill') || $switch.classList.contains('rounded'))) { var smallest_initial_dimension = 50 }
            if($switch.classList.contains('button_icon') && $switch.classList.contains('pill') && !$switch.classList.contains('rounded')) { var smallest_initial_dimension = 56 }
            if($switch.classList.contains('rounded')) { var smallest_initial_dimension = 56 }

            var switch_button_icon_min_size = 50
            var switch_text_height_of_1_line = 35.84
            var switch_text_height_of_2_lines = 57.69

            // --------- Brilho ---------

            var shine = $switch.querySelector(':scope .switch_shine') 

            if (shine === null) {

                var shine = document.createElement('div')

                shine.classList.add('switch_shine')
            
                $switch.querySelector(':scope .switch_icon').insertAdjacentElement('beforebegin', shine)
            }

            // --------- Definir o raio das bordas dos ícones dos botões ---------

            switch_icon.style.borderRadius = 1/4 * Math.min(switch_icon_width, switch_icon_height) +'px' 

            // --------- Definir o preenchimento dos botões em forma de pílula com ícone e texto, e somente texto --------- 

            var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 

            if($switch.classList.contains('pill')) {

                if($switch.classList.contains('button')) { 

                    var switch_height_of_1_row = 54

                    if (switch_height > switch_height_of_1_row) {

                        var padding_top_and_bottom = 11 + 0.09 * (switch_height - switch_height_of_1_row)  

                        $switch.style.paddingTop = padding_top_and_bottom +'px' 
                        $switch.style.paddingBottom = padding_top_and_bottom +'px'  
                        $switch.style.paddingRight = 20 + 0.17 * (switch_height - switch_height_of_1_row) +'px'     

                    } else {

                        $switch.style.paddingRight = '20px' 
                    }

                    if(!$switch.classList.contains('text_below')) {

                        $switch.style.paddingLeft = 18 + Math.max(0, 0.29 * (switch_icon_height - switch_icon_size_default)) +'px'  
                    }
                }

                if($switch.classList.contains('button_text')) {

                    var switch_height_of_1_row = 42

                    if (switch_height > switch_height_of_1_row) {
                        
                        var padding_top_and_bottom = 10 + 0.1 * (switch_height - switch_height_of_1_row)  
                        var padding_left_and_right = 13 + 0.15 * (switch_height - switch_height_of_1_row)  

                        $switch.style.padding = padding_top_and_bottom +'px '+ padding_left_and_right +'px'  

                    } else {

                        $switch.style.paddingLeft = '13px' 
                        $switch.style.paddingRight = '13px' 
                    } 
                }
            }

            // --------- Definir o preenchimento dos botões arredondados com ícone e texto sem a classe 'text_below' --------- 

            if($switch.classList.contains('button') && $switch.classList.contains('rounded') && !$switch.classList.contains('text_below')) {

                if (switch_icon_width === switch_icon_height) {
                    
                    $switch.style.paddingLeft = 18 + Math.max(0, 0.06 * (switch_icon_height - switch_icon_size_default)) +'px'

                } else {

                    $switch.style.paddingLeft = 18 + Math.max(0, 0.22 * (switch_icon_height - switch_icon_size_default)) +'px'
                }
            }

            // --------- Definir o preenchimento dos botões de ícone --------- zzzz

            if($switch.classList.contains('button_icon')) {
            
                if(switch_is_square) {

                    $switch.style.padding = (9/32) * Math.min(switch_icon_width, switch_icon_height) +'px'
                } 
                
                if($switch.classList.contains('pill')) {

                    if(switch_icon_width === switch_icon_height) {

                        if(switch_icon_width <= 32 || switch_icon_height <= 32) {

                            $switch.style.padding = (12/32) * Math.min(switch_icon_width, switch_icon_height) +'px'

                        } else {

                            $switch.style.padding = (11/32) * Math.min(switch_icon_width, switch_icon_height) +'px'
                        }

                    } else if (switch_icon_width > switch_icon_height) {

                        $switch.style.padding = (10/32) * switch_icon_height +'px '+ (13/32) * switch_icon_height +'px'

                    }  else if (switch_icon_width < switch_icon_height) {

                        $switch.style.padding = (13/32) * switch_icon_width +'px '+ (10/32) * switch_icon_width +'px'
                    }
                }
                /**/
                if($switch.classList.contains('rounded')) {

                    if(switch_icon_width <= 32 || switch_icon_height <= 32) {

                        $switch.style.padding = (12/32) * Math.min(switch_icon_width, switch_icon_height) +'px'

                    } else {

                        $switch.style.padding = (11/32) * Math.min(switch_icon_width, switch_icon_height) +'px'
                    }
                }
            }

            // ---------- Definir o raio das bordas dos botões normais (quadrados) e de seus brilhos ---------- 

            if(switch_is_square) {

                var switch_width = Number(getComputedStyle($switch).getPropertyValue('width').slice(0,-2)) 
                var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 
                
                $switch.style.borderRadius = 1/4 * Math.min(switch_width, switch_height) +'px' 

                var shine_width = Number(getComputedStyle(shine).getPropertyValue('width').slice(0,-2)) 
                var shine_height = Number(getComputedStyle(shine).getPropertyValue('height').slice(0,-2)) 

                shine.style.borderRadius = 1/4 * Math.min(shine_width, 2 * shine_height) - 2 +'px' 
            } 

            // ---------- Definir a posição horizontal e a largura do brilho dos botões com a classe 'pill' ---------- 

            if($switch.classList.contains('pill')) {

                var switch_width = Number(getComputedStyle($switch).getPropertyValue('width').slice(0,-2)) 
                var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 

                if(switch_width >= switch_height) {

                    var shine_x = (12/54) * (switch_height) +'px'  

                } else {

                    var a = (12/54) * (switch_width) - (0.2 * (switch_height - switch_width))
                    var b = 0.094 * switch_width

                    var shine_x = Math.max(a, b) +'px'
                } 
        
                shine.style.left = shine_x 
                shine.style.width = 'calc(100% - 2 * '+ shine_x +')'
            }

            // ---------- Arredondar botões com a classe 'rounded' ---------- zzzz

            if($switch.classList.contains('rounded') && !$switch.classList.contains('text_below')) {

                var switch_width = Number(getComputedStyle($switch).getPropertyValue('width').slice(0,-2)) 
                var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 

                var switch_width_ceil = Math.ceil(switch_width)
                var switch_height_ceil = Math.ceil(switch_height)

                if(switch_width_ceil > switch_height_ceil) { 
            
                    $switch.style.width = switch_width_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                    $switch.style.height = switch_width_ceil + 'px'
            
                } else if (switch_width_ceil < switch_height_ceil) { 
            
                    $switch.style.width = switch_height_ceil + 'px'
                    $switch.style.height = switch_height_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                }

                /* // Maneira alternativa:

                if(switch_width >= switch_height) { 

                    var padding_top_current =  Number(getComputedStyle($switch).getPropertyValue('padding-top').slice(0,-2))
                    var padding_bottom_current =  Number(getComputedStyle($switch).getPropertyValue('padding-bottom').slice(0,-2))
            
                    $switch.style.paddingTop = padding_top_current + 1/2 * (switch_width - switch_height) + 'px'
                    $switch.style.paddingBottom = padding_bottom_current + 1/2 * (switch_width - switch_height) + 'px'
            
                } else {  
            
                    $switch.style.width = switch_height_ceil + 'px'
                    $switch.style.height = switch_height_ceil + 'px'
                }
                */
            }

            // ---------- Posição e preenchimento da etiqueta de hover dos botões de ícone ---------- 

            if($switch.classList.contains('button_icon')) {

                var switch_width = Number(getComputedStyle($switch).getPropertyValue('width').slice(0,-2)) 
                var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 

                switch_text.style.display = 'none' // Esta propriedade foi aplicada aqui para que o JS consiga pegar o valor 'switch_text_width' antes do elemento 'switch_text' ser ocultado.

                if (!$switch.classList.contains('disabled')) {

                    if (switch_height >= switch_button_icon_min_size) {

                        var y0 = 50 + Math.max(0, switch_text_height - switch_text_height_of_1_line) 
                        var y_offset = Math.max(0, Math.min(15, 0.00028 * ((switch_width * switch_height) - (switch_button_icon_min_size * switch_button_icon_min_size))))

                        switch_text.style.top = -1 * (y0 + y_offset) + 'px'  
                    }
                }

                // Padding:

                if (switch_text_height > Math.ceil(switch_text_height_of_2_lines)) { // Altura para 3+ linhas.
                
                    switch_text.style.paddingTop = '10px'  
                    switch_text.style.paddingLeft = '11px'
                    switch_text.style.paddingRight = '11px'
            
                } else {
            
                    switch_text.style.paddingLeft = '9px'
                    switch_text.style.paddingRight = '9px'
                } 
            }

            // --------- Definir os estilos dos botões com ícone e texto com a classe 'text_below' --------- 

            if($switch.classList.contains('button') && $switch.classList.contains('text_below')) {
            
                if(switch_is_square) {

                    var icon_margin_T = Math.max(10, 0.00050 * switch_icon_area)
                    var icon_margin_B = Math.max(10, 0.00036 * switch_icon_area) 
                    var icon_margin_LR = Math.max(10, 0.00050 * switch_icon_area)
            
                    switch_icon.style.marginTop = icon_margin_T +'px '
                    switch_icon.style.marginBottom = icon_margin_B +'px '
                    switch_icon.style.marginLeft = icon_margin_LR +'px'  
                    switch_icon.style.marginRight = icon_margin_LR +'px'

                    $switch.style.paddingBottom = icon_margin_B +'px'
                } 

                if ($switch.classList.contains('pill')) { 

                    var icon_margin_T = Math.max(10, 0.00050 * switch_icon_area)
                    var icon_margin_B = Math.max(10, 0.00043 * switch_icon_area)  
                    var icon_margin_LR = Math.max(12, 0.0011 * switch_icon_area)
            
                    switch_icon.style.marginTop = icon_margin_T +'px'
                    switch_icon.style.marginBottom = icon_margin_B +'px'
                    switch_icon.style.marginLeft = icon_margin_LR +'px'  
                    switch_icon.style.marginRight = icon_margin_LR +'px'

                    $switch.style.paddingBottom = 1.14 * icon_margin_B +'px'

                    var text_margin_LR = 12

                    switch_text.style.marginLeft = text_margin_LR +'px'  
                    switch_text.style.marginRight = text_margin_LR +'px'   

                    $switch.style.paddingRight = Number(getComputedStyle($switch).getPropertyValue('padding-left').slice(0,-2))  +'px'
                }  

                if($switch.classList.contains('rounded')) {

                    var icon_margin_T = Math.max(20, 0.00073 * switch_icon_area)
                    var icon_margin_B = Math.max(10, 0.00036 * switch_icon_area) 
                    var icon_margin_LR = Math.max(10, 0.00050 * switch_icon_area)
            
                    switch_icon.style.marginTop = icon_margin_T +'px '
                    switch_icon.style.marginBottom = icon_margin_B +'px '
                    switch_icon.style.marginLeft = icon_margin_LR +'px'  
                    switch_icon.style.marginRight = icon_margin_LR +'px'

                    $switch.style.paddingBottom = icon_margin_B +'px'

                    var text_margin_LR = 12

                    switch_text.style.marginLeft = text_margin_LR +'px'  
                    switch_text.style.marginRight = text_margin_LR +'px'   
                }
            
                if($switch.classList.contains('rounded')) { // Arredondar botões com a classe 'rounded'.
            
                    var switch_width = Number(getComputedStyle($switch).getPropertyValue('width').slice(0,-2)) 
                    var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 
            
                    var switch_width_ceil = Math.ceil(switch_width)
                    var switch_height_ceil = Math.ceil(switch_height)
                
                    if(switch_width_ceil >= switch_height_ceil) { 
                
                        $switch.style.width = switch_width_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                        $switch.style.height = switch_width_ceil + 'px'
                
                    } else {
                
                        $switch.style.width = switch_height_ceil + 'px'
                        $switch.style.height = switch_height_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                    }
                }
            }

            // --------- Definir o box-shadow dos botões --------- 

            var switch_width = Number(getComputedStyle($switch).getPropertyValue('width').slice(0,-2)) 
            var switch_height = Number(getComputedStyle($switch).getPropertyValue('height').slice(0,-2)) 

            var constant_of_increase = (1/(136)) * (Math.max(   (Math.min(switch_width, switch_height) - smallest_initial_dimension), 0   ))

            var $OFF_square_delta_blur = 5 * constant_of_increase 
            var $OFF_square_delta_spread = 2 * constant_of_increase
            var $OFF_pill_and_rounded_delta_blur = 4 * constant_of_increase
            var $OFF_pill_and_rounded_delta_spread = 3 * constant_of_increase

            var $ON_square_delta_blur = 5 * constant_of_increase 
            var $ON_square_delta_spread = 5 * constant_of_increase 
            var $ON_pill_and_rounded_delta_blur = 7 * constant_of_increase 
            var $ON_pill_and_rounded_delta_spread = 5 * constant_of_increase 

            update_button_boxShadow($switch)

            function update_button_boxShadow() {

                if($switch.classList.contains('button') || $switch.classList.contains('button_text') || $switch.classList.contains('button_icon')) { 

                    if(!$switch.classList.contains('on')) { // OFF

                        if(switch_is_square) {

                            $switch.style.boxShadow = 'inset 0px 0px '+ (8 + $OFF_square_delta_blur) +'px '+ (1 + $OFF_square_delta_spread) +'px '+ $color_shadow_box_inset_switch_button_dark

                        } else {
                            
                            $switch.style.boxShadow = 'inset 0px 0px '+ (10 + $OFF_pill_and_rounded_delta_blur) +'px '+ (1 + $OFF_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_switch_button_dark
                        }

                    } else { // ON

                        if(switch_is_square) {

                            $switch.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (4 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_switch_button_clear +', 0px 0px 12px 0px '+ $color_theme

                        } else {

                            $switch.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (4 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_switch_button_clear +', 0px 0px 12px 0px '+ $color_theme
                        }
                    }
                }
            }

            if($switch.classList.contains('switch')) {

                $switch.addEventListener('click', function() {

                    update_button_boxShadow($switch)
                })
            }
        }
    })
}

switches_type_button_and_buttons_type_button(document.querySelectorAll('.switch.button, .switch.button_text, .switch.button_icon'))

/*  
────────────────────────────
TODO:    > Switches Type Image And Buttons Type Image
──────────────────────────── */

function switches_type_image_and_buttons_type_image(elements) {

    elements.forEach(function ($switch) {

        if($switch.classList.contains('image')) {

            var switch_icon = $switch.querySelector(':scope .switch_icon')
            var switch_icon_width = Number(getComputedStyle(switch_icon).getPropertyValue('width').slice(0,-2)) 
            var switch_icon_height = Number(getComputedStyle(switch_icon).getPropertyValue('height').slice(0,-2)) 
            var switch_icon_area = switch_icon_width * switch_icon_height

            var switch_icon_min_size = 48

            var switch_text = $switch.querySelector(':scope .switch_text')
            // var switch_text_width = Number(getComputedStyle(switch_text).getPropertyValue('width').slice(0,-2)) 
            var switch_text_height = Number(getComputedStyle(switch_text).getPropertyValue('height').slice(0,-2)) 

            var switch_text_height_of_1_line = 35.84
            var switch_text_height_of_2_lines = 57.69

            // --------- Arredondar botões (ícones) --------- 
            
            switch_icon.style.borderRadius = 1/4 * Math.min(switch_icon_width, switch_icon_height) +'px' 

            // ---------- Propriedade top da etiqueta de hover dos botões ---------- 

            switch_text.style.display = 'none' // Esta propriedade foi aplicada aqui para que o JS consiga pegar o valor 'switch_text_width' antes do elemento 'switch_text' ser ocultado.

            if (!$switch.classList.contains('disabled')) {

                var y0 = 49 + Math.max(0, switch_text_height - switch_text_height_of_1_line)
                var y_offset = Math.min(15, 0.00028 * (switch_icon_area - (switch_icon_min_size * switch_icon_min_size)))

                switch_text.style.top = -1 * (y0 + y_offset) + 'px'   
            }

            // ---------- Padding da etiqueta de hover dos botões ---------- 

            if (switch_text_height > Math.ceil(switch_text_height_of_2_lines)) { // Altura para 3+ linhas.
                
                switch_text.style.paddingTop = '10px'  
                switch_text.style.paddingLeft = '11px'
                switch_text.style.paddingRight = '11px'

            } else {

                switch_text.style.paddingLeft = '9px'
                switch_text.style.paddingRight = '9px'
            } 
        }
    })
}

switches_type_image_and_buttons_type_image(document.querySelectorAll('.switch.image'))

/*  
────────────────────────────
TODO:    > Update Switches And Buttons
──────────────────────────── */

function update_switches_and_buttons(elements, type_number) {

    elements.forEach(function ($switch) {

        // --------- Desfazer alterações dos tipos --------- 

        var switch_icon = $switch.querySelector(':scope .switch_icon')
        var switch_text = $switch.querySelector(':scope .switch_text')
        var shine = $switch.querySelector(':scope .switch_shine') 

        $switch.style.width = '' 
        $switch.style.height = ''
        $switch.style.padding = ''
        $switch.style.borderRadius = ''
        $switch.style.boxShadow = ''

        switch_icon.style.borderRadius = ''
        switch_icon.style.margin = ''

        switch_text.style.display = 'inline'
        switch_text.style.padding = ''
        switch_text.style.margin = ''
        switch_text.style.top = ''
         
        if (shine !== null) { // <- Verifica se o brilho existe.

            $switch.querySelector(':scope .switch_shine').remove()

            /* shine.style.width = ''; shine.style.borderRadius = ''; shine.style.left = '' */
        }
        
        // --------- Mudar tipo --------- 

        if ((1 <= type_number && type_number <= 17 && $switch.classList.contains('switch')) || (1 <= type_number && type_number <= 14)) {

            $switch.classList.remove('button')
            $switch.classList.remove('button_text')
            $switch.classList.remove('button_icon')
            $switch.classList.remove('text_below')
            $switch.classList.remove('pill')
            $switch.classList.remove('rounded')
            $switch.classList.remove('image')
            $switch.classList.remove('key')
            $switch.classList.remove('key_no_icon')
            $switch.classList.remove('inverted')
            
            if (type_number == 01) { $switch.classList.add('button') }
            if (type_number == 02) { $switch.classList.add('button'); $switch.classList.add('text_below') }
            if (type_number == 03) { $switch.classList.add('button'); $switch.classList.add('pill') }
            if (type_number == 04) { $switch.classList.add('button'); $switch.classList.add('pill'); $switch.classList.add('text_below') }
            if (type_number == 05) { $switch.classList.add('button'); $switch.classList.add('rounded') }
            if (type_number == 06) { $switch.classList.add('button'); $switch.classList.add('rounded'); $switch.classList.add('text_below') }
            if (type_number == 07) { $switch.classList.add('button_text')  }
            if (type_number == 08) { $switch.classList.add('button_text'); $switch.classList.add('pill') }
            if (type_number == 09) { $switch.classList.add('button_text'); $switch.classList.add('rounded') }
            if (type_number == 10) { $switch.classList.add('button_icon')  }
            if (type_number == 11) { $switch.classList.add('button_icon'); $switch.classList.add('pill') }
            if (type_number == 12) { $switch.classList.add('button_icon'); $switch.classList.add('rounded') }
            if (type_number == 13) { $switch.classList.add('image')  }
            if (type_number == 14) { $switch.classList.add('image'); $switch.classList.add('pill') }
            if (type_number == 15) { $switch.classList.add('key')  }
            if (type_number == 16) { $switch.classList.add('key_no_icon')  }
            if (type_number == 17) { $switch.classList.add('key_no_icon'); $switch.classList.add('inverted') }
        }
    })

    // --------- Atualizar switches e buttons --------- 
    
    switches_type_button_and_buttons_type_button(elements)
    switches_type_image_and_buttons_type_image(elements)
}
  
// window.addEventListener('resize', update_switches_and_buttons)

/*  
──────────────────────────────────────────────────────
TODO: Choices 
────────────────────────────────────────────────────── */

{ 

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

}

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

    if(stylesheet.cssRules[i].selectorText === '.switch.button.pill .switch_label::after') {
        
        rule = stylesheet.cssRules[i]
    }
}

var shine_x = '10px'

rule.style.setProperty('left', shine_x)
rule.style.setProperty('width', 'calc(100% - 2 * '+ shine_x +')')
*/