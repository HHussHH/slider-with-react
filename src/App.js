import Header from "./components/header/Header.js"
import './App.css';
import Intro from "./components/intro/Intro.js";
import Slider from "./components/footerSlider/Slider.js";
import sliderData from "./data/slider"
import { useEffect, useState } from "react";


function App() {

  const [slideId, setSlideId] = useState(0);

  const title = sliderData[slideId].title;
  const discription = sliderData[slideId].discription;
  const img = sliderData[slideId].img;
  const prev = sliderData[slideId].prev;
  const next = sliderData[slideId].next;
  const progress = sliderData[slideId].progress;

  const slideSwitcherTo = () => {
    switch (slideId) {
      case 0:
        setSlideId(id => id = 1)
        break;
      case 1:
        setSlideId(id => id = 2)
        break;
      case 2:
        setSlideId(id => id = 0)
        break;
    }
  }

  const slideSwitcherBack = () => {
    switch (slideId) {
      case 0:
        setSlideId(id => id = 2)
        break;
      case 1:
        setSlideId(id => id = 0)
        break;
      case 2:
        setSlideId(id => id = 1)
        break;
    }
  }

  useEffect(() => {
    setSlideId(0)
    document.body.style.background = `url(${img})`;
  }, [])

  return (
    <div className="App">
      <Header />
      <Intro title={title} discription={discription} />
      <Slider bg={img} switcher={slideSwitcherTo} back={slideSwitcherBack} prevNum={prev} nextNum={next} progress={progress} />
    </div>
  );
}

export default App;
