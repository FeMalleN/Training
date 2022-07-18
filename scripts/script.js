
let block=document.getElementsByClassName('block__container');

//displays
function display_set(i) {
    block[0].style.display=i
}

//directions
function direction_set(i) {
    block[0].style.flexDirection=i
}

function wrap_set(i) {
    block[0].style.flexWrap=i
}

//Alignments
function justifyContent_set(i) {
    block[0].style.justifyContent=i
}

function align_self(i) {
    let select=document.getElementById('selected_item')
    let elem=select.options[select.selectedIndex].value
    console.log(elem)
    document.getElementsByClassName(elem)[0].style.alignSelf=i
}

//Sizes and colors
function setGap(){
    let newGap=document.getElementsByClassName('newGap')[0].value
    if (checkNull(newGap)){
        block[0].style.gap=null
    }
    else{
    let select=document.getElementById('gap_type')
    let type=select.options[select.selectedIndex].label
    block[0].style.gap=newGap+type
    }
}
function setWidth(i,a){
    let newWidth=document.getElementsByClassName("newWidth")[a].value
    let elements= document.getElementsByClassName(i)
    let select=document.getElementById('width_type')
    if (checkNull(newWidth)){
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width=null
    }}
        else{
    let type=select.options[select.selectedIndex].label
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.width=newWidth+type
    }
}}
function setHeight(i,a){
    let newHeight=document.getElementsByClassName("newHeight")[a].value
    let elements=document.getElementsByClassName(i)
    if (checkNull(newHeight)){
        for (let i = 0; i < elements.length; i++) {
        elements[i].style.height=null
    }
    }else
    {
    let select=document.getElementById('height_type')
    let type=select.options[select.selectedIndex].label
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.height=newHeight+type
    }
    }
}
function getRandomGradient(i) {
    let classElmnt=i.className
    let random=Math.round(Math.random()*(5-2+1)+2)
    let background='linear-gradient(to left,'
    for (let j = 1; j <=random; j++) {
        background+=colorGeneration()+', '
    }
    background=background.slice(0,-2)+')'
      document.getElementsByClassName(classElmnt)[0].style.background=background
}
 function colorGeneration() {
     let letters = '0123456789ABCDEF';
     let color = '#';
     for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color
 }

function setGrow() {
    let select = document.getElementsByClassName("fl_items")[1].value
    let size = document.getElementsByClassName('newGrow')[0].value
    if (checkNull(size)) size = 0
    document.getElementsByClassName(select)[0].style.flexGrow = size
}

 //others
function checkNull(i) {
    return (i < 0)
}

