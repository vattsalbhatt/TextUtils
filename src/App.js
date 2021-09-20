import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtilities" about="About Us" /> */}
      <Navbar title="TextUtils" />
      <div className="container my-5git ">
        <TextForm heading="Enter Your text below to analyze" />
      </div>
    </>
  );
}

export default App;
