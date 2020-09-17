import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import M from "materialize-css";
import {addCommentToParticularProject, createCampaign} from "../../store/campaignFormSlice";
//import produce from "immer";
import {profitschemes} from "../../dataModels/Profit_schemes";
import produce from "immer";
//import {projectTypes} from "../../dataModels/ProjectTypes";

const CampaignForm2 = ({project}) => {
    const [team_members, setTeam_members] = useState(project.team_members)
    const [member, setMember] = useState('')
    const [min_pledge, setMin_pledge] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        M.FormSelect.init(document.getElementById('profit_scheme'))
    }, [])

    const empty = team_members.length === 0
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(project)
        project.min_pledge.push(min_pledge)
        dispatch(createCampaign(project))
        //TODO: Routing kore homePage e jabe if the credentials are correct
    }

    const handleSubmitMember = event => {
        const index = team_members.findIndex(mem => mem === member)
        if (index < 0) {
            setTeam_members(produce(team_members => {
                team_members.push(member)
            }));
            dispatch(addCommentToParticularProject({id: project.id, member}));
            setMember('');
        } else {
            alert('This member is already there. Add a new one')
        }
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setMin_pledge(value)
        // console.log(this.state)
    }

    return (
        <div>
            <div className="container">
                <h3>Select Your Profit Options</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='row s2 teal-text darken-4' style={{fontWeight: "bold", fontSize: 15}}>Minimum
                            Pledge Money
                            <input className='min pledge money' style={{marginBottom: 50}} type='number'
                                   onChange={handleChange}
                                   value={min_pledge}
                                   name={'min_pledge'}
                                   placeholder='Minimum Pledge Money'/>
                        </label>

                        <label className='row s2 teal-text darken-4'
                               style={{fontWeight: "bold", fontSize: 15}}>Select
                            Project Scheme
                        </label>

                        <select id='profit_scheme'>
                            <option value={profitschemes.ELITE}>{profitschemes.ELITE}</option>
                            <option value={profitschemes.PLATINUM}>{profitschemes.PLATINUM}</option>
                            <option value={profitschemes.DIAMOND}>{profitschemes.DIAMOND}</option>
                            <option value={profitschemes.GOLD}>{profitschemes.GOLD}</option>
                            <option value={profitschemes.SILVER}>{profitschemes.SILVER}</option>
                            <option value={profitschemes.BRONZE}>{profitschemes.BRONZE}</option>
                        </select>
                        <br/>
                        <h4>ADD TEAM MEMBERS</h4>
                        <br/>
                        {!empty ? team_members.map(members => (
                                <div id={members}>
                                    <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>{members}</div>
                                </div>)
                            ) :
                            <p className='project_attribute center' style={{fontSize: '30px', marginBottom: '30px'}}>There are
                                currently no team members in this project
                            </p>
                        }
                        <div className='row' style={{display: 'flex', marginTop: '30px'}}>
                            <input type='text' placeholder='Username' value={member} onChange={event => setMember(event.target.value)}
                                   name='name' className='col s10' style={{marginRight: '20px'}}/>
                            <button onClick={handleSubmitMember} className='btn-small indigo col s2' style={{height: '45px'}}>
                                Add member
                            </button>
                        </div>


                    </div>

                    <button style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "3rem"
                    }}
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable indigo darken-1">Next
                    </button>
                </form>
            </div>
        </div>
    );


}

export default CampaignForm2;