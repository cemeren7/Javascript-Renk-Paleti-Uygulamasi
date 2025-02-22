const btnpalet = document.querySelector(".btn");

btnpalet.addEventListener("click", randomcolor);

function randomcolor() {
  const paletsdiv = document.querySelectorAll(".palet"); // tüm divleri şeç
  // kontrol
  if (paletsdiv.length > 0) {
    paletsdiv.forEach(function (div) {
      const colorrandom = Math.floor(Math.random() * 16777215 + 1);
      const randomdivcolor = colorrandom.toString(16);
      div.style.backgroundColor = `#${randomdivcolor}`;
      div.textContent = `#${randomdivcolor}`;
    });
  } else {
    alert("Ekranda Hergangi Bir Div Bulunmuyor");
  }
}
