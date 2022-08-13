const advice = document.querySelector(".advice");
const adviceTitle = document.querySelector(".card-title");
const generateBtn = document.querySelector(".btn");

const adviceFun = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceTitle.innerHTML = `Advice #${data.slip.id}`;
    advice.innerHTML = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
};
generateBtn.addEventListener("click", adviceFun);
adviceFun();
