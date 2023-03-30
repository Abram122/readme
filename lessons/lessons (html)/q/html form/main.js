let divOne = document.getElementById('one')
let divTwo = document.getElementById('two')
let divThree = document.getElementById('three')
let ans1 = document.getElementById('ans1')
let ans2 = document.getElementById('ans2')
let ans3 = document.getElementById('ans3')
// q1 end 

let divOne3 = document.getElementById('one3')
let divTwo3 = document.getElementById('two3')
let divThree3 = document.getElementById('three3')
let ans1_3 = document.getElementById('ans1-3')
let ans2_3 = document.getElementById('ans2-3')
let ans3_3 = document.getElementById('ans3-3')
//q2 end

let divOne4 = document.getElementById('one4')
let divTwo4 = document.getElementById('two4')
let divThree4 = document.getElementById('three4')
let ans1_4 = document.getElementById('ans1-4')
let ans2_4 = document.getElementById('ans2-4')
let ans3_4 = document.getElementById('ans3-4')

//q3 end
let divOne5 = document.getElementById('one5')
let divTwo5 = document.getElementById('two5')
let divThree5=document.getElementById('three5')
let ans1_5 = document.getElementById('ans1-5')
let ans2_5 = document.getElementById('ans2-5')
let ans3_5=document.getElementById('ans3-5')
//q4 end

let divOne6 = document.getElementById('one6')
let divTwo6 = document.getElementById('two6')
let divThree6 = document.getElementById('three6')
let ans1_6 = document.getElementById('ans1-6')
let ans2_6 = document.getElementById('ans2-6')
let ans3_6 = document.getElementById('ans3-6')
//q5 end

let btn1 = document.getElementById('btn1')
let correct = document.getElementById('x')
let uncorrect = document.getElementById('y')
let x = 0
let y = 0
let falg = false


function right(one) {
    one.style.background = "green"
    one.innerHTML += `correct answer`
    correct.innerHTML = ++x
    btn1.onclick = function (e) {
        e.preventDefault()
    }
}

function wrong(one, two) {
    one.style.background = "red"
    one.innerHTML += 'uncorrect answer'
    two.style.background = "green"
    two.innerHTML +=  "correct answer"
    uncorrect.innerHTML = ++y
    btn1.onclick = function (e) {
        e.preventDefault()
    }
}





btn1.onclick = function (e) {

    // ----validation code


    // if (ans1.checked == false && ans2.checked == false && ans3.checked == false || ans1_3.checked == false && ans2_3.checked == false && ans3_3.checked == false || ans1_4.checked == false && ans2_4.checked == false && ans3_4.checked == false || ans1_5.checked == false && ans2_5.checked == false) {
    //     alert(`please enter the questions`)
    // }
    if (ans1.value == "analysis") {
        wrong(divOne, divTwo)
    }
    else if (ans2.value == "plan") {
        right(divTwo)
    }
    else if (ans3.value == 'describe') {
        wrong(divThree, divTwo)
    }


    if (ans1_3.value == "id") {
        wrong(divOne3, divTwo3)
    }
    else if (ans2_3.value == "class") {
        right(divTwo3)
    }
    else if (ans3_3.value == "src") {
wrong(divThree3,divTwo3)    
}

    if (ans3_4.value == 'Linear Gradient') {
        wrong(divThree4,divTwo4)
    }
    else if (ans1_4.value == 'Radial Gradient') {
        wrong(divOne4, divTwo4)
    }
    else if (ans2_4.value == 'Conic Gradient') {
        right(divTwo4)
    }

    if (ans1_5.value == 'user interface') {
        right(divOne5)
    }
    else if (ans2_5.value == 'user box') {
        wrong(divTwo5,divOne5)
    }
    else if(ans3_5.value == 'modal box'){
        wrong(divThree5,divOne5)
    }

    if (ans1_6.value == 'hr') {
        wrong(divOne6, divTwo6)
    }
    else if (ans2_6.value == 'br') {
        right(divTwo6)
    }
    else if (ans3_6.value == 'break') {
        wrong(divThree6,divTwo6)
    }
}   
