export const tableScroll = () => {
  const theadWrap = document.querySelector(".table-type1__thead-wrap");
  const tbodyWrap = document.querySelector(".table-type1__tbody-wrap");

  if (!theadWrap || !tbodyWrap) {
    return;
  }
  const theadMargin = () => {
    const hasScrollbar = tbodyWrap.scrollHeight > tbodyWrap.clientHeight;

    theadWrap.classList.toggle("on", hasScrollbar);
  };

  theadMargin();

  tbodyWrap.addEventListener("scroll", theadMargin);
  window.addEventListener("resize", theadMargin);
};
