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
