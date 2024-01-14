function toggleAnswer(h4) {
    var id = h4.getAttribute('data-target');
    var answer = document.getElementById(id);
    var imgsrc = h4.children[0];
    if (answer.style.display === "none") {
        answer.style.display = "block";
        imgsrc.src = "../assets/images/icon-minus.svg";
      } else {
        answer.style.display = "none";
        imgsrc.src = "../assets/images/icon-plus.svg";
      }    
  }