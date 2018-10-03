import React from 'react';

class Eleve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName
    };
  }
  render() {
    return (
      <div className="col-4 card">
        <img
          class="card-img-top"
          src="https://via.placeholder.com/350x150"
          alt={this.state.firstName}
        />
        <div class="card-body">
          <p class="card-text">
            {this.state.firstName} {this.state.lastName}
          </p>
        </div>
      </div>
    );
  }
}
export default Eleve;
