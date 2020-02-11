import React, { Component } from 'react';
import Tour from '../Tours';
import './TourList.scss';
import {tourData} from '../../tourData'; //currly bresses to represnt in side of object or class and '..' => it is represent the folder inside .js files


export default class TourList extends Component {
    state={
            tours:tourData
        }
           removeTour=(id)=>{
            //  console.log(id); 
            const {tours} =this.state;
            const sortedTour=tours.filter(item=>item.id!== id);
           this.setState(
               {
                   tours:sortedTour
               }
           )

        }
    
    render() {
        const {tours}=this.state;
        // console.log(this.state.tours);
        return (
          
            <section className="tourList">
            {tours.map((tour)=>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour}> </Tour>))}
               {/* key-> attribute it represnet the id , tour-> attribute it represent the all tour properties it tour it a properties and removeTour-> it represent the method and remvoe the id*/}
            </section>
            
        )
    }
}
