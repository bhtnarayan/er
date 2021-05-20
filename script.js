function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var body = document.body;
    var head = document.getElementById("heading");

    if (checkBox.checked == true) {
        body.style.backgroundColor = "Black";
        body.style.color ="White";
        head.style.color = "White";
        
    }
    else {
        body.style.backgroundColor = "White";
        body.style.color = "Black";
        head.style.color = "Black";

    }
}