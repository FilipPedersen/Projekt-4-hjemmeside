var element = document.getElementById('box');                                           // finder og tager elementet så det kan animeres.
var elementHeight = element.clientHeight;                                               // find elements højde

document.addEventListener('scroll', animate);                                           // Tilfør en "event listerner" (event lyter)  for "scroll eventen" and kald på animate funktionen

function inView() {                                                                     // Tjek om elementet er i "view" (viewporten)
  var windowHeight = window.innerHeight;                                                // få fat i vinduets højde
  var scrollY = window.scrollY || window.pageYOffset;                                   // få fat i nummeret af pixler som vinduet er scollede
  var scrollPosition = scrollY + windowHeight;                                          // få fat i den nuværrende scoll position (afstand fra toppen af siden til sluttning af den aktive viewport)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;  // få fat i elementets position (afstand fra toppen af siden til til enden af elementet)
  if (scrollPosition > elementPosition) {                                               // er scoll positionen sørrer end elementest position? (er elementet helt i view)
    return true;                                                                        // Hvis ja, så return true.
  }
  return false;                                                                         // Hvis nej, så return false.
}

function animate() {                                                                    // Aktiver animation når elementet er i view.
  if (inView()) {                                                                       // Er elemintet i view? Tjekker med funktionen.
      element.classList.add('animate');                                                 // Hvis "inView" returner true, til føjes ny class og animation aktivers.
  }
}
