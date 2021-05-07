import React from 'react'
import './modal.css'

export default class Modal extends React.Component{

    state = {
        isOpen: false
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={() =>this.setState({isOpen: true })}>open</button>

                {this.state.isOpen && (<div className='modal'>
                    <div className='modal-body'>
                    <h1>Why do you open?</h1>
                    <p>what do you need</p>
                    <button onClick={() =>this.setState({isOpen: false })}>close</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}