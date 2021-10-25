/**
 *  break = used to exit out a loop
 *  continue = skips over an iteration of the loop
 * 
 */

for(let i=0; i < 10; i++){
    if(i==6){
        break;
    }
    console.log(i);
}

console.log('---------------------------------------------');

for(let i=0 ; i<10; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}