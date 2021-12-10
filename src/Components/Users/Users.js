import React from "react";
import hook from "../../assets/Images/react-hooks.jpg";

class Users extends React.Component {
  constructor() {
    super();
    console.log("Constructor Called");
  }
  state = {
    users: [],
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[User.js] getDerived State From Props is called");
    return props;
  }
  fetchUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    this.setState({ users: data });
  };
  componentDidMount() {
    console.log("Component Did Mount");
    this.fetchUsersData();
  }

  render() {
    console.log("[user.js] render method is called");
    console.log(this.state);
    return (
      <div>
        <h1>List Of Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Image  React Hooks */}
        {/* <img width={200} height={200} src={hook} alt="hook" /> */}
      </div>
    );
  }
}
export default Users;
