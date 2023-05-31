import part from "./particles.txt";

particlesJS.load('particles', part, function () {
  console.log('particles loaded');
});

// window.onload = () => {
//   Particles.load('particles', part, function () { });
// };

anus = 0;

twttr.events.bind(
  'follow',
  function (event) {
    anus++;
    if (anus == 2) {
      setTimeout(function () {
        if (window.location.pathname == "/download" | window.location.pathname == "/download.html") {
          window.location.href = atob("aHR0cHM6Ly9naXRodWIuY29tL0xpdmVFbmhhbmNlbWVudFN1aXRlL0xFU2ZvcldpbmRvd3MvcmVsZWFzZXM=");
          console.log(atob("aHR0cHM6Ly9naXRodWIuY29tL0xpdmVFbmhhbmNlbWVudFN1aXRlL0xFU2ZvcldpbmRvd3MvcmVsZWFzZXM="));
        }
        if (window.location.pathname == "/download-mac" | window.location.pathname == "/download-mac.html") {
          window.location.href = atob("aHR0cHM6Ly9naXRodWIuY29tL0xpdmVFbmhhbmNlbWVudFN1aXRlL0xFU2Zvck1hY09TL3JlbGVhc2VzL2Rvd25sb2FkL3YxLjMuMS1hbHBoYS9MaXZlRW5oYW5jZW1lbnRTdWl0ZS5kbWc=");
          console.log(atob("aHR0cHM6Ly9naXRodWIuY29tL0xpdmVFbmhhbmNlbWVudFN1aXRlL0xFU2Zvck1hY09TL3JlbGVhc2VzL2Rvd25sb2FkL3YxLjMuMS1hbHBoYS9MaXZlRW5oYW5jZW1lbnRTdWl0ZS5kbWc="));
        }
      }, 3000);
    }
  }
);

function bollocks() {
  document.querySelector("*").className += "wobbly";
}
