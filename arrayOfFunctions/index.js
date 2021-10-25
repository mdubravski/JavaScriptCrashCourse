// array of functions

function jump(){
    console.log('you jump');
}

function punch(){
    console.log('you punch');
}

function kick(){
    console.log('you kick');
}

function block(){
    console.log('you block');
}

let actions = [jump, punch, kick, block];

for(let i = 0; i<actions.length; i++){
    actions[i]();
}

actions.forEach(func => func());