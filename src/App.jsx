import './App.css';
import React, { useState } from "react";
import Card from './Components/Card';


function App() {

  //const [name, setName] = useState("");
 // const [title, setTitle] = useState("");

  const [user, setUser] = useState({
    name: "",
    title: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    console.log(user.name)
    setUser({ ...user, name: event.target.value });
  };
  const handleChangeTitle = (event) => {
    console.log(user.title)
    setUser({ ...user, title: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(user.name.includes(" "));
    console.log(user.name.trim().length > 3);
    console.log(user)
    if (
      user.name.length > 3 &&
      user.title.length > 6
    ) {
      setShow(false);
      setError(true);
    } else {
      setShow(false);
      setError(true);
    }
  };

  const reset = () => {
    setName("");
    setTitle("");

  };

  return (

    <>
    {show ? ( 
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <label >Nombre:</label>
        <input 
          type="text"
          value={user.name}
          onChange={handleChangeName}    
        />
        <label>Titulo Libro:</label>
        <input
          type="text"
          value={user.title}
          onChange={handleChangeTitle}   
        />
        <button>Enviar</button>
    </form>
    <button 
        onClick={reset}>Resetear formulario
    </button>
    </div>
    <Card user={ user } />
    </>
    ):(
    <h3 style={{ color: "red" }}>Por favor introduzca nuevamente la información</h3>
    )}
   
    </>
  );
}

export default App;
