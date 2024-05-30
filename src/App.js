import './App.css';
import Banner from "./components/Banner"
import Form from './components/Form';
import { useState } from 'react';
import Teams from './components/Teams';
function App() {
  const [ data, setData ] = useState([]);
  const genresArray = [
    {
      name: 'Dramas',
      colorPrimary:'#57C278',
      colorSecondary:'#d9f7e9'
    },
    {
      name: 'Ação e Aventura',
      colorPrimary:'#82CFFA',
      colorSecondary:'#E8F8FF'
    },
    {
      name: 'Terror',
      colorPrimary:'#343434',
      colorSecondary:'#9c9c9c'
    },
    {
      name: 'Comédia Romântica',
      colorPrimary:'#DB6EBF',
      colorSecondary:'#FAE9F5'
    },
    {
      name: 'Ficção científica',
      colorPrimary:'#FFBA05',
      colorSecondary:'#FFF5D9'
    }
  ];

  const newDataAddition = (value) => {
    setData([...data, value])
    
  }

  return (
    <div className="App">
      <Banner />
      <Form genresItems={genresArray.map((v) => v.name)} registeredData={(value) => newDataAddition(value)} />

      {genresArray.map((genre) => 
        <Teams 
          key={genre.name} 
          name={genre.name} 
          colorPrimary={genre.colorPrimary} 
          colorSecondary={genre.colorSecondary} 
          data={data.filter(data => data.genre === genre.name)}
        />)
        }
    </div>
  );
}

export default App;
