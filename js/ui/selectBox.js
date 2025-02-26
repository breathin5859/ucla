export const selectBox = () => {
  const selects = document.querySelectorAll(".select");
  const selectBtns = document.querySelectorAll(".select > button");

  selectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("--active");
    });
  });
};
