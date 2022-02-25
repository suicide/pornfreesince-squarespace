
function freeSince(startDateEl,
  counterEl = {
    years: "",
    months: "",
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  },
  targetSelectFunc) {

  const updateCountdown = (ts) => {
    new Map(Object.entries(counterEl))
      .forEach((v, k) => {
        const target = targetSelectFunc(v);

        if (target) {
          const num =  String(ts[k]).padStart(2, '0')
          target.innerHTML = num;
        }
      });
  }

  const stringDate = startDateEl.textContent;

  const date = Date.parse(stringDate);

  const timerId = countdown(date, updateCountdown);

  console.debug(`Running coundown with ${timerId}`);

}
