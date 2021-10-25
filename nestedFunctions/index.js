/**
 * 
 * nested functions = Functions inside other functions.
 *                    Outer functions have access to inner functions.
 *                    Inner functions are "hidden" from outside scope.
 *                    Used in closures.
 * 
 */

function login(){
    let username = "MAD913813";
    let userInbox = 0;

    function displayUsername(){
        console.log('Hello',username);
    }

    function displayUserInbox(){
        console.log('You have',userInbox,'new messages.');
    }

    displayUsername();
    displayUserInbox();
}

login();