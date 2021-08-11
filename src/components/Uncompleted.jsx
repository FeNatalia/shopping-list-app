export default function Uncompleted({UncompletedItems}){
    
    return (
        <div className="main-page">
            <h1>My shopping list</h1>
            <div className="sorting">
            <p>Sort by:</p>
            <p className="underline">Name</p>
            <p className="underline">Price</p>
            </div>
            {UncompletedItems}
        </div>
    )
}