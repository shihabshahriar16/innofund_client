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
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>

                    <div className="input-field">
                        <select id='select_'>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrowdfundSelect;