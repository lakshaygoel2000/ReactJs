const Cards=({defect})=>{
    return(
        <>
        <tbody>

            <tr>
                <td>{defect.Category}</td>
                <td>{defect.Description}</td>
                <td>{defect.Priority}</td>
                <td>{defect.Status}</td>
                <td>                            
                    <button onClick={()=>{changeStatus(defect)}}>{defect.Status=="open"? 'Close Defect' : 'No Action Pending'}</button>
                </td>
            </tr>
        </tbody>
        </> 
    )
}
const changeStatus = (defect) => {
  if (defect.Status === "Open") {
    defect.Status = "Closed";
    }
    
    else {
        defect.Status = "Open";
        }
        console.log(defect);
};
export default Cards