// this is class Based Component
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    
  }
  render() {
    return (
      <div className="user-card">
        <h1>count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button>
        <h1>name: {this.props.name}</h1>
        <h3>Location: Seattle, WA</h3>
        <h3>mailto: sreekanth@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
