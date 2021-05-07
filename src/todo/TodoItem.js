import React from 'react'
import PropTypes from 'prop-types'



function TodoItem({todo, index }) {
    return <li className='listi'>
        <span>
            <input type='checkbox' className='yesOrno' />
            <strong>{index + 1 }</strong>
            &nbsp;
            {todo.title}
        </span>

        <button className='rm'>&times;</button>

        </li>
}

TodoItem.propTypes = {
    TodoItem: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem