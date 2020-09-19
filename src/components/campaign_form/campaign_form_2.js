import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import M from "materialize-css";
import {createNewProfitScheme} from "../../store/campaignFormSlice";
//import produce from "immer";
import {profitschemes} from "../../dataModels/Profit_schemes";
import produce from "immer";
//import {projectTypes} from "../../dataModels/ProjectTypes";

const CampaignForm2 = ({project}) => {
    const [team_members, setTeam_members] = useState(project.team_members)
    const [profit_schemes, setProfit_schemes] = useState(project.profit_scheme)
    const [min_pledges, setMin_pledges] = useState(project.min_pledge)
    const [member, setMember] = useState('')
    const [min_pledge, setMin_pledge] = useState('')
    const [selectedSchemeValue, setSelectedSchemeValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        M.FormSelect.init(document.getElementById('profit_scheme'))
    }, [])

    const empty = team_members.length === 0
    const empty_schemes = profit_schemes.length === 0
    const empty_min_pledges = min_pledges.length === 0
    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: Routing kore homePage e jabe if the credentials are correct
    }
    const handleSubmitScheme = event => {
        //project.min_pledge.push(min_pledge)
        //project.profit_scheme.push('scheme')
        setMin_pledges(produce(min_pledges => {
            min_pledges.push(min_pledge)
        }))
        console.log(selectedSchemeValue)
        setProfit_schemes(produce(profit_schemes => {
            profit_schemes.push(selectedSchemeValue)
        }))
    }

    const handleSubmitMember = event => {
        const index = team_members.findIndex(mem => mem === member)
        if (index < 0) {
            setTeam_members(produce(team_members => {
                team_members.push(member)
            }));
            //dispatch(addMemberToParticularProject({id: project.id, member}));
            dispatch(createNewProfitScheme({project_id: project.id, option: selectedSchemeValue, min_pledge: min_pledge}))
            setMember('');
        } else {
            alert('This member is already there. Add a new one')
        }
    }

    const handleChangeMinPledge = (event) => {
        const value = event.target.value;
        setMin_pledge(value)
        // console.log(this.state)
    }
    const handleChangeScheme = (event) => {
        const value = event.target.value;
        setSelectedSchemeValue(value)
        // console.log(this.state)
    }

    return (
        <div>
            <div className="container">
                <h3>Select Your Profit Options</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            {/*{console.log((empty_schemes, empty_min_pledges))}*/}
                            {!empty_schemes ? profit_schemes.map((profit_schemes,index) => (
                                    <div id={profit_schemes} key={profit_schemes.toString()}>
                                        <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>Option {index} : {profit_schemes}</div>
                                    </div>)
                                )
                                :
                                <p className='project_attribute center' style={{fontSize: '30px', marginBottom: '30px'}}>There are
                                    currently no Schemes in this project
                                </p>
                            }

                            {!empty_min_pledges ? min_pledges.map((min_pledges,index) => (
                                    <div id={min_pledges} key={min_pledges.toString()}>
                                        <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>Required Money for option {index} : {min_pledges}</div>
                                    </div>)
                                ) :
                                null
                            }
                        </div>

                        <div className='row' style={{display: 'flex', marginTop: '30px'}}>
                            <label className='row s2 teal-text darken-4' style={{fontWeight: "bold", fontSize: 15}}>Minimum
                                Pledge Money
                                <input className='min pledge money' style={{marginBottom: 50}} type='number'
                                       onChange={handleChangeMinPledge}
                                       value={min_pledge}
                                       name={'min_pledge'}
                                       placeholder='Amount'/>
                            </label>

                            <label className='row s2 teal-text darken-4'
                                   style={{fontWeight: "bold", fontSize: 15}}>Select
                                Project Scheme
                            </label>
                            {/*event => setProfit_schemes(event.target.value)*/}
                            <select id='profit_scheme' value={selectedSchemeValue} onChange={handleChangeScheme} /*onChange={handleChangeScheme}*/>
                                <option value="---">---Select---</option>
                                <option value={profitschemes.ELITE}>{profitschemes.ELITE}</option>
                                <option value={profitschemes.PLATINUM}>{profitschemes.PLATINUM}</option>
                                <option value={profitschemes.DIAMOND}>{profitschemes.DIAMOND}</option>
                                <option value={profitschemes.GOLD}>{profitschemes.GOLD}</option>
                                <option value={profitschemes.SILVER}>{profitschemes.SILVER}</option>
                                <option value={profitschemes.BRONZE}>{profitschemes.BRONZE}</option>
                            </select>
                            <button onClick={handleSubmitScheme} className='btn-small indigo col s2' style={{height: '45px'}}>
                                Add Scheme
                            </button>
                        </div>
                        <br/>
                        <h4>ADD TEAM MEMBERS</h4>
                        <br/>
                        {!empty ? team_members.map((members, index) => (
                                <div id={members} key={index}>
                                    <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>{members}</div>
                                </div>)
                            ) :
                            <p className='project_attribute center' style={{fontSize: '30px', marginBottom: '30px'}}>There are
                                currently no team members in this project
                            </p>
                        }
                        <div className='row' style={{display: 'flex', marginTop: '30px'}}>
                            <input type='text' placeholder='FULL NAME' value={member} onChange={event => setMember(event.target.value)}
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
                            className="btn btn-large waves-effect waves-light hoverable indigo darken-1">Create
                    </button>
                </form>
            </div>
        </div>
    );


}

export default CampaignForm2;