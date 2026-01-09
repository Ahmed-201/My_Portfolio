import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import BannerImage from "./component/BannerImage";
import AimsBenefitsText from "./component/AimsBenefitsText";
import MyTried from "./component/MyTried";
import RelevantExperience from "./component/RelevantExperience";
import Footer from "./component/Footer";
import "./responsive.css";
import "./index.css";
import React from "react";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg_dark  overflow-x-hidden">
        <Header />
        <Banner />
        <AimsBenefitsText
          text="I build modern web applications and solve complex problems with code."
          animation={true}
        />
        <AimsBenefitsText text="I deliver impactful results by building scalable web solutions using clean code and modern technologies." />
        <BannerImage />
        <MyTried />
        <RelevantExperience />
        <Footer />
      </div>
    </>
  );
}

export default App;
