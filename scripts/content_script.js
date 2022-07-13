function includeOptions(){
    let options=[
    "px",
    "%",
    "ch",
        "cm",
        "em",
        "ex",
        "gd",
        "mm",
        "pt",
        "rem",
        "vh"
    ]
    let min = 0,
        max = options.length,
        select = document.getElementsByClassName('types');
    [].forEach.call(select,function (select) {
        for (let i = min; i <max; i++) {
        let opt=document.createElement('option');
            opt.value=options[i];
            opt.innerHTML=options[i];
            select.appendChild(opt);
} } )}

function includeItems() {
    let items=document.getElementsByClassName('flex_item')
    console.log(items.item(0).className)
    let min = 0,
        max = items.length,
        select = document.getElementsByClassName('fl_items');
    [].forEach.call(select,function (select) {
        for (let i = min; i <max; i++) {
            let opt=document.createElement('option');
            opt.value=items.item(i).className;
            opt.innerHTML=items.item(i).className;
            select.appendChild(opt);
}})}