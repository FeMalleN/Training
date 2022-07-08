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
//Sizes and colours
function setWidth(){
    let newWidth=document.getElementsByClassName("newWidth")[0].value
    let elements=  document.getElementsByClassName('flex_item')
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.width=newWidth+'px'
    }
}

function setHeight(){
    let newHeight=document.getElementsByClassName("newHeight")[0].value
    let elements=  document.getElementsByClassName('flex_item')
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.height=newHeight+'px'
    }
}

function getRandomColor(i) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementsByClassName(i)[0].style.backgroundColor=color
    console.log("set color "+ color+" for "+ i)
 }