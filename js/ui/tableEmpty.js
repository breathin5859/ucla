export const tableEmpty = () => {
  const tbody = document.querySelector(".table-type1__tbody tbody");
  const tbodyEmpty = document.querySelector(".table-type1__empty");

  if (!tbody || !tbodyEmpty) {
    return;
  }

  const hasRows = tbody.querySelector("tr") !== null;

  tbodyEmpty.classList.toggle("on", !hasRows);
};
