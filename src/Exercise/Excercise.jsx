import { Component } from "react";
import {  Link } from "react-router-dom";
export class Excercise extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <ul>
           <Link to="/ex1"> <li><a href="#a">Exercise1</a></li></Link>
           <Link to="/ex2"> <li><a href="#a">Exercise2</a></li></Link>
          </ul>
        </div>
      </>
    );
  }
}

export class Ex1 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX1</p>
        <h1>This is Excersise 1</h1>
      </>
    );
  }
}
export class Ex2 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX1</p>
        <h1>This is Excersise 2</h1>
      </>
    );
  }
}
export class Ex3 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX1</p>
      </>
    );
  }
}
export class Ex4 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX4</p>
      </>
    );
  }
}
export class Ex5 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX5</p>
      </>
    );
  }
}
export class Ex6 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX6</p>
      </>
    );
  }
}
export class Ex7 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>EX7</p>
      </>
    );
  }
}
