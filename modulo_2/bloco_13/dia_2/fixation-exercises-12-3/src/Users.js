import React, { Component } from 'react';

  class Users extends Component {
    render() {
      const {
        greetingMessage = 'Hi There',
        match: { params: { id }
      } } = this.props;

      return (
        <main>
          <h2> Users </h2>
          {/* <p> { greetingMessage }, this is my awesome Users component </p> */}
          <p>
            { `${greetingMessage} User ${id}` }, this is my awesome Users component
          </p>
        </main>
      );
    }
  }

  export default Users;

// import React from 'react';

// const Users = ({ greetingMessage = 'Hi There', match }) => (
//   <div>
//     <h2> Users </h2>
//     <p> {greetingMessage}, this is my awesome Users component </p>
//     <p>ID: {match.params.id}</p>
//   </div>
// );

// export default Users;


/*
import React from 'react';

const Users = ({ greetingMessage = 'Hi There' }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
  </div>
);

export default Users;
*/
