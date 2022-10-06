// import './App.css';
import Todos from "./todo/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos /> {/* 컴포넌트 이름은 대문자로 시작 */}
      </header>
    </div>
  );
}

export default App;
