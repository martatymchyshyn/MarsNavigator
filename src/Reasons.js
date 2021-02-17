import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import "./styles/reasons.sass"


function Reasons() {
    return (
        <section className="root">

            <Container className="container">

                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className="item">
                            <img
                                className="image"
                                src= "https://www.flaticon.com/svg/vstatic/svg/124/124633.svg?token=exp=1613469086~hmac=cd4aea02ea32b34415eb7e5273ea3256"
                                alt="suitcase"
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
                                src="https://www.flaticon.com/svg/vstatic/svg/3885/3885864.svg?token=exp=1613469224~hmac=be1abc6705a722f6f2d7f51e53db5e76"
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
                                src="https://www.flaticon.com/svg/vstatic/svg/3050/3050413.svg?token=exp=1613469294~hmac=34aeb2e238cd59ccc00bf3b1b38be932"
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