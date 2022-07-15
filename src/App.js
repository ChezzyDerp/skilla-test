import { Route, Routes, useParams } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import SomeRoute from './components/SomeRoute';
import TableCalls from './components/TableCalls/TableCalls';

const App = () => {
  return (
    <div className={style.container}>

      <div className={style.nav_menu}>
        <NavBar />
      </div>

      <div className={style.header}>
        <Header />
      </div>
      
      <div className={style.main}>
        <Routes>
          <Route path='/:name' element={<SomeRoute/>}/>
          <Route path='/calls' element={<TableCalls/>}/>
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
