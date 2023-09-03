function expand(str) {
    if (str.nextElementSibling.style.display == "none") {
        str.nextElementSibling.style.display = "block";
    } else {
        str.nextElementSibling.style.display = "none";
    }
}

window.onload = function () {
    document.getElementById("product").innerHTML += localStorage.getItem("product");
}

function additional(str, element) {
    if (str.nextElementSibling.style.display == "none") {
        str.nextElementSibling.style.display = "block";
    } else {
        str.nextElementSibling.style.display = "none";
    }
    if (element == "password") {
        if (document.getElementById(element).required) {
            document.getElementById(element).required = false;
        } else {
            document.getElementById(element).required = true;
        }
    } else {
        let x = document.getElementsByClassName("delivery");
        console.log(x);
        for (let i = 0; i < x.length; i++) {
            if (x[i].required) {
                x[i].required = false;
            } else {
                x[i].required = true;
            }
        }
    }
}