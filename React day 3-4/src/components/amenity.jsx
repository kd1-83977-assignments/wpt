import { useState } from "react"


function Amenity({ icon, title, onChange}){
    const [checked,setChecked] = useState(false)
    return <div>
        <input onChange={(e)=>{
            setChecked(e.target.checked)
            onChange(e.target.checked) //By calling onChange(e.target.checked),
            // the component enables two-way communication: it updates its own state and informs
            // its parent component about the change, maintaining a coherent state across both.
        } }type="checkbox" className="me-2" />
      <i className={'me-2 bi ' + icon} style={{ fontSize: 20 }} />
            <span>{title}</span>
    </div>
}

export default Amenity