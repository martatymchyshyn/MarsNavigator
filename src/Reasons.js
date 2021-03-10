import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import "./styles/reasons.sass";
import analysis from "./img/analysis.png";
import experience from "./img/experience.png";
import leader from "./img/leader.png";

function Reasons() {
    return (
        <section className="root">

            <Container className="container">

                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className="item">
                            <img
                                className="image"
                                src= {analysis}
                                alt="analysis"
                            />
                            <Typography variant="h6" className="title">
                                Strategic
                            </Typography>
                            <Typography variant="h5">
                                {'Mars is the most accessible place in the solar system'}

                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="item">
                            <img
                                className="image"
                                src= {experience}
                                alt="graph"
                            />
                            <Typography variant="h6" className="title">
                                New experiences
                            </Typography>
                            <Typography variant="h5">
                                {'Exploring Mars provides the opportunity to possibly answer origin and evolution of life questions, ' +
                                'and could someday be a destination for survival of humankind '}

                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="item">
                            <img
                                className="image"
                                src= {leader}
                                alt="clock"
                            />
                            <Typography variant="h6" className="title">
                                Leadership
                            </Typography>
                            <Typography variant="h5">
                                {'Discovering demonstrates our political and economic leadership as a nation,' +
                                ' improves the quality of life on Earth'}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>


        </section>
    );
}


export default Reasons;