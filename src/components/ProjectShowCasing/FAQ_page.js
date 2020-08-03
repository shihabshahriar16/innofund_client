import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFaqToParticularProject} from "../../store/campaignFormSlice";
import produce from "immer";

function FAQ_model() {
    return {
        question: '',
        answers: []
    }
}

const FAQs = ({project}) => {
    const dispatch = useDispatch()
    // const f = FAQ_model();
    // f.question = 'fsldjflsdfj'
    // f.answers = ['sdlfjslf', 'skdlfajl', 'salfjlasdjf']
    const [faqs, setFaqs] = useState(project.faqs)
    console.log(faqs)
    const [newFaq, setNewFaq] = useState(FAQ_model())
    console.log(newFaq)

    const empty = faqs.length === 0
    const handleChange = event => {
        const {name, value} = event.target
        setNewFaq(produce(faq => {
            faq[name] = value
        }))
    }
    const handleSubmitFaq = event => {
        const index = faqs.findIndex(faq => faq.question === newFaq.question)
        if (index < 0) {
            setFaqs(produce(faqs => {
                faqs.push(newFaq)
            }));
            dispatch(addFaqToParticularProject({id: project.id, newFaq}));
            setNewFaq(FAQ_model());
        } else {
            alert('This question is already there. Select a new one')
        }
    }
    return (
        <div>
            {!empty ? faqs.map(faq => (<div id={faq.question}>
                <div>{faq.question}</div>
                <div>{
                    faq.answers.map(answer => (<div key={answer}>{answer}</div>))
                }</div>
            </div>)) : <p>There is currently no faq in this project</p>}
            <span className='row' style={{display: 'flex'}}>
                <input type='text' placeholder='Add a question' value={newFaq.question} onChange={handleChange}
                       name='question' className='col l10' style={{marginRight: '20px'}}/>
                <button onClick={handleSubmitFaq} className='btn-small indigo col l2' style={{height: '45px'}}>Create a FAQ</button>
            </span>
        </div>

    );
};

export default FAQs;
