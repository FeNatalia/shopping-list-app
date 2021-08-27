export default function ButtonToggle({toggleCompletedList, onClick}){
    return (
        <div>
            <button
            className="button-secondary"
            onClick={onClick}
          >
            {toggleCompletedList === false
              ? "View completed items"
              : "Hide completed items"}
          </button>
        </div>
    )
}