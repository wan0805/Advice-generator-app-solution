const adviceNumber = document.querySelector("#advice");
const adviceDescription = document.querySelector("#advice__description");
const button = document.querySelector("#button");

function doSortAdiceNumber() {
  let sortNumber = Math.floor(Math.random() * 200);
  doAcessApi(sortNumber);
}

async function doAcessApi(sortNumber) {
  try {
    let url = await fetch(`https://api.adviceslip.com/advice/${sortNumber}`);
    let response = await url.json();
    doRenderToAdvice(response);
  } catch (error) {
    console.log(error);
  }
}
function doRenderToAdvice(response) {
  let adviceId = response.slip.id;
  let advice = response.slip.advice;
  adviceNumber.innerHTML = adviceId;
  adviceDescription.innerHTML = advice;
}

button.addEventListener("click", doSortAdiceNumber);
