import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Fragment, useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
// import FeedbackData from "./Data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './contexts/FeedbackContext';
import AbouticonLink from './components/AbouticonLink';
// import Card from "./components/shared/Card";

  // npm run dev to run both npm run server and npm start

function App(){
    return(
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">


        <Routes>
            <Route
              exact
               path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats/>
                  <FeedbackList />
                </>
              }>
                
            </Route>

            <Route path='/about' element={<AboutPage />} />
              

          </Routes>
         <AbouticonLink />
          
    </div>
    </Router>
    </FeedbackProvider>
    )
} 
export default App; 