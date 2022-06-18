let mail = document.querySelector('#mail');
let pass = document.querySelector('#pass').value;
let uname = document.querySelector('#uname').value;

let form = document.querySelector('form');
form.addEventListener("submit",function(){
    event.preventDefault()
    
    if(mail.value=="" || pass.value==""){
        document.querySelector('#error_mail').innerHTML="";
        let er = document.createElement('p');
        er.innerText="Enter valid Email"
      
        mail.style.borderColor="red"
        document.querySelector('#error_mail').append(er); 
    }
    else{
        alert("Login Successfull")
        window.location.href="login.html"
        let obj={
            email:form.mail.value,
            username:form.uname.value,
        }
        localStorage.setItem("user",JSON.stringify(obj))
        window.location.href="../../index.html"
    }
})