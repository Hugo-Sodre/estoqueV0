import "./App.css";
import Cadastro from "./components/Cadastro";
import Estoque from "./components/Estoque";
import List from "./components/List"
function App() {
  return (
    <div
      div
      className=" max-w-[1200px] w-[90%] mx-auto md:w-[70%] flex flex-col py-4"
    >
      <header className="w-full">
        <div>
          <div className="flex flex-row"></div>
        </div>
      </header>
      <main className="flex flex-col gap-6 mx-auto">
        <Cadastro />
        <List />
      </main>
    </div>
  );
}

export default App;
