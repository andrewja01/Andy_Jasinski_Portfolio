import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Navbar from '../src/components/Navbar';
import Wrapper from '../src/components/Wrapper';
import Skills from '../src/components/sections/Skills';
import Contact from '../src/components/sections/Contact';
import Project from '../src/components/sections/Project';
import Home from '../src/components/sections/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Home />
        <Zoom>
          <Skills />
        </Zoom>
        <Zoom>
          <Project />
        </Zoom>
        <Zoom>
          <Contact />
        </Zoom>
      </Wrapper>
    </div>
  );
}

export default App;
