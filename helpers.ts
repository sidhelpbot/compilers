class Hlp {
  constructor() {

  }
  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  input(question: any) {
    return new Promise((resolve) => {
      this.readline.question(question, resolve);
    });
  }

  er = (e: any) => console.log(e.message)
}
export default Hlp;