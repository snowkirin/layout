const gridEle = document.getElementById("grid");
const radioEles = document.querySelectorAll('input[type="radio"]');

radioEles.forEach(function (ele) {
  ele.addEventListener("change", function (event) {
    switch (event.target.value) {
      case "auto":
        gridEle.classList.remove("only-fr", "mix-auto-fr");
        gridEle.classList.add("only-auto");
        break;
      case "fr":
        gridEle.classList.remove("only-auto", "mix-auto-fr");
        gridEle.classList.add("only-fr");
        break;
      case "mix":
        gridEle.classList.remove("only-fr", "only-auto");
        gridEle.classList.add("mix-auto-fr");
        break;
      default:
        gridEle.classList.remove(["only-fr", "mix-auto-fr", "only-auto"]);
    }
  });
});
