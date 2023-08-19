import {useState} from 'react'
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker(){
    const [rValue, setRValue] = useState(0)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)

    return(
        <>
            <SingleColorPicker color={"r"} value={rValue}  onChange={(e) => setRValue(Number(e.target.value))}/>
            <SingleColorPicker color={"g"} value={gValue}  onChange={(e) => setGValue(Number(e.target.value))} />
            <SingleColorPicker color={"b"} value={bValue}  onChange={(e) => setBValue(Number(e.target.value))}/>
            {/* <SingleColorPicker color={"rgb"} value={[rValue, gValue, bValue]} onChange={null}/> */}
            <div style={{width: '10px', height: '10px', background: `rgb(${rValue}, ${gValue}, ${bValue})`}}>
                
            </div>
        </>
    )
}

export default RGBColorPicker;