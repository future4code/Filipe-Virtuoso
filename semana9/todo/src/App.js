import React from 'react';
import GlobalStyles from './style/global';

// components
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
