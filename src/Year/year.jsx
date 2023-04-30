import { Component } from "react";
import './ComponentItem1.css'
import { Link } from "react-router-dom";
export class SelectYear extends Component {
    state = {  } 
    render() { 
        return (
        <div className="container">
          <ul>
           <Link to="/first-year"> <li><a href="#a">1st Year</a></li></Link>
           <Link to="/second-year"> <li><a href="#a">2nd Year</a></li></Link>
           <Link to="/third-year"> <li><a href="#a">3rd Year</a></li></Link>
           <Link to="/fourth-year"> <li><a href="#a">4th Year</a></li></Link>
          </ul>
        </div>
    
        );
    }
}