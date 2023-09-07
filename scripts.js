


function signMeUpPlease(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScrQd_U_JMxDQTwtgiTyMS1AABlRdpiPjihJawnlG2Vk-7zlg/viewform"
}



/* Listens for when the knoppie is drukked and tells google tag manager that it's been drukked. */

document.getElementById('gooi-button').addEventListener('click', function() {
  gtag('event', 'click', {
    'event_category': 'Button',
    'event_label': 'gooi-button'
  });
});