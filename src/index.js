import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './pages/nav/nav.pages';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from './pages/students/students.pages';
import Teachers from './pages/teachers/teacher.pages';
import ErrorPage from './pages/error page/error-page.pages';
import About from './pages/about/about.pages';
import Subjects from './pages/subjects/subjects-category.pages';
import TeachersCategory from './pages/teachers-category/teachers-category';
import Marks from './pages/marks/marks.pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <BrowserRouter>  
    <Nav /> 
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/students'>
            <Route index element={<Students />}/>
            <Route path=':category'>
                <Route index element={<Subjects />}/>
                    <Route path=':marks'element={<Marks />}/>
                </Route>
            </Route>
        <Route path='teachers'>
          <Route index element={<Teachers />}/>
          <Route path=':category'element={<TeachersCategory />} />
          </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes> 
      
    </BrowserRouter>           
  </React.StrictMode>
);


reportWebVitals();
