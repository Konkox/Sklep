// funkcja zmienia zdjecie w zaleznosci od wyboru uzytkownika, korzystajac z localStorage
function zm_zdj() {
  zdj = document.getElementById("zdj");

  localStorage.setItem("zdj1", "/zdjecia/zdjecie1.jpg");
  localStorage.setItem("zdj2", "/zdjecia/zdjecie2.jpeg");
  localStorage.setItem("zdj3", "/zdjecia/zdjecie3.jpg");
  localStorage.setItem("zdj4", "/zdjecia/zdjecie4.jpg");
  localStorage.setItem("zdj5", "/zdjecia/zdjecie5.jpg");
  localStorage.setItem("zdj6", "/zdjecia/zdjecie6.jpg");

  option = document.getElementById("w_zdj");

  switch (option.value) {
    case "zdj1":
      zdj.src = localStorage.getItem("zdj1");
      zdj.style.width = "500px";
      zdj.style.height = "400px";
      break;
    case "zdj2":
      zdj.src = localStorage.getItem("zdj2");
      zdj.style.width = "500px";
      zdj.style.height = "300px";
      break;
    case "zdj3":
      zdj.src = localStorage.getItem("zdj3");
      zdj.style.width = "300px";
      zdj.style.height = "300px";
      break;
    case "zdj4":
      zdj.src = localStorage.getItem("zdj4");
      zdj.style.width = "400px";
      zdj.style.height = "500px";
      break;
    case "zdj5":
      zdj.src = localStorage.getItem("zdj5");
      zdj.style.width = "600px";
      zdj.style.height = "500px";
      break;
    case "zdj6":
      zdj.src = localStorage.getItem("zdj6");
      zdj.style.width = "400px";
      zdj.style.height = "300px";
      break;
  }
}
