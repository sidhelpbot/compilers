class Hlp {
constructor(){
  
}
sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async replyWithDeleteTime(ctx: any, mss: any, tim: any = 10) {
  return await ctx.reply(mss).then(async (mi: any) => {
    await this.sleep(tim * 1000)
    return await ctx.deleteMessage(mi.message_id).catch((err: any) => { })
  })
    .catch((err: any) => { })
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
}
export default Hlp;