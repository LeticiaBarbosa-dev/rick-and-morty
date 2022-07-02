import { useState } from 'react';
import { CharacterList } from './components/CharacterList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './global.css';

function App() {
  
  return (
      <>
        <Header />
        <CharacterList />
        <Footer />
      </>
  );
}

export default App
