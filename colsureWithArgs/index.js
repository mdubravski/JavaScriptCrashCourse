// closure example w/ arguments

function makeSize(size){
    return function(){
        document.body.style.fontSize = size+"px";
    };
}

function makeFont(font){
    return function(){
        document.body.style.fontFamily = font;
    };
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let font1 = makeFont("Ink Free");
let font2 = makeFont("Consolas");

size20();
size30();
size40();

font1();
font2();