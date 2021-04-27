import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import "./styles/select.sass"
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";



const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const cameras = [
    {
        value:'FHAZ',
        name:'Front Hazard Avoidance Camera',
        rover:['curiosity']
    },
    {
        value:'RHAZ',
        name:'Rear Hazard Avoidance Camera',
        rover:['curiosity']
    },

    {
        value:'NAVCAM',
        name:'Navigation Camera',
        rover:['curiosity', 'opportunity', 'spirit']
    },
    {
        value:'PANCAM',
        name:'Panoramic Camera',
        rover:['opportunity', 'spirit']
    },
    {
        value:'CHEMCAM',
        name:'Chemistry and Camera Complex',
        rover:['curiosity']
    },
    ]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0,0,1,0),
            width: '25ch',
            background: "white",
            border: "2px"
        },
    },
    multilineColor:{
        color:'black'
    }

}));

const SingleSelection=(props) =>{
    const classes = useStyles();

    const{setShow, show, rover, setRover, camera, setCamera, sol, setSol} = props;

    const handleShow = () => {
        setShow(true);
    }

    const select1Select = (e)=>{
        setShow(false);
        setRover(e.target.value);
    }
    const select2Select = (e)=>{
        setShow(false);
        setCamera(e.target.value);
    }
    const select3Select = (e)=>{
        setShow(false);
        setSol(e.target.value);
    }
    const filterCameras=()=>{
        let arr=[];
        for(let i =0;i<cameras.length;i++){
            if(cameras[i].rover.includes(rover)){
                arr.push(cameras[i])
            }
        }
        return arr;
    }

    return (
        <>
            <Button onClick={handleShow} variant="contained" color="secondary" className="btn">
                Find Photos
            </Button>
        <div className = "select" >
            <InputLabel className = "InputLabel" id="label1"> <WhiteTextTypography>Rover</WhiteTextTypography></InputLabel>
            <Select className = "options"  labelId="label" id="select1" value={rover} onChange={select1Select}>
                <MenuItem  value="curiosity">Curiosity</MenuItem>
                <MenuItem value="opportunity">Opportunity</MenuItem>
                <MenuItem value="spirit">Spirit</MenuItem>
            </Select>
            <InputLabel className = "InputLabel" id="label2"><WhiteTextTypography>Camera</WhiteTextTypography></InputLabel>
            <Select className = "options" labelId="label" id="select2" value={camera} onChange={select2Select}>
                {filterCameras().map(camera=>(
                    <MenuItem  value={camera.value}>{camera.name} </MenuItem>
                ))}
            </Select>
            <InputLabel className = "InputLabel" id="label3"><WhiteTextTypography>Sol</WhiteTextTypography></InputLabel>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    rowsMax={2}
                    value={sol}
                    onChange={select3Select}

                    InputProps={{
                        className: classes.multilineColor
                    }}
                />
            </form>

        </div>




        </>
    );
}

export default SingleSelection;