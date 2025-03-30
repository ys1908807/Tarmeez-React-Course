import './App.css';
import Header from './Components/heder';
import Asyed from "./Components/asyed";
import Bost from "./Components/bost";

function App() {
  return (
    <>
    <body className='body'>
      <header className='header'>
        <Header />
      </header>
        <main className='main'>
          <Bost />
          <Bost />
          <Bost />
          <Bost />
          <Bost />
        </main>
        <aside className='aside'>
        <Asyed />
        </aside>
      </body>
    </>
  );
}

export default App;
