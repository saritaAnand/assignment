import React from 'react';
import './Modal.css';

export default function Modal(props){
    return(
        <div className="modal">
            <header className="modal_header">
                <h1>{props.title}</h1>
            </header>
            <article className="modal_content">{props.children}</article>
            <article className="modal_actions">
                {props.canClose && <button onClick={props.togglePopup}>Close</button>}
            </article>
        </div>
    );
}