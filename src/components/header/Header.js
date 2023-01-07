import "./header.scss"
import img from "../../img/header/icon.svg";
import icon1 from "../../img/header/theme.svg";
import icon2 from "../../img/header/search.svg";


const headerLinks = ["Home", "Stories", "Works", "Pages", "Contact", "Shop"]
const headerLink = headerLinks.map((item, i) => {
    return (
        <li className="header__nav-link" key={i}>
            <a href="#">{item}</a>
        </li>
    )
})




const Header = () => {


    return (
        <nav className="header">
            <div className="container">
                <div className="header__inner">
                    <img src={img} alt="" />
                    <ul className="header__nav">
                        {headerLink}
                    </ul>
                    <nav className="header__helpers">
                        <button className="header__theme">
                            <img src={icon1} alt="123" />
                        </button>
                        <button className="header__search">
                            <img src={icon2} alt="123" />
                        </button>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default Header