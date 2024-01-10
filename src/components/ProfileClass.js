import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor " + this.props.name);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("Child DID MOUNT " + this.props.name);

    const data = await fetch("https://api.github.com/users/arun023");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return 0;
  }

  render() {
    console.log("Count", this.state.count);
    console.log("Child Render " + this.props.name);
    return (
      <div>
        Hello
        <div>{this.state.userInfo.name}</div>
        <div>{this.state.userInfo.location}</div>
        <div>
          <img src={this.state.userInfo.avatar_url} />
        </div>
      </div>
    );
  }
}

export default ProfileClass;
