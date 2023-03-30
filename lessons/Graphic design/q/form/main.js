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

let divOne4=document.getElementById('one4')
let divTwo4=document.getElementById('two4')
let divThree4=document.getElementById('three4')
let ans1_4=document.getElementById('ans1-4')
let ans2_4 =document.getElementById('ans2-4')
let ans3_4=document.getElementById('ans3-4')

//q3 end
let divOne5=document.getElementById('one5')
let divTwo5=document.getElementById('two5')
let ans1_5 =document.getElementById('ans1-5')
let ans2_5=document.getElementById('ans2-5')
//q4 end

let divOne6 =document.getElementById('one6')
let divTwo6=document.getElementById('two6')
let divThree6 =document.getElementById('three6')
let ans1_6 = document.getElementById('ans1-6')
let ans2_6 =document.getElementById('ans2-6')
let ans3_6 =document.getElementById('ans3-6')
//q5 end

let btn1 = document.getElementById('btn1')
let correct = document.getElementById('x')
let uncorrect = document.getElementById('y')
let x = 0
let y = 0
let falg =false

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
    if (ans1.value == "true") {
        right(divOne)
    }
    else if (ans2.value == "false") {
        wrong(divTwo, divOne)
    }


    if (ans1_3.value == "1987") {
        right(divOne3)
    }
    else if (ans2_3.value == "1762") {
        wrong(divTwo3, divOne3)
    }
    else if (ans3_3.value == "1950") {
        wrong(divThree3, divOne3)
    }

    if(ans3_4.value == 'both'){
        right(divThree4)
    }
    else if(ans1_4.value == 'Thomas'){
        wrong(divOne4,divThree4)
    }
    else if(ans2_4.value == 'JohnKnoll'){
        wrong(divTwo4,divThree4)
    }

    if(ans1_5.value == 'False'){
        wrong(divOne5,divTwo5)
    }
    else if(ans2_5.value == 'True'){
        right(divTwo5)
    }

    if(ans1_6.value == 'David Carson'){
        wrong(divOne6,divThree6)
    }
    else if(ans2_6.value == 'Saul Bass'){
        wrong(divTwo6,divThree6)
    }
    else if(ans3_6.value == 'Alexandros Clufetos'){
        right(divThree6)
    }
}   
