function withoutFlex(){
document.getElementsByClassName('block__container')[0].style.display='block'
}
function withFlex(){
    document.getElementsByClassName('block__container')[0].style.display='flex'
}
function inlineFlex(){
    document.getElementsByClassName('block__container')[0].style.display='inline-flex'
}
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

//Sizes
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