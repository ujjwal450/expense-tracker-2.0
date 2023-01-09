
import Expenses from './components/Expenses/Expenses';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
function App() {
  console.log("test")
  return (
    <Fragment>
      <Header/>
    <main>
      <Expenses/>
    </main>
    </Fragment>
  );
}

export default App;
