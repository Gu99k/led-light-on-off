let mainLight = document.querySelector("#bulb");
let holder = document.querySelector(".buld-holder");
let btnOne = document.querySelector(".b1");
let btnTwo = document.querySelector(".b2");

btnOne.addEventListener("click", () => {
  mainLight.style.backgroundColor = "yellow";
  holder.innerHTML = "ON";
  holder.style.color = "green";
});

btnTwo.addEventListener("click", () => {
  mainLight.style.backgroundColor = "gray";
  holder.innerHTML = "OFF";
  holder.style.color = "red";
});
