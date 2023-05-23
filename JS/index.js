var LogInPage = document.getElementById("LogInPage");
var loginMail = document.getElementById("loginMail");
var loginPass = document.getElementById("loginPass");
var loginButton = document.getElementById("login");
var incorrect = document.getElementById("incorrect");

var homePage = document.getElementById("homePage");
var logOut = document.getElementById("logOut")

var signUpPage = document.getElementById("signUpPage");
var signUpName = document.getElementById("signUpName");
var signUpMail = document.getElementById("signUpMail");
var signUpPass = document.getElementById("signUpPass");
var signUpSucces = document.getElementById("signUpSucces");
var signUpFail = document.getElementById("signUpFail");
var signUpExist = document.getElementById("signUpExist");
var signIn = document.getElementById("signIn")
var signUp = document.getElementById("signUp")
var userLists = [];

if (localStorage.getItem("Ulist") == null) {
    var userLists = []
}
else {
    userLists = JSON.parse(localStorage.getItem("Ulist"))

}

function addAccount() {

    for (var i = 0; i < userLists.length; i++) {

        if (signUpMail.value == userLists[i].mail) {
            signUpExist.classList.add("d-block")
            signUpExist.classList.remove("d-none")
            signUpSucces.classList.add("d-none")
            signUpSucces.classList.remove("d-block")
            userLists.splice(i, 1)
        }
    }
    if (signUpMail.value != "" && signUpPass.value != "" && signUpName.value != "") {
        let account = {
            name: signUpName.value,
            mail: signUpMail.value,
            pass: signUpPass.value,
        }
        userLists.push(account)
        localStorage.setItem("Ulist", JSON.stringify(userLists))
        console.log(userLists);
        signUpSucces.classList.replace("d-none", "d-block")
        signUpFail.classList.add("d-none")
        signUpFail.classList.remove("d-block")

    }
    else if (signUpMail.value == "" || signUpPass.value == "" || signUpName.value == "") {
        signUpExist.classList.remove("d-block")
        signUpSucces.classList.remove("d-block")
        signUpSucces.classList.add("d-none")
        signUpFail.classList.add("d-block")
        signUpFail.classList.remove("d-none")

    }



}


function enter() {

    for (var i = 0; i < userLists.length; i++) {

        if (loginMail.value == userLists[i].mail && loginPass.value == userLists[i].pass) {
            LogInPage.style.display = "none"
            homePage.style.display = "flex"
            document.getElementById("demo").innerHTML = `<h1>Welcome ${userLists[i].name}</h1>`
        } else if (loginMail.value == "" || loginPass.value == "") {
            document.getElementById("loginFail").innerHTML = "all input is required"
            incorrect.classList.add("d-none")
            incorrect.classList.remove("d-block")

        }
        else {
            document.getElementById("loginFail").innerHTML = ""
            incorrect.classList.add("d-block")
            incorrect.classList.remove("d-none")
        }
    }
}


signIn.addEventListener("click", function () {
    LogInPage.style.display = "block"
    signUpPage.style.display = "none"

})

signUp.addEventListener("click", function () {
    LogInPage.style.display = "none"
    signUpPage.style.display = "block"
    signUpSucces.classList.add("d-none")
    signUpMail.value = ""
    signUpName.value = ""
    signUpPass.value = ""
})

logOut.addEventListener("click", function () {

    homePage.style.display = "none"
    LogInPage.style.display = "block"
    incorrect.classList.add("d-none")
    loginMail.value = ""
    loginPass.value = ""

})



















