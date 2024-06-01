import { useState } from "react";
import axios from "axios";

const DataForm = () => {
    const [name  , setName] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/api/data/add',{name,value});
        setName('');
        setValue('');
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  />
            </div>
            <div>
                <label>Value: </label>
                <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />
            </div>
            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default DataForm
