import React, { useEffect, useState } from "react";

function Cherry(props) {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     // 브라우저 API를 사용해서 document의 title을 업데이트
    //     document.title = `You clicked ${count} times`;
    // });
    document.title = `You clicked ${count} times`;
    
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default Cherry