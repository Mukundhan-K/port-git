import { useState } from 'react';

// components

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from './components/Skills';
import MyWorks from './components/Works';
import Review from './components/Review';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div id="app" className={darkMode && 'dark'}>

        <header className="bg-white dark:bg-main-bg">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        <main className='bg-white text-black dark:bg-main-bg dark:text-white'>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <MyWorks />
          <Review />
          <Form />
        </main>

        <footer className='bg-white dark:bg-main-bg'>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default App
