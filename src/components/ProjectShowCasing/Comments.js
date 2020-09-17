import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCommentToParticularProject, createNewComment} from "../../store/campaignFormSlice";
import produce from "immer";

export function Comment_Model() {
    return {
        user_id: '',
        comment: '',
        timestamp: ''
    }
}

const Comments = ({project}) => {
    const dispatch = useDispatch()
    const [comments, setComments] = useState(project.comments)
    console.log(comments)
    const [comment, setComment] = useState('')
    console.log(comment)

    const user_id_for_comment = useSelector(state => state.auth.user.id)
    // console.log(user_id_for_comment)

    const empty = comments.length === 0
    const handleSubmitComment = event => {
        const index = comments.findIndex(com => com === comment)
        if (index < 0) {
            const com_model = Comment_Model();
            com_model.user_id = user_id_for_comment
            com_model.comment = comment
            com_model.timestamp = Date.now().toString()
            setComments(produce(comments => {
                comments.push(com_model)
            }));
            dispatch(addCommentToParticularProject({id: project.id, com_model}));
            //TODO: submit to database
            dispatch(createNewComment({project_id: project.id, user_id: user_id_for_comment, comment, timestamp: com_model.timestamp}))
            setComment('');
        } else {
            alert('This comment is already there. Add a new one')
        }
        console.log(comments)
    }
    //const [newAnswer, setNewAnswer] = useState('')

    return (
        <div>
            {!empty ? comments.map(comment_object => (
                    <div id={comment_object}>
                        <span className="new badge red">{comment_object.user_id}</span>
                        <div className='name_font' style={{fontSize: '20px', color: 'indigo'}}>{comment_object.comment}</div>
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
