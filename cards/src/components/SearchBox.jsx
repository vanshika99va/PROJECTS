import React from "react";
import { TextField } from "@mui/material";

const style = {
    container:{
        display:"flex",
        justifyContent:"center",
    }
}

const SearchBox = (props) =>{
    const {searchedValue, handleSearch} = props;
    return(
    <div style={style.container}>
    <TextField id="outlined-basic" label="search users" variant="outlined" value={searchedValue} onChange={handleSearch}/>
    </div> 
    )
}

export default SearchBox;