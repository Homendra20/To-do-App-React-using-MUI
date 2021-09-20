import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


function Listcom(props) {
    const [del,setdel]=useState(false)
const dataDel =()=>{
    setdel(true)
}
    return (
        <div className="list">
            <span onClick={dataDel}>
                <DeleteIcon   /> 
            </span>
            <li style={{textDecoration :  del ? 'line-through' : "none"}}>{props.text}</li>
            
        </div>
    )
}
export default Listcom;