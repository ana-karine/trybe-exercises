// https://www.freecodecamp.org/learn/front-end-libraries/react/


// 1) Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;


// 2) Create a Complex JSX Element
const JSX = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>; 


// 3) Add Comments in JSX
const JSX = 
  <div>
  {/*
    h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  */}
  </div>;


// 4) Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));


// 5) Define an HTML Class in JSX
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);


// 6) Learn About Self-Closing JSX Tags
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


// 7) Create a Stateless Functional Component
// Note: think of a stateless component as one that can receive data and render it,
// but does not manage or track changes to that data
const MyComponent = function() {
  // Change code below this line
return (
    <div>Completed challenge!</div>
);
  // Change code above this line
}


// 8) Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};


// 9) Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
<ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
