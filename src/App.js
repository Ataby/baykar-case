import "./App.css";
import Header from "./components/Header";
import MainFirst from "./components/MainFirst";
import MainSecond from "./components/MainSecond";
import MainThird from "./components/MainThird";
import MainFourth from "./components/MainFourth";
import MainFifth from "./components/MainFifth";
import MainSixth from "./components/MainSixth";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto max-w-[1400px] w-full">
      <Header />
      <MainFirst/>
      <MainSecond/>
      <MainThird/>
      <MainFourth/>
      <MainFifth/>
      <MainSixth/>
      <Footer/>
    </div>
  );
}

export default App;
