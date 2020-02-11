import React, { Component } from 'react';
import './Tours.scss'


export default class Tours extends Component {
  state={
      infoSet:false
  }

handleInfo=()=>{
  this.setState(
      {   
          infoSet:!this.state.infoSet
          }
  )
}

    render() {
        const {id,city,img,name,info}=this.props.tour;
        const{removeTour}=this.props;
        // console.log(this.props);
        return (
            // <div>
            //   <h4>Tours component call</h4>  
            // </div>
            <article className="tour">
                <div className="img-container">
                <img src={img} alt="imager the for tours" />
                <span className="close-btn" onClick={()=>removeTour(id)}>
                <i class="fas fa-window-close"></i>          
                </span>

                </div>
                <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                info{" "}
                <span onClick={this.handleInfo}>
                <i className="fas fa-caret-square-down"></i>                
                </span>
                </h5>
                {/* <p>{this.state.infoSet && info}</p> */}
                {this.state.infoSet && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
