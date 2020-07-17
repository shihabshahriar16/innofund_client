import React, { Component } from 'react'
import classnames from "classnames";
import axios from "axios";

export default class ForgotPass extends Component {
    constructor() {
        super();
        this.state = {
            status: "",
            name: "",
            email: "",
            errors: {},
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.name === "") {
            this.setState({ errors: { name: "Name field is required" } })
            return
        }
        if (this.state.email === "") {
            this.setState({ errors: { email: "Email field is required" } })
            return
        }
        const userData = {
            name: this.state.name,
            email: this.state.email
        };
        //console.log(JSON.stringify(userData));
        //console.log("In forgotpassemail")
        axios
            .get("/api/email/forgotpass", { params: userData })
            .then(res => {
                //console.log(res.data)
                this.setState({ status: res.data.message })
            })
            .catch(err => {
                console.log(err)
                this.setState({ errors: { message: "Username or email is incorrect" } })
            });

    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div style={{ marginTop: "8rem", marginBottom: "8rem" }} className="row">
                    <div className="col s8 offset-s1" style={{ padding: "2%" }} >
                        <h4>
                            Please verify your Username and Email
                        </h4>
                        <div>
                            We will send an email to reset your password<br />
                            Please open the email and click on the given link
                        </div>
                        <div className='red-text'>Note that the link will expire in a short time</div>
                        <br/>
                        <span className='teal-text'>{this.state.status}</span>
                    </div>
                    <div className="col s8 offset-s1">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name || errors.message
                                    })}
                                />
                                <label htmlFor="name">Username</label>
                                <span className="red-text">
                                    {errors.name}
                                    {errors.message}
                                </span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email || errors.message
                                    })}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.message}
                                </span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable teal darken-1"
                                >
                                    Verify
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}