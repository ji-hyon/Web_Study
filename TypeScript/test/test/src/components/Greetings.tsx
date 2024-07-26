import React from 'react';

// Props의 타입 정의
interface GreetingProps {
  name: string;
  age?: number; // 선택적 속성
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>Age: {age}</p>}
    </div>
  );
};

export default Greeting;
