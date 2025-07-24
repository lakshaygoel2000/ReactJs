import DefectList from "./DefectList";

function DefectDetails(){
    return (
    <>
    <div className="Output-Container">
        <div>
            <h1>Defect Tracker</h1>
            <p>Track defects in your application</p>
            <button>Logout</button>
            <button>Add Defect</button>
            <button>View Defect</button>
            <DefectList />
        </div>
    </div>
    </>
    )
}
export default DefectDetails;