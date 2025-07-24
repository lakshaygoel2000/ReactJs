import { useState, useEffect } from "react";
import Card from './cards'


const DefectList =()=>{
    const [defects, setDefects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchDefects = async()=>{
            try{
                const response = await fetch('/data/defectData.json')
                if(!response.ok){
                    throw new Error("Failed to fetch data")
                }
                const data = await response.json()
                setDefects(data)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchDefects();

    }, [])

        if (loading) return <div>Loading Defefcts...</div>;
        if (error) return <div>Error: {error}</div>;


    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>Defect Category</td>
                        <td>Defect Descripiton</td>
                        <td>Priority</td>
                        <td>Status</td>
                        <td>Change Status</td>
                    </tr>
                </thead>
                    {defects.map(defect=>(
                        <Card key={defect.Category} defect ={defect}></Card>
                    ))}
            </table>
        </>
    )
}
export default DefectList