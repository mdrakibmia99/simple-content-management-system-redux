function addHistory() {
  const history = getHistory();

  if (!history.includes(window.location.pathname)) {
    history.push(window.location.pathname);
    localStorage.setItem("blog-history", JSON.stringify(history));
  }
}

function getHistory() {
  const history = localStorage.getItem("blog-history");
  let histories = null;

  if (history?.length) {
    histories = JSON.parse(history);
  } else {
    histories = [];
  }

  return histories;
}

function removeHistory(pathname) {
  const history = getHistory();
  if (history?.length) {
    const histories = history.filter((hist) => hist !== pathname);
    localStorage.setItem("blog-history", JSON.stringify(histories));
  }
}

export { addHistory, getHistory, removeHistory };
