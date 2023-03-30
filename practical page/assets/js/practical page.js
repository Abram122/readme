// X O game 
let turn = "x"
let title = document.querySelector('.title')
let squares = []
let player1 =document.getElementById('player1')
let player2 =document.getElementById('player2')
let divs =document.getElementsByClassName('.square')
let item1=document.getElementById('item1')
let item2=document.getElementById('item2')
let item3=document.getElementById('item3')
let item4=document.getElementById('item4')
let item5=document.getElementById('item5')
let item6=document.getElementById('item6')
let item7=document.getElementById('item7')
let item8=document.getElementById('item8')
let item9=document.getElementById('item9')
let x=0
let y = 0

function increase(){
    if(title.innerHTML[0] == 'O'){
        player1.innerHTML= ++x
    }
    else{
        player2.innerHTML=++y
    }
}

function winner(n1, n2, n3) {
    document.getElementById(`item` + n2).style.background = "green"
    document.getElementById(`item` + n1).style.background = "green"
    document.getElementById(`item` + n3).style.background = "green"
    title.innerHTML = `${squares[n1]} is the winner`
    setTimeout(function () {
        item1.innerHTML=''
        item2.innerHTML=''
        item3.innerHTML=''
        item4.innerHTML=''
        item5.innerHTML=''
        item6.innerHTML=''
        item7.innerHTML=''
        item8.innerHTML=''
        item9.innerHTML=''
        item1.style.background="blueviolet"
        item2.style.background="blueviolet"
        item3.style.background="blueviolet"
        item4.style.background="blueviolet"
        item5.style.background="blueviolet"
        item6.style.background="blueviolet"
        item7.style.background="blueviolet"
        item8.style.background="blueviolet"
        item9.style.background="blueviolet"
        title.innerHTML='X O Game'
        

    }, 2000)


}

function clear(){
    title.innerHTML="draw match"
    setInterval(function () {
        title.innerHTML += '.'
    }, 500)
    setTimeout(function () {
        location.reload()
    }, 2000)

}
function final() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML
    }
    // o winneX
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != '') {
        winner(1, 2, 3)
        increase()
    }
    else if (squares[4] == squares[5] && squares[6] == squares[4] && squares[4] != '') {
        winner(4, 5, 6)
        increase()

    }
    else if (squares[7] == squares[8] && squares[9] == squares[7] && squares[8] != '') {
        winner(7, 8, 9)
        increase()

    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        winner(1, 5, 9)
        increase()

    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        winner(3, 5, 7)
        increase()

    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != '') {
        winner(3, 6, 9)
        increase()

    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
        winner(1, 4, 7)
        increase()

    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        winner(2, 5, 8)
        increase()

    } 
    else if(squares[1] != '' && squares[2] !='' && squares[3]!=''&& squares[4]!='' && squares[5] !='' && squares[6]!='' && squares[7]!=''&&squares[8]!=''&&squares[9]!=''){
        clear()
    }
}
function game(id) {
    let tag = document.getElementById(id)
    if (turn == "x" && tag.innerHTML == '') {
        tag.innerHTML = "X"
        turn = "o"
        title.innerHTML = "O"
    }
    else if (turn == "o" && tag.innerHTML == '') {
        tag.innerHTML = "O"
        turn = "x"
        title.innerHTML = "X"
    }
    final()
}
// X O game 

// xo code
let xohtml = document.getElementById('xohtml')
let xocss = document.getElementById('xocss')
let xojs = document.getElementById('xojs')
let htmltext = document.getElementById('htmltext')
let csstext = document.getElementById('csstext')
let jstext = document.getElementById('jstext')

xohtml.onclick = function(){
htmltext.style.display='block'
csstext.style.display='none'
jstext.style.display='none'
}
xocss.onclick = function(){
    csstext.style.display='block'
    htmltext.style.display='none'
    jstext.style.display='none'
}
xojs.onclick = function(){
    jstext.style.display='block'
    htmltext.style.display='none'
    csstext.style.display='none'
}    
// xo code




// calculator
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
}


let xohtml1 = document.getElementById('xohtml1')
let xocss1 = document.getElementById('xocss1')
let xojs1 = document.getElementById('xojs1')
let htmltext1 = document.getElementById('htmltext1')
let csstext1 = document.getElementById('csstext1')
let jstext1 = document.getElementById('jstext1')

xohtml1.onclick = function(){
htmltext1.style.display='block'
csstext1.style.display='none'
jstext1.style.display='none'
}
xocss1.onclick = function(){
    csstext1.style.display='block'
    htmltext1.style.display='none'
    jstext1.style.display='none'
}
xojs1.onclick = function(){
    jstext1.style.display='block'
    htmltext1.style.display='none'
    csstext1.style.display='none'
}  