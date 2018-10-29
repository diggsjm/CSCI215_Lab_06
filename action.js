function checkEmail(email) {
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');




}

document.getElementById("age").onkeyup = function checkAge() {
    var regExp = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var age = document.getElementById("age");
    
    if(document.getElementById("age").value === "." || document.getElementById("age").value > 2) {
       age.style.backgroundColor = "red";
    } else {
       age.style.backgroundColor = "white";
    }
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

