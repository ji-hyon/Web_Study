import React from 'react';
import Greeting from './components/Greetings';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="John" age={30} />
      <Greeting name="Jane" />
      <Counter initialCount={5} />
    </div>
  );
};

export default App;
