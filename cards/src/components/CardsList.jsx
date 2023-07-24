import React from "react";
import Cards from "./Cards";

const style = {
    container:{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
    }
}

const CardsList = (props) =>{
    // console.log(props);
    const {filteredUsers} = props;
    console.log(filteredUsers);
    return (
        <div style={style.container}>
        {
            filteredUsers.map( user => <Cards user={user} id={user.id}/>)
        }
        </div>
    )
}

export default CardsList;