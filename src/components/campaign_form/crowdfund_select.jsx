import React, {Component} from 'react';

class CrowdfundSelect extends Component {
    render() {
        return (
            <div className='container'>
                <div className='form-field col'>
                    <div className="input-field col s12">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>

                    <div className="input-field col s12">
                        <select multiple>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Multiple Select</label>
                    </div>

                    <div className="input-field col s12">
                        <select multiple>
                            <optgroup label="team 1">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </optgroup>
                            <optgroup label="team 2">
                                <option value="3">Option 3</option>
                                <option value="4">Option 4</option>
                            </optgroup>
                        </select>
                        <label>Optgroups</label>
                    </div>

                    <div className="input-field col s12 m6">
                        <select className="icons">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="" data-icon="images/sample-1.jpg" className="circle">example 1</option>
                            <option value="" data-icon="images/office.jpg" className="circle">example 2</option>
                            <option value="" data-icon="images/yuna.jpg" className="circle">example 1</option>
                        </select>
                        <label>Images in select</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <select className="icons">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="" data-icon="images/sample-1.jpg" className="left circle">example 1</option>
                            <option value="" data-icon="images/office.jpg" className="left circle">example 2</option>
                            <option value="" data-icon="images/yuna.jpg" className="left circle">example 3</option>
                        </select>
                        <label>Images in select</label>
                    </div>

                    <label>Browser Select</label>
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default CrowdfundSelect;