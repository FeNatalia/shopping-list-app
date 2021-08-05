export default function Instructions(){
    const photo = require (`./assets/images/couch.jpg`);
    const photoURL = photo.default;
    const buttonLogo = require (`./assets/images/go-to.png`);
    const buttonLogoURL = buttonLogo.default;

    return(
        <div className="main-page">
            <div className="main-header">
                <h1>Welcome to EIKA!</h1>
                <h3>A shopping list app which helps you to stay organized</h3>
            </div>
            <div className="card">
                <div className="card-upper">
                <img src={photoURL} alt="an organge couch with a pink pillow on it and a net with lemons"/>
                </div>
                <div className="card-bottom">
                    <h2>Start now</h2>
                    <p>Add shopping items in a form below, store and mark them done to archive</p>
                    {/*<img src={buttonLogoURL} alt="a black circle with a white arrow on it"/>*/}
                </div>
            </div>
        </div>
    );
}