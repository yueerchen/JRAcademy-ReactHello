import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from '../containers/Counter';

const welcomeList = [
  {name: 'Nick', isTeacher:true },
  {name: 'Tim', isTeacher:false },
  {name: 'Sam', isTeacher:false },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="App">
          <Welcome name={'Nick'} isTeacher />
          <Welcome name="Tim" />
          <Welcome name={'test'} />
          <Counter />  
      </section>
    );
  }
}

export default App;
