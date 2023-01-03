import "./index.css";
import { cookieMessage } from "./utils/cookieMessage";
import { mainBTN } from "./utils/mainBTN";

//getItem (получение)
//setItem (запись)
//removeItem (удаление)

if (localStorage.getItem("mainBTN")) {
  //если кнопка есть в локалсторедже
  cookieMessage.classList.add("hide");
  //добавляем в cookieMessage класс со скрытием hide
} else {
  //если кнопки нет в  локалсторедже (веш. обр-чик соб-й)
  mainBTN.addEventListener("click", () => {
    //записываем в локалсторедж надпись cookieMessage
    localStorage.setItem("mainBTN", JSON.stringify("cookieMessage"));
    //(получаем ключ в консоль)
    console.log(localStorage.getItem("mainBTN"));
    document.querySelector(".cookie-consent").remove();
  });
}
