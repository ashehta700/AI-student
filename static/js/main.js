//wow

new WOW().init();/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  document.getElementById("Login").addEventListener("click", function() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    
    if (userName === "Admin" && password === "Admin") {
      window.location.href = "../index.html";
      toastr.success('Have fun storming the castle!', 'Miracle Max Says')
       
    }
    else {
      document.getElementById("myAlert").classList.remove("d-none");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  window.ChatGPT.init({
      apiKey: 'YOUR_OPENAI_API_KEY',
      // Additional options can be configured here
  });
});

function openChat() {
  alert("xx")
}


