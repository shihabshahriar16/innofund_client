import React, {useState} from 'react';
import {useDispatch, } from "react-redux";
import {addCommentToParticularProject} from "../../store/campaignFormSlice";
import produce from "immer";

// function FAQ_model() {
//     return {
//         question: '',
//         answers: []
//     }
// }

const Comments = ({project}) => {
    const dispatch = useDispatch()
    const [comments, setComments] = useState(project.comments)
    console.log(comments)
    const [comment, setComment] = useState('')
    console.log(comment)

    const empty = comments.length === 0
    const handleSubmitComment = event => {
        const index = comments.findIndex(com => com === comment)
        if (index < 0) {
            setComments(produce(comments => {
                comments.push(comment)
            }));
            dispatch(addCommentToParticularProject({id: project.id, comment}));
            setComment('');
        } else {
            alert('This comment is already there. Add a new one')
        }
    }
    //const [newAnswer, setNewAnswer] = useState('')
    return (
        <div>
            {!empty ? comments.map(comment => (
                    <div id={comment}>
                        <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>{comment}</div>
                    </div>)
                ) :
                <p className='project_attribute center' style={{fontSize: '30px', marginBottom: '30px'}}>There is
                    currently no comment in this project
                </p>
            }
            <div className='row' style={{display: 'flex', marginTop: '30px'}}>
                <input type='text' placeholder='Add a comment' value={comment} onChange={event => setComment(event.target.value)}
                       name='question' className='col s10' style={{marginRight: '20px'}}/>
                <button onClick={handleSubmitComment} className='btn-small indigo col s2' style={{height: '45px'}}>Add a
                    comment
                </button>
            </div>

        </div>

    );
};

export default Comments;
