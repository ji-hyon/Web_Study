// console.log('Hi')

// setTimeout(function () {
//   console.log('SSAFY')
// }, 3000)

// console.log('Bye')
console.log('Hi');

new Promise(function(resolve) {
  // Promise 객체가 resolve 되는 경우
  resolve();
}).then(function() {
  // then 함수가 실행되고 'SSAFY'가 출력됨
  console.log('SSAFY');
}).catch(function() {
  console.log('Error');
});

console.log('Bye');
