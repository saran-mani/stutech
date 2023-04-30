import { Component } from "react";
import { Link } from "react-router-dom";
export class FirstYearSem extends Component {
    state = {};
    render() {
      return (
        <>
          <div className="container">
          <ul>
           <Link to=""> <li><a href="#a">1st sem</a></li></Link>
           <Link to=""> <li><a href="#a">2nd sem</a></li></Link>
          </ul>
        </div>
        </>
      );
    }
  }
  