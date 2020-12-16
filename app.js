document.addEventListener("DOMContentLoaded", function() {
  main();
});

function main() {
  const app = document.getElementById('app');
  const amount = document.getElementById('amount').value;
  app.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const temp = document.getElementById('t-image');
    let imgBox = temp.content.firstElementChild.cloneNode(true);
    const img = imgBox.getElementsByTagName('img')[0];
    img.src = './img.png?' + Math.random();
    app.appendChild(imgBox);
  }
}
