import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addFaqToParticularProject, addWholeFaqList} from "../../store/campaignFormSlice";
import produce from "immer";
//import {useImmer} from "use-immer";

function FAQ_model() {
    return {
        question: '',
        answers: []
    }
}

const FAQs = ({project}) => {
    const [newFaq, setNewFaq] = useState(() => FAQ_model())
    const [faqs, setFaqs] = useState(() => project.faqs)
    const dispatch = useDispatch()
    const empty = faqs.length === 0

    useEffect(() => {
        dispatch(addWholeFaqList({id: project.id, faqs}))
    }, [faqs])

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
            alert('This question is already there. Add a new one')
        }
    }

    const addAnswer = (faq, newAns, setNewAns) => {
        console.log(faqs)
        setFaqs(produce(faqs => {
                faqs.forEach(f => {
                    if (f.question === faq.question) {
                        f.answers.push(newAns)
                    }
                })
            })
        )
        setNewAns('')
    }
    return (
        <div>
            {!empty ? faqs.map(faq => {
                return (<div id={faq.question}>
                    <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>{faq.question}</div>
                    <div>{
                        faq.answers.map(answer => (<li style={{fontSize: '15px', color: '#19ca99', fontWeight: 'bold'}}
                                                       key={answer}>{answer}</li>))
                    }</div>
                    {/*<input type='text' placeholder='Add Answer' value={newAnswer}*/}
                    {/*       onChange={event => setNewAnswer(event.target.value)}/>*/}
                    {/*<button type='submit' className='btn-small' onClick={(event) => addAnswer(faq)}>Add an Answer</button>*/}
                    <AddAnswer addAnswer={addAnswer} faq={faq}/>
                </div>)
            }) : <p className='project_attribute center' style={{fontSize: '30px', marginBottom: '30px'}}>There is
                currently no FAQ in this project</p>}
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


const AddAnswer = ({addAnswer, faq}) => {
    const [newAns, setNewAns] = useState(() => '')
    return <div className='row' style={{display: 'flex'}}>
        <input type='text' placeholder='Add Answer' value={newAns}
               onChange={event => setNewAns(event.target.value)} className='col s9 offset-l1' style={{marginRight: '20px'}}/>
        <button type='submit' className='btn-small col s2' onClick={(event) => addAnswer(faq, newAns, setNewAns)}>Add an Answer</button>
    </div>
}
