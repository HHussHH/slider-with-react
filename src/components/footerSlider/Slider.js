
import "./slider.scss"

const Slider = ({ bg, switcher, back, prevNum, nextNum, progress }) => {
    return (
        <footer className="slider">
            <div className="slider__inner">
                <h3 className="slider__slide slider__slide--prev" onClick={() => {
                    document.body.style.background = `url(${bg})`;
                    back();
                }}>{prevNum}</h3>
                <div className="slider__bg">
                    <div id="slider__main" className="slider__main">{document.getElementById("slider__main").style.width = `${progress}`}</div>
                </div>
                <h3 className="slider__slide slider__slide--next" onClick={() => {
                    document.body.style.background = `url(${bg})`;
                    switcher();
                }}>{nextNum}</h3>
            </div>
        </footer>
    )
}

export default Slider