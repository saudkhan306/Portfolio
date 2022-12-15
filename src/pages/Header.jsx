let jsonData = require('../data.json');

function Header() {
    return <>
        <div className="preloader__logo">
            <span className="name">
                {
                    jsonData.name_in_array.map((value, index) => (
                        <span key={index}>{value}</span>
                    ))
                }
            </span>
        </div>
        <div className="preloader__section"></div>
        <header>
            <div className="container">
                <div className="subHeader d-flex justify-content-between align-itmes-center">
                    <div className="leftBlock">
                        <div className="logoBlock">
                            <span className="name">
                                {jsonData.name}
                            </span>
                        </div>
                    </div>
                    <div className="leftBlock d-flex align-items-center justify-content-end">
                        <nav className="navigation">
                            <ul className="topMenus d-flex">
                                {
                                    jsonData.menu.map((menu, index) => (
                                        <li key={index}><a number={index} href={menu.link}>{menu.text}</a></li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;