import Header from "./Components/Header";
import Result from "./Components/Result";

function App() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-red-800 p-12 flex justify-center gap-4">
        <Result />
        <Result />
      </div>
    </div>
  );
}

export default App;
