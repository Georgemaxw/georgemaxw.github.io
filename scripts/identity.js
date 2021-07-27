 
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
