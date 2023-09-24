let adviceNumber = document.querySelector("#advice");
let adviceDescription = document.querySelector("#advice__description");
let button = document.querySelector("#button");

function doSortAdiceNumber() {
  let sortNumber = Math.floor(Math.random() * 200);
  doAcessApi(sortNumber);
}

async function doAcessApi(sortNumber) {
  let url = await fetch(`https://api.adviceslip.com/advice/${sortNumber}`);
  let response = await url.json();
  doRenderToAdvice(response);
}
function doRenderToAdvice(response) {
  let adviceId = response.slip.id;
  let advice = response.slip.advice;
  adviceNumber.innerHTML = adviceId;
  adviceDescription.innerHTML = advice;
}

button.addEventListener("click", doSortAdiceNumber);
