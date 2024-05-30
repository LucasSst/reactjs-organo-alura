import './App.css';
import Banner from "./components/Banner"
import Form from './components/Form';
import { useState } from 'react';
import Teams from './components/Teams';
function App() {
  const [ data, setData ] = useState([]);
  const teamsArray = [
    {
      name: 'Programação',
      colorPrimary:'#57C278',
      colorSecondary:'#d9f7e9'
    },
    {
      name: 'Front-End"',
      colorPrimary:'#82CFFA',
      colorSecondary:'#E8F8FF'
    },
    {
      name: 'Data Science',
      colorPrimary:'#A6D157',
      colorSecondary:'#F0F8E2'
    },
    {
      name: 'Devolps',
      colorPrimary:'#E06B69',
      colorSecondary:'#FDE7E8'
    },
    {
      name: 'UX e Design',
      colorPrimary:'#DB6EBF',
      colorSecondary:'#FAE9F5'
    },
    {
      name: 'Mobile',
      colorPrimary:'#FFBA05',
      colorSecondary:'#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      colorPrimary:'#FFBA29',
      colorSecondary:'#FFEEDF'
    }
  ];

  const newDataAddition = (value) => {
    setData([...data, value])
    
  }
  return (
    <div className="App">
      <Banner />
      <Form teams={teamsArray.map((v) => v.name)} registeredData={(value) => newDataAddition(value)} />
      {teamsArray.map((teams) => 
      <Teams 
        key={teams.name} 
        name={teams.name} 
        colorPrimary={teams.colorPrimary} 
        colorSecondary={teams.colorSecondary} 
        data={data.filter(v => v.teams === teams.name)}
      />)}
    </div>
  );
}

export default App;
