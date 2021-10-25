/**
 * 
 * create HTML elements
 * h1.innerHTML (vulnerable to XSS attacks)
 * h1.innerText (better)
 * 
 */

const h1 = document.createElement("h1");
h1.innerHTML = "<u>Hello World</u>";
document.body.append(h1);

const h2 = document.createElement("h2");
const underline = document.createElement("u");
underline.innerText = "I am a h2 element";
h2.append(underline);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "I am a p element";
p.append(bold);
document.body.append(p);