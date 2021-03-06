import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onSubmit}) => {
    return (
        <div>
            <p className='f3 b white'>
                {'Import an image that you want to detect demographic information of a person.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className ='f4 pa2 w-70 center' type='text' onChange ={onInputChange}></input>
                    <button onClick={onSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-red'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;