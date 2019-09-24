import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './componets/counter';

const App = () => {



  return (
    <div>
      <Counter />
    </div>
  );
};

//rendering in ui
ReactDOM.render(<App></App>, document.querySelector('.container'));
