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
    const [newAnswer, setNewAnswer] = useState('')
    const addAnswer = (event, faq) => {
        console.log(faq)
        setFaqs(produce(faqs => {
            const toChange = faqs.find(fa => fa.question === faq.question)
            toChange.answers.push(newAnswer)
        }))
        setNewAnswer('')
    }
    return (
        <div>
            {!empty ? faqs.map(faq => (<div id={faq.question}>
                <div>{faq.question}</div>
                <div>{
                    faq.answers.map(answer => (<div key={answer}>{answer}</div>))
                }</div>
                <input type='text' placeholder='Add Answer' value={newAnswer} onChange={event => setNewAnswer(event.target.value)}/>
                <button className='btn-small' onClick={(event) => addAnswer(event, faq)}>Add an Answer</button>
            </div>)) : <p className='project_attribute center' style={{fontSize: '30px', marginBottom: '30px'}}>There is
                currently no faq in this project</p>}
            <div className='row' style={{display: 'flex'}}>
                <input type='text' placeholder='Add a question' value={newFaq.question} onChange={handleChange}
                       name='question' className='col s10' style={{marginRight: '20px'}}/>
                <button onClick={handleSubmitFaq} className='btn-small indigo col s2' style={{height: '45px'}}>Create a
                    FAQ
                </button>
            </div>

        </div>

    );
};

export default FAQs;
