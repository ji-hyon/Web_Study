axios.get('https://api.example.com/data')
	.then(function (response) {
	console.log((response.data))
})

// (a) : get
// (b) : then
// (c) : response.data

// `동기` : 함수를 호출하면, 함수 내부의 작업이 끝나기 전까지는 다음 코드가 실행되지 않는다. 
// `비동기` : 함수를 호출하면, 함수 내부의 작업이 완료되지 않은 상태에서도 다음 코드가 실행된다. 주로 시간이 오래 걸리는 작업을 수행할 때 사용된다. 비동기 함수는 작업이 완료되면 콜백 함수를 호출하거나 Promise객체를 반환하여 작업의 완료 여부를 알린다. 
