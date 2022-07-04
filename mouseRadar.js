/*  
──────────────────────────────────────────────────────
mouseRadar.js
────────────────────────────────────────────────────── */ 

document.querySelector('script[src="mouseRadar.js"]').insertAdjacentHTML('afterend', `

    <style>

    /* Baixar fontes (deve ficar antes de qualquer CSS): */

    @font-face {
        font-family: "LED Display";
        src: url("LEDdisplay.ttf");
    }

    </style>
`) 

document.documentElement.insertAdjacentHTML('beforeend', `

    <div style = "
        position: fixed; 
        right: 0px; 
        bottom: 0px; 
        z-index: 1000000; 

        font-family: 'LED Display'; 
        font-size: 22px; 
        color: white; 
        line-height: 1.5; 
        
        box-sizing: border-box; 
        min-width: 39px;
        min-height: 47px;
        padding: 0px 9px 2px; 
        margin: 18px; 
        border: 6px ridge hsl(0, 0%, 83%); 
        border-radius: 10px; 
        
        background-color: rgb(34, 53, 220); background-color: hsl(0, 0%, 10%);
        filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.35)); ">

        <!-- Red light
        <span id="mouse_xy" style="filter: drop-shadow(0px 0px 3px red); text-shadow: 0px 0px 3px red;"> -->

        <!-- Blue light -->        
        <span id="mouse_xy" style="filter: drop-shadow(0px 0px 3px hsl(188, 100%, 50%)); text-shadow: 0px 0px 7px hsl(188, 100%, 50%), 0px 0px 7px hsla(188, 100%, 50%, 0.55);">
            <span id="mouse_x">x</span><span>, </span><span id="mouse_y">y</span>
        </span>
    </div>
`)

document.documentElement.addEventListener('mousemove', function(evt) {

    mouse_x.textContent = evt.pageX
    mouse_y.textContent = evt.pageY
})