/*
document.getElementById("subscribe").onclick = function validate() {
    checkEmail();

}


*/

document.getElementById("email").onkeyup = function checkEmail() {
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    var email = document.getElementById("email");

    if(regExp.test(document.getElementById("email").value)){
        //if this returns true call on myAjaxFunction()
        //inside myAjaxFunction--- have an alert pop up and clear the data fields
        myAjaxFunction();
        return (true);
    }else{
        //returns false -- alert the subscription did not work
        return (false);
        alert("Subscription couldn't be processed");
    }

}

function myAjaxFunction(){
    alert("Ajax has been made");

    document.getElementById("submit").reset();


}


document.getElementById("age").onkeyup = function checkAge() {
//    var regExp = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var regExp = new RegExp('\\d?[1-9][1-9]0$');
    var age = document.getElementById("age");
    console.log("Age is running");

    if(regExp.test(document.getElementById("age").value)){
        age.style.backgroundColor = 'white'
    }else{
        age.style.backgroundColor = 'red';
    }
/*
    for(var i = 0; i <age; i++){
        if(regExp.test(document.getElementById("age").valueOf(i) === ".") || regExp.test(document.getElementById("age").length > 2)){
            age.style.backgroundColor = 'red';
            console.log("Length is larger than 2");
        }else{
            age.style.backgroundColor = 'white';
        }
    }
*/

/*    if(regExp.test(document.getElementById("age").length > 2)){
        age.style.backgroundColor = 'red';
        console.log("Length is larger than 2");
    }else{
        age.style.backgroundColor = 'white';
    }*/
//regExp.test(document.getElementById("age").value === ".") ||

/*    if(document.getElementById("age").value === "." || document.getElementById("age").value > 2) {
       age.style.backgroundColor = "red";
    } else {
       age.style.backgroundColor = "white";
    }*/
 /*   if(regExp.test(document.getElementById("age").contains("."))){
        age.style.backgroundColor = 'red';

    }else{
        age.style.backgroundColor = 'white';
    }
*/
}



document.getElementById("name").onkeyup = function checkName() {
    var name = document.getElementById("name");
    var regExp = new RegExp('<');

    if(regExp.test(document.getElementById("name").value)){
        //turn background red
        //document.getElementById("name").style.backgroundColor = 'red';
        name.style.backgroundColor = 'red';
    }else{
        //turn background white
        //document.getElementById("name").style.backgroundColor = ' ';
        name.style.backgroundColor = 'white';
    }

}

