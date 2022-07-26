import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
// import State from "./components/State";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
function App() {
  return (
      <>
      <div className="w3-content" style={{maxWidth:"1400px"}}>
          <Header/>

        <div className="w3-row">

            <BlogEntries/>
            {/*<State/>*/}
            <IntroductionMenu/>

        </div>
          <Footer/>
      </div>

      </>
  );
}

export default App;
