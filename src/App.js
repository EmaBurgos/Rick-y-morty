import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function App () {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  const username = "emaburgos17@hotmail.com";
  const password = "1234";



  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "76b7bcb2b5f0.569c7dd7826d4df14411"

    if(characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("Algo salió mal");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => char.id !== id)
    );

  };

  const {pathname} = useLocation();

  const [characters, setCharacters] = useState([]);

  const login = (userData) => {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");

    } else {
      alert("Credenciales incorrectas");
    }

  };

  return (
    <div className='App' style={{ padding: '25px' }}>
       
       {pathname !== "/" && <Nav onSearch={onSearch}/>}
        <Routes>
          <Route path="/" element={<Form login={login}/>}/>
          <Route 
          path="/home" 
          element={<Cards characters={characters} onClose={onClose} />}
          />
           <Route 
          path="/about" 
          element={<About />}
          />
           <Route 
          path="/detail/:detailId" 
          element={<Detail />}
          />
        </Routes>
    
      
    </div>
  )
}

export default App
