import { Component } from "react";
import './ComponentItem.css'
export class SelectYear extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
        <ul>
            <li><a href="semester/1styear.html">1st Year</a></li>
            <li><a href="">2nd Year</a></li>
            <li><a href="">3rd Year</a></li>
            <li><a href="">4th Year</a></li>
        </ul>
    </div>
        );
    }
}

export class Sem extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <ul>
            <li>
              <a href="">1st sem</a>
            </li>
            <li>
              <a href="">2nd sem</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
