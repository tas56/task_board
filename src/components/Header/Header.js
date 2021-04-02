import Navigation from "./Navigation";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Task Board</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <Navigation />
            </div>

        </nav>
    );
}

export default Header;
