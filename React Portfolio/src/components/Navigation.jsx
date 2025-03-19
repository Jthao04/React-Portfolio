import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg bg-secondary pb-0 fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Jethro Thao
                </a>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={currentPage === '/Portfolio' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={currentPage === '/Contact' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            className={currentPage === '/Resume' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;