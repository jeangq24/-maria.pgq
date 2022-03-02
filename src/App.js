import './App.css';
import TajetaPrinicipal from './components/tarjetaPrincipal.jsx';
function App() {
  return (
    <div className="App">
      <span className="absolute text-xs font-Roboto-serif font-bold">Tarjeta realizada por <a className="text-sm bg-blue-50 pt-1 hover:bg-blue-200 rounded-md" href='https://www.linkedin.com/in/jeangq24/' target={"_blank"}>@JEAN GARZÓN</a></span>
      <TajetaPrinicipal/>
    </div>
  );
}

export default App;
