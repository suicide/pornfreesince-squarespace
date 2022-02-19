
function freeSince(el) {

  let stringDate = el.textContent;

  let date = Date.parse(stringDate);

  let timerId = countdown(date, ts => el.innerHTML = ts);

  console.debug(timerId);

}
