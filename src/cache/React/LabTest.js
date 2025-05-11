import { useEffect, useState } from "react";

function LabTest(){
    const [data,setData] = useState([]);
    const [filteredData,setFilterData] = useState([])
    const [search,setSearch] = useState("");

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("/LabTest.json")
            const data = await response.json()
            setData(data)
            setFilterData(data)
            console.log(data);
            
        }
        fetchData()
    },[])
    const filterData = data.filter((item)=>item.test=="covid")
    function set(name){
        const lab = data.find((f)=>f.name==name)
        localStorage.setItem(name,JSON.stringify(lab))
        console.log("lab test added successfully ");
        
        
    }
    function get(name){
        const lab = localStorage.getItem(name)
        console.log(lab);
        
    }
    function remove(name){
        localStorage.removeItem(name)
        console.log(name,"removed successfully");
    }
    function handleSearch(value){
        const searched = data.filter((l)=>
            l.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilterData(searched)
    }
    function handleSort(key){
        const sorted = [...filteredData].sort((a,b)=>{
            if(a[key]<b[key]) return -1;
            if(a[key]>b[key]) return 1;
            return 0;
        })
        setFilterData(sorted);
    }
    return(
        <div>
            <h1>Lab Test Practice</h1>
            <input type="text" placeholder="search by name" value={search} onChange={(e)=>{setSearch(e.target.value);handleSearch(e.target.value)}}/>
            <br/>
            <button onClick={()=>handleSort("name")}>sort by name</button>
            <table border="1px solid black">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Test Type</th>
                    <th>Result</th>
                    <th>Methods</th>
                </tr>
                {filteredData.map((l,i)=>(
                    <tr key={i}>
                        <td>{l.id}</td>
                        <td>{l.name}</td>
                        <td>{l.test}</td>
                        <td>{l.result}</td>
                        <td>
                            <button onClick={()=>{set(l.name)}}>Set</button>
                            <button onClick={()=>{get(l.name)}}>Get</button>
                            <button onClick={()=>remove(l.name)}>Remove</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default LabTest;