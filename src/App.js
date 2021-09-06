import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

import { useState } from 'react';

function App() {
  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      case 'Projects':
        return <Projects />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      {/* Pass the state value and the setter as props to NavBar */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <main>

      </main>
    </div>
  )
}

export default App;
