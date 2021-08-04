export default function Nav(){
    const logo = require (`./assets/images/logo.jpg`);
    const logoURL = logo.default;

    return (
        <div className="nav">
        <img src={logoURL} alt=""/>
        </div>
    );
}