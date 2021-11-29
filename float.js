const wrapper = document.querySelector(".wrapper"),
  floatLeft = document.querySelector(".float_left"),
  floatRight = document.querySelector(".float_right");

function toggleFloat(ele) {
  if (ele.checked) {
    floatLeft.style = "float: left";
    floatRight.style = "float: right";
  } else {
    floatLeft.removeAttribute("style");
    floatRight.removeAttribute("style");
  }
}
function toggleClearfix(ele) {
  ele.checked
    ? wrapper.classList.add("clearfix")
    : wrapper.classList.remove("clearfix");
}
