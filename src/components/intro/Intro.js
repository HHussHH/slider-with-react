import "./intro.scss"
const Intro = ({ title, discription }) => {
    return (
        <main className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h3 className="intro__suptitle">OUR VISION</h3>
                    <h1 className="intro__title">{title}</h1>
                    <p className="intro__text">{discription}</p>
                    <a href="#" className="intro__link">Take A Look</a>
                </div>
            </div>
        </main>
    )
}
// document.body.style.background
export default Intro