import React, { Component } from "react";
import Highlight from "react-highlight";
import './new.css'
class Highh extends Component {

  state = {};
  render() {
    return (
      <>
      <div className="codee">
         <Highlight language="Python">
          {`def factorial(x):
    """This is a recursive function
    to find the factorial of an integer"""

    if x == 1:
        return 1
    else:
        return (x * factorial(x-1))


num = 3
print("The factorial of", num, "is", factorial(num))`}
        </Highlight>
      </div>
       
      </>
    );
  }
}

export default Highh;
