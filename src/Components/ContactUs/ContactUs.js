import React from "react";

class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
  };
  handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value }, function () {
      console.log(this.state);
    });

    console.log("After SetState");
  };
  validateTheForm = () => {
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let passwordErr = "";
    if (this.state.firstName.length < 4) {
      firstNameErr = "firstName should be minimum of 4 characters";
    }
    if (this.state.lastName.length < 4) {
      lastNameErr = "lastName should be minimum of 4 characters";
    }
    if (!this.state.email.includes("@")) {
      emailErr = "Please Enter a valid email";
    }
    if (this.state.password.length < 6) {
      passwordErr = "password should be minimum of 6 characters";
    }

    if (firstNameErr || lastNameErr || emailErr || passwordErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr, passwordErr });
    } else {
      this.setState({ firstNameErr, lastNameErr, emailErr, passwordErr });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.validateTheForm();
    // console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="form-group mt-5" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={`${
              this.state.firstNameErr
                ? "border border-danger border-1 mb-2 form-control"
                : "mb-2 form-control"
            }`}
            placeholder="Enter your First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.firstNameErr}</p>
          <input
            type="text"
            className="mb-2 form-control"
            placeholder="Enter your last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <span className="text-danger">{this.state.lastNameErr}</span>

          <input
            type="email"
            className="mb-2 form-control"
            placeholder="Enter your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <span className="text-danger">{this.state.emailErr}</span>

          <input
            type="password"
            className="mb-2 form-control"
            placeholder="Enter your password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <span className="text-danger">{this.state.passwordErr}</span>

          <button type="submit" className="btn btn-primary d-block">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default ContactUs;
