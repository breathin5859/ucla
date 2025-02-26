export const colClone = () => {
  const thead = document.querySelector(".table-type1__thead-wrap table");
  const tbody = document.querySelector(".table-type1__tbody-wrap table");

  if (!thead || !tbody) {
    return;
  }
  const colGroup = thead.querySelector("colgroup");

  if (colGroup) {
    const cloneColGroup = colGroup.cloneNode(true);
    const caption = tbody.querySelector("caption");

    caption.after(cloneColGroup);
  }
};
