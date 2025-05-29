import React,{useState} from "react";

function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");
    const colorChange = (event) =>{
        setColor(event.target.value)
    }
    return(
        <div className="mainDiv">
            <h1>Color Picker</h1>
            <div className="secDiv" style={{backgroundColor:color}}><p>Selected Color: {color}</p></div>
            <label>Select a Color: </label>
    <input type="color" onChange={colorChange}></input>
    </div>);
}
export default ColorPicker;