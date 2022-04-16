import style from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
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
        <TableCalls/>
      </div>
      
    </div>
  );
}

export default App;
