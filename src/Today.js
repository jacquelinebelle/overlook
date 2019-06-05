class Today {
  constructor(date) {
    this.date = date;
  }

  getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    this.date = `${dd}/${mm}/${yyyy}`;
  }
}

export default Today;