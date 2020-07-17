import React, { Component } from 'react'
import classnames from "classnames";
import axios from "axios";

export default class ChangePass extends Component {
    constructor() {
        super();
        this.state = {
            passChanged: false,
            password: "",
            password2: "",
            errors: {},
        };
    }
    componentDidMount(){
        console.log(this.props.match.params)
        axios
            .get("/api/email/changepassverify", {params:this.props.match.params})
            .then(res => {
                if(res.data.message !=='success'){
                    this.props.history.push('/')
                }
            }) 
            .catch(err =>{
                //console.log(err)
                this.props.history.push('/')
            });
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    
    onSubmit = e => {
        e.preventDefault();
        if (this.state.password === "") {
            this.setState({ errors: { password: "Password field is required" } })
            return
        }
        if (this.state.password.length <6 || this.state.password.length >30) {
            this.setState({ errors: { password: "Password must be at least 6 characters"} })
            return
        }
        if (this.state.password2 === "") {
            this.setState({ errors: { password2: "Confirm Password field is required" } })
            return
        }
        if (this.state.password !== this.state.password2) {
            this.setState({ errors: { password2: "Passwords do not match" } })
            return
        }
        const userData = {
            token : this.props.match.params.token,
            password: this.state.password
        };
        console.log("in changepass")
        axios
            .get("/api/email/changepass", {params:userData})
            .then(res => {
                console.log(res.data)
                if(res.data.message==="success"){
                    this.setState( {passChanged: true})
                }
                else{
                    this.setState({ errors: { password: "Server Error" ,password2: "Server Error"} })
                }
            }) 
            .catch(err =>{
                console.log(err)
            });
    };
    render() {
        const { errors } = this.state;
        return (
            <div style={{width:"100%"}}>
                {this.state.passChanged? 
                <div style ={{margin:"10%"}}>
                    <h4>Password changed</h4><br/>
                    <h6>You may login with your new password</h6>
                </div>:
                <div style={{ marginTop: "8rem", marginBottom: "8rem" }} className="row">
                    <div className="col s8 offset-s1" style={{ padding: "2%" }} >
                        <h4>
                            Enter new password
                        </h4>
                    </div>
                    <div className="col s8 offset-s1">
                        <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="red-text">{errors.password2}</span>
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
                                    Change Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        )
    }
}