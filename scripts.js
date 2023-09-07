
/* JS event listener for the "gooi-button" */

document.getElementById('gooi-button').addEventListener('click', function() {
    gtag('event', 'click', {
      'event_category': 'Button',
      'event_label': 'myButton'
    });
  });


var gooiButton = document.getElementById("gooi-button")

function signMeUpPlease(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScrQd_U_JMxDQTwtgiTyMS1AABlRdpiPjihJawnlG2Vk-7zlg/viewform"
}