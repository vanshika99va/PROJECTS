import React, {useState} from "react";
import { Slider } from "@mui/material";

const PageSlider = ({itemsPerPage, handleSliderChange}) => {

    const getAriaValueText = (value) => {
        return `Current value is ${value}`;
      };

    return(
        <div style={{width:"200px", display:"flex", justifyItems:'center', marginLeft:'300px'}}>
        <Slider 
            value = {itemsPerPage}
            onChange = {handleSliderChange}
            getArialValueText={getAriaValueText}
            steps = {1}
            marks
            min ={1}
            max = {10}
            valueLabelDisplay="auto"
            defaultValue={5}
        />
        </div>
    )
}

export default PageSlider;