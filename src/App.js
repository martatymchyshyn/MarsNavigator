import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import '@brainhubeu/react-carousel/lib/style.css';
import { withStyles } from "@material-ui/core/styles";
import './styles//app.sass'
import ProductValues from "./Reasons";
import SingleSelection from "./Select";
import Footer from "./Footer";
import Photos from "./Photo";



const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function App() {
  const [show, setShow] = useState(false)
  const [rover, setRover]= useState('curiosity');
  const [camera, setCamera]= useState('FHAZ');
  const [sol, setSol]= useState(1000);

  return (
      <>
      <AppBar position="fixed" color = "inherit">
        <Container fixed >
          <Toolbar>
            <Typography variant="h5" className= "title">
              Mars Hitchhiker
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
            className="mainFeaturesPost"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80)` }}
        >
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className="mainFeaturesPostContent">
                  <WhiteTextTypography
                      component="h1"
                      variant="h2"
                      color="white"
                      gutterBottom
                  >
                    Mars Exploration Program
                  </WhiteTextTypography>
                  <WhiteTextTypography variant="h5" color="inherit" paragraph>
                    The goal of the Mars Exploration Program is to explore Mars and to provide a continuous
                    flow of scientific information
                  </WhiteTextTypography>
                  <SingleSelection setShow={setShow} show={show} rover={rover} setRover={setRover} camera={camera} setCamera={setCamera} sol={sol} setSol={setSol}/>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
        {show &&
        <Photos rover={rover} camera={camera} sol={sol} />
        }
        <Typography
            className= "typo"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
        >
          Why Mars ?
        </Typography>
        <ProductValues/>
        <Footer/>
    </>
  );
}

export default App;
