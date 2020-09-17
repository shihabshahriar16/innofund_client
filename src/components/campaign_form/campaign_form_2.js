import ProjectModel from "../../dataModels/ProjectModel";
import {useDispatch} from "react-redux";
import M from "materialize-css";
import {createCampaign} from "../../store/campaignFormSlice";
import produce from "immer";
import {profitschemes} from "../../dataModels/ProfitSchemes";

const CampaignForm2 = (props) => {
    const [project, setProject] = useState(props.project)
    const [min_pledge, setmin_pledge] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        M.FormSelect.init(document.getElementById('project_type'))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(project)
        dispatch(createCampaign(project))
        //TODO: Routing kore homePage e jabe if the credentials are correct
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setmin_pledge(produce(min_pledge, draft => {
            draft[name] = value
        }))
        project.min_pledge.push(value)
        // console.log(this.state)
    }

    return (
        <div>
            <div className="container">
                <h3>Select Your Profit Options</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <select id='profit_scheme'>
                            <option value={profitschemes.ELITE}>{profitschemes.ELITE}</option>
                            <option value={profitschemes.PLATINUM}>{profitschemes.PLATINUM}</option>
                            <option value={profitschemes.DIAMOND}>{profitschemes.DIAMOND}</option>
                            <option value={profitschemes.GOLD}>{profitschemes.GOLD}</option>
                            <option value={profitschemes.SILVER}>{profitschemes.SILVER}</option>
                            <option value={profitschemes.BRONZE}>{profitschemes.BRONZE}</option>
                        </select>

                        <label className='row s2 teal-text darken-4' style={{fontWeight: "bold", fontSize: 15}}>Minimum Pledge Money
                            <input className='min pledge money' style={{marginBottom: 50}} type='number'
                                   onChange={handleChange}
                                   value={min_pledge}
                                   name={'min_pledge__money'}
                                   placeholder='Minimum Pledge Money'/>
                        </label>
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