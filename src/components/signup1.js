import React from "react";
import "./signup1.css";

class signup1 extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["emailid"] = "";
      fields["lname"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "*Please enter your first name.";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "*Please enter your last name.";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <form
        method="post"
        name="userRegistrationForm"
        onSubmit={this.submituserRegistrationForm}
      >
        <label> First Name</label>
        <br></br>
        <input
          type="text"
          name="fname"
          value={this.state.fields.fname}
          onChange={this.handleChange}
          placeholder="Jack"
        />
        <div className="error">{this.state.errors.fname}</div>
        <br></br>
        <br></br>
        <label> Last Name</label>
        <br></br>
        <input
          type="text"
          name="lname"
          value={this.state.fields.lname}
          onChange={this.handleChange}
          placeholder="Doe"
        />
        <div className="error">{this.state.errors.lname}</div>
        <br></br>
        <br></br>
        <label>Email ID</label>
        <br></br>
        <input
          type="text"
          name="emailid"
          value={this.state.fields.emailid}
          onChange={this.handleChange}
          placeholder="jack.doe@abc.com"
        />
        <div className="error">{this.state.errors.emailid}</div>
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          value={this.state.fields.password}
          onChange={this.handleChange}
        />
        <div className="error">{this.state.errors.password}</div>
        <br></br>
        <br></br>
        <input type="submit" className="button" value="Sign Up" />
      </form>
    );
  }
}

export default signup1;
