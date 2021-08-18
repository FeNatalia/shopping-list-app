import StaticLogo from "../assets/images/logo.jpg";

export default function Nav() {
  // Only use this kind of imports for images that changes if the parent send me some information as props.
  // Example Nav({theme}) where is theme === "dog", or theme === "cat" we load a dog or cat image.
  // This also allows to skip the logo.default
  const logo = require(`../assets/images/logo.jpg`);
  const logoURL = logo.default;

  return (
    <div className="nav">
      <img src={StaticLogo} alt="" />
    </div>
  );
}
