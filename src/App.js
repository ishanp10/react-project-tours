import React, { Component } from 'react';
import './App.scss';
import Navbar from './componet/Navbar/Navbar';
import TourList from './componet/TourList/Index';

export default class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>
      <TourList/>
    </React.Fragment>
    )
  }
}
