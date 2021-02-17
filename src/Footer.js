import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import './styles//footer.sass'

export default function Footer() {
    return (
        <AppBar align = "center" position="static" color = "inherit">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography align = "center"  variant="body1" >
                        © 2021 Mars Hitchhiker
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}