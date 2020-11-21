function addCss(fileName) {

    let head = document.head;
    let link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function div(val, by){
    return (val - val % by) / by;
}

