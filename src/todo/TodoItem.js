import React from 'react'
import PropTypes from 'prop-types'



function TodoItem({todo, index, onChange }) {
    const classes = []

if (todo.complited){
    classes.push('done')
}

    return <li className='listi'>
        <span className={classes.join(' ')}>
            <input type='checkbox' checked={todo.complited} className='yesOrno' onChange={()=> onChange (todo.id)} />
            <strong>{index + 1 }</strong>
            &nbsp;
            {todo.title}
        </span>

        <button className='rm'>&times;</button>

        </li>
}

TodoItem.propTypes = {
    TodoItem: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem