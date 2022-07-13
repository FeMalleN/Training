let block=document.getElementsByClassName('block__container');

//displays
function withoutFlex(){
block[0].style.display='block'
}
function withFlex(){
block[0].style.display='flex'
}
function inlineFlex(){
    block[0].style.display='inline-flex'
}

//directions
function row() {
block[0].style.flexDirection='row'
}
function rowRev() {
block[0].style.flexDirection='row-reverse'
}
function column(){
block[0].style.flexDirection='column'
}
function columnRev(){
block[0].style.flexDirection='column-reverse'
}

// wraps
function wrp(){
block[0].style.flexWrap="wrap"
}
function nowrp(){
block[0].style.flexWrap='nowrap'
}
function wrp_reverse(){
block[0].style.flexWrap='wrap-reverse'
}

//Alignments
function justStart(){
     block[0].style.justifyContent='flex-start'
}
function justEnd(){
    block[0].style.justifyContent='flex-end'
}
function justCenter(){
    block[0].style.justifyContent='center'
}
function justSpBetween(){
    block[0].style.justifyContent="space-between"
}
function justSpAround(){
    block[0].style.justifyContent="space-around"
}
function justSpEvenly(){
    block[0].style.justifyContent="space-evenly"
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
    let elements=  document.getElementsByClassName(i)
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

 //others
function checkNull(i) {
    return (i<0)? true:false
}

function align_self(i) {
    let select=document.getElementById('selected_item')
    let elem=select.options[select.selectedIndex].value
    console.log(elem)
    document.getElementsByClassName(elem)[0].style.alignSelf=i
}