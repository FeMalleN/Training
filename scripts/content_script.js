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