function Footer() {
    return (
        <footer className="container text-center py-5">
            <div className="d-flex justify-content-center">
                <a
                    className="icon-link mx-3"
                    href="https://github.com/Jthao04/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className="bi bi-github"
                        style={{ fontSize: '2rem', color: 'white' }} // Set the icon color to white
                    ></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;