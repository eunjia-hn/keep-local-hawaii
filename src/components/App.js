import React from 'react';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';

import { HomePage } from './HomePage';
import { HotelsPage } from './HotelsPage.js';
import { ActivitiesPage } from './ActivitiesPage.js';
import { DiningPage } from './DiningPage';
import { About } from './About';
import { FormPage } from './FormPage';
import { LoginPage } from './LoginPage';
import { Quiz } from './Quiz';
import { Routes, Route } from 'react-router-dom';

// importing data
import CARD_DATA from '../data/card_data.json';
import QUIZ_DATA from '../data/quiz_data.json';

function App(props) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path="about" element={ <About /> } />
        <Route path="hotels" element={ <HotelsPage cardData={CARD_DATA}/> } />
        <Route path="activities" element={ <ActivitiesPage cardData={CARD_DATA}/> } />
        <Route path="dinings" element={ <DiningPage cardData={CARD_DATA}/> } />
        <Route path="quiz" element={ <Quiz quizData={QUIZ_DATA}/> } />
        <Route path="form" element={ <FormPage /> } />
        <Route path="login" element={ <LoginPage /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

