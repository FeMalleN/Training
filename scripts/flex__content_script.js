function includeOptions() {
    let options = [
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
    [].forEach.call(select, function (select) {
        for (let i = min; i < max; i++) {
            let opt = document.createElement('option');
            opt.value = options[i];
            opt.innerHTML = options[i];
            select.appendChild(opt);
        }
    })
}

function includeItems() {
    let items = document.getElementsByClassName('flex_item')
    let min = 0,
        max = items.length,
        select = document.getElementsByClassName('fl_items');
    [].forEach.call(select, function (select) {
        for (let i = min; i < max; i++) {
            let opt = document.createElement('option');
            opt.value = items.item(i).className;
            let end = opt.value.search(' ')
            opt.innerHTML = items.item(i).className.substring('0', end);
            select.appendChild(opt);
        }
    })
}

function includeRates() {
    let rate = [
        'flexShrink', 'flexBasis', 'flexGrow'
    ]
    let min = 0,
        max = rate.length,
        select = document.getElementsByClassName('fl_rates');
    [].forEach.call(select, function (select) {
        for (let i = min; i < max; i++) {
            let opt = document.createElement('option');
            opt.value = rate[i];
            opt.innerHTML = rate[i];
            select.appendChild(opt);
        }
    })
}

function basisOptions() {
    let bassOpt = [
        '30%', '50%', 'content', '150px', '220px'
    ]
    let min = 0,
        max = bassOpt.length,
        select = document.getElementsByClassName('basis_type');
    [].forEach.call(select, function (select) {
        for (let i = min; i < max; i++) {
            let opt = document.createElement('option');
            opt.value = bassOpt[i];
            opt.innerHTML = bassOpt[i];
            select.appendChild(opt);
        }
    })
}