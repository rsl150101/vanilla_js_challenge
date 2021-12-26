const clockText = document.querySelector(".clock h1");

function currentTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");
  clockText.innerText = `${hour}:${min}:${sec}`;
}

currentTime();
setInterval(currentTime, 1000);
