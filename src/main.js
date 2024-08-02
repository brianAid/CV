const body = document.body;
console.log(body.id);
(localStorage.getItem("background")?body.id =localStorage.getItem('background'):localStorage.setItem("background","dark"));

function changeBg(){
  switch (localStorage.getItem("background")) {
    case "light":
    localStorage.setItem("background","dark");
    body.id = localStorage.getItem("background");
      break;
    case "dark":
    localStorage.setItem("background","light");
    body.id = localStorage.getItem("background");
      break;
  }
}