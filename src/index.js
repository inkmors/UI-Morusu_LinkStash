import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './Components/Login-Register/Login';
//import Register from './Components/Login-Register/Register';
//import Title from './Components/Login-Register/Title';
import Posts from './Components/Main/Posts';
import Header from './Components/Main/Header';
import Footer from './Components/Main/Footer';
// import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header userName="Vinicius" role="Admin" />

    {/* <App /> */}

    {/* <Login Spanerror="Email ou senha incorretos" /> */}
    <div className='divPosts'>
      <div className='containnerTitlePosts'>
        <hr />
        <p>Itens salvos</p>
        <hr />
      </div>
      <Posts titlePost="YouTube" contentLink="https://www.youtube.com/"/>
      <Posts titlePost="Github" contentLink="https://www.youtube.com/"/>
      <Posts titlePost="Google" contentLink="https://www.youtube.com/"/>
      <Posts titlePost="Netflix" contentLink="https://www.youtube.com/"/>
      <Posts titlePost="Curso React" contentLink="https://www.youtube.com/"/>
      <Posts titlePost="Video legal" contentLink="https://www.youtube.com/"/>
    </div>
    <Footer />
    {/* <Register /> */}
  </React.StrictMode>
);

