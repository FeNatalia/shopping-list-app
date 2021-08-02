export default function Nav(){
    const logo = require (`./assets/images/logo.jpg`);
    const logoURL = logo.default;

    return (
        <img src={logoURL} alt=""/>
    );
}