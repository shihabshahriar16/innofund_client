import React, {Component} from 'react';
import M from 'materialize-css'

class CrowdfundSelect extends Component {
    state = this.props.state;

    componentDidMount() {
        const element = document.getElementById('select_');
        M.FormSelect.init(element, {});
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <form className='col s12'>
                    <div className='row'>
                        <div className="input-field col s6">
                            <input id="first_name" type="text" value={this.state.projectName} name='projectName'
                                   className="validate" onChange={this.handleChange}/>
                            <label htmlFor="first_name">Your Project Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6 input-field">
                            <select id='select_'>
                                <option value="" disabled selected>What type of Crowdfunding ?</option>
                                <option value="1">Equity-Based</option>
                                <option value="2">Rewards-based</option>
                                <option value="3">Profit-sharing</option>
                            </select>
                        </div>
                    </div>
                    <button style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable indigo darken-1">Next
                    </button>
                </form>
            </div>
        );
    }
}

export default CrowdfundSelect;