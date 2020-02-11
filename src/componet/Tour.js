import React, { Component } from 'react'
import {ToursData} from './ToursData'

export default class Tours extends Component {
    constructor(props){
        super(props);
         this.state(
            {
                Data:ToursData
            }
         )
        }
    
    render() {
        // const{name}=this.state.Data;
        return (
            <div>
                  <h4>Tours</h4>
                  {this.state.Data}
                  
            </div>
        )
    };
};
