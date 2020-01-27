import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationList from './components/LocationList';
import ForecastExtended from "./components/ForecastExtended";
import './App.css';

const cities = [
  'Mexico City,mx',
  'Bogota,col',
  'Buenos Aires,ar',
  'Kansas City,us',
  'Madrid,es',
  'Lima,pe'
];

class App extends Component {

  constructor() {
    super();
    // Solamente los states se generan en el constructor, en otros lugares hay que utilizar this.SetState()
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {

    // Una buena práctica es usar destructuring para enviar parámetros a componentes
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="subtitle1" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
            cities={cities}
            onSelectedLocation={this.handleSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                { 
                  city && <ForecastExtended city={ city } >
                  </ForecastExtended> 
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
