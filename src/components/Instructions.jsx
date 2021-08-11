import photo from "../assets/images/couch.jpg";

export default function Instructions(){

    return(
        <div className="main-page">
            <div className="main-header">
                <h1>Welcome to EIKA!</h1>
                <h3>A shopping list app which helps you to stay organized</h3>
            </div>
            <div className="card">
                <div className="card-upper">
                <img src={photo} alt="an orange couch with a pink pillow on it and a net with lemons"/>
                </div>
                <div className="card-bottom">
                    <h2>Start now</h2>
                    <p>Add shopping items by clicking the button below, store and mark them done to archive</p>
                </div>
            </div>
        </div>
    );
}