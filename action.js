function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    
    if(document.getElementById("age").value == "." || document.getElementById("age").value > 2) {
       document.getElementById("age").style.backgroundColor = "red";
    } else {
       document.getElementById("age").style.backgroundColor = "white";
    }
}


//name.addEventListener("onkeypress", checkName());
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

/*
function checkName() {

    var regExp = new RegExp('<');

    if(regExp.test(document.getElementById("name").value)){
        //turn background red
        document.getElementById("name").style.backgroundColor = 'red';
    }else{
        //turn background white
        document.getElementById("name").style.backgroundColor = ' ';

    }



}*/
