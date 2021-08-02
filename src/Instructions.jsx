export default function Instructions(){
    const photo = require (`./assets/images/couch.jpg`);
    const photoURL = photo.default;
    const buttonLogo = require (`./assets/images/go-to.png`);
    const buttonLogoURL = buttonLogo.default;

    return(
        <div>
            <h1>Welcome to EIKA!</h1>
            <h2>A shopping list app which helps you to stay organized</h2>
            <div>
                <img src={photoURL} alt="an organge couch with a pink pillow on it and a net with lemons"/>
                <div>
                    <h3>Go to my list</h3>
                    <p>Add shopping items, store and mark them done to archive</p>
                    <img src={buttonLogoURL} alt="a black circle with a white arrow on it"/>
                </div>
            </div>
        </div>
    );
}