var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
  // 对答案进行处理
  console.log(`多谢你的反馈：${answer}`);
  // rl.close();
});

rl.on('line', (input) => {  //每次读取输入的数据
  console.log(input);
})

rl.on('pause', () => {
  console.log('Readline 被暂停。');
});

rl.on('resume', () => {
  console.log('Readline 被恢复。');
});
