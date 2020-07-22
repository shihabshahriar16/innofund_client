import React, {Component} from 'react';
import M from 'materialize-css'

class CrowdfundSelect extends Component {
    componentDidMount() {
        const element = document.getElementById('select_');
        const instance = M.FormSelect.init(element, {});
    }

    render() {
        return (
            <div>
                <form className='col s12'>
                    <div className='row'>
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"/>
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
                            <label>Materialize Select</label>
                        </div>
                    </div>
                    <div className='row'>
                        <button className="btn btn-primary col s2">Next</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default CrowdfundSelect;