//displays
function withoutFlex(){
document.getElementsByClassName('block__container')[0].style.display='block'
}
function withFlex(){
    document.getElementsByClassName('block__container')[0].style.display='flex'
}
function inlineFlex(){
    document.getElementsByClassName('block__container')[0].style.display='inline-flex'
}

//directions
function row() {
    document.getElementsByClassName('block__container')[0].style.flexDirection='row'
}

function rowRev() {
    document.getElementsByClassName('block__container')[0].style.flexDirection='row-reverse'
}

function column(){
    document.getElementsByClassName('block__container')[0].style.flexDirection='column'
}
function columnRev(){
    document.getElementsByClassName('block__container')[0].style.flexDirection='column-reverse'
}
// wraps
function wrp(){
    document.getElementsByClassName('block__container')[0].style.flexWrap="wrap"
    console.log("wrp")
}
function nowrp(){
    document.getElementsByClassName('block__container')[0].style.flexWrap='nowrap'
    console.log("nowrp")
}
function wrp_reverse(){
    document.getElementsByClassName('block__container')[0].style.flexWrap='wrap-reverse'
    console.log("wrp-reverse")
}
//Sizes and colors
function setGap(){
    let newGap=document.getElementsByClassName('newGap')[0].value
    let select=document.getElementById('gap_type')
    let type=select.options[select.selectedIndex].label
    document.getElementsByClassName('block__container')[0].style.gap=newGap+type

}
function setWidth(){
    let newWidth=document.getElementsByClassName("newWidth")[0].value
    let elements= document.getElementsByClassName('flex_item')
    let select=document.getElementById('width_type')
    let type=select.options[select.selectedIndex].label
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.width=newWidth+type
    }
}

function setHeight(){
    let newHeight=document.getElementsByClassName("newHeight")[0].value
    let elements=  document.getElementsByClassName('flex_item')
    let select=document.getElementById('height_type')
    let type=select.options[select.selectedIndex].label
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.height=newHeight+type
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

