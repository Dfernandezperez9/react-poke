import React from 'react';
import Content from './Content';
import Result from './Result';
import './App.css';

function App() {
  const [result, setResult] = React.useState(null);

  const HANDLE_RESULT = (result) => {
    setResult(result);
  };

  return (
    <div>
      <Content onResult={HANDLE_RESULT} />
      <Result result={result} />
    </div>
  );
}

export default App;
