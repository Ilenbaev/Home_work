import "./App.css";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const getNumber = (arr) => {
    console.log(arr);
  };
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer getNumber={getNumber} />
    </div>
  );
}

export default App;
