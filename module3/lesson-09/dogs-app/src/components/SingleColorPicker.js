function SingleColorPicker({color, value, onChange}){

    const selectBackgroundColor = (colorValue, val) => {
        if(colorValue === 'r'){
            return 'red'
        }
        else if(colorValue === 'b'){
            return 'blue'
        }
        else if(colorValue === 'g'){
            return 'green'
        }
        else if (colorValue === 'rgb') {
            return `rgb(${val[0]}, ${val[1]}, ${val[2]})`
        }
    }
    return (
        <>
        <div style={{width:'10px', height: '10px', border: '1px solid black', background: `${selectBackgroundColor(color, value)}`}}></div>
        <label>{color.toUpperCase()}</label>
        {typeof value === 'number' ? 
                            <input type="number" value={value} onChange={onChange} /> : 
                            <span>({value[0]}, {value[1]}, {value[2]})</span>
        }
        </>
    )
}

export default SingleColorPicker;