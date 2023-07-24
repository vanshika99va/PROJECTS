import React from 'react';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { makeStyles } from '@material-ui/styles';


// const useStyles = makeStyles({
//     root:{
//         border:'none'
//     }
// });

const cardstyles = {
    container:{
        // width:"350px",
        margin:"8px",
        padding:"8px 16px",
        border: "1px solid black", 
        borderRadius:"8px"
    },
    image:{},
    title:{},
    subtitle:{
        color:"gray"
    }

}



const Cards = (props) =>{
    // console.log(props);

    const {name,email,address} = props.user;
    const {id}=props.id;
    const initials = name ? name.charAt(0) : "";
    // const classes= useStyles();

    return <div style={cardstyles.container} key={id}>
        <Accordion 
        // classes={{root: classes.root}}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Avatar alt={name}> {initials}</Avatar>
        <div>
        <h1 style={cardstyles.title}> {name}</h1>
        <h2 style={cardstyles.subtitle}>{email.toLowerCase()}</h2>
        </div>        </AccordionSummary>
        <AccordionDetails>
          <p>Address: {address.suite +" "+ address.street },{" "+address.city}</p>
        </AccordionDetails>
      </Accordion>

        
    </div>
}




export default Cards;

