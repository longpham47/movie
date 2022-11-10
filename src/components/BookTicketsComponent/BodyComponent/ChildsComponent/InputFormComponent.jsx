import React, { Component } from 'react'

export default class InputFormComponent extends Component {
    render() {
        return (
            <>
                
                {/* Input fields */}
                <div className="form-group body__input__fields">
                    <div className="row">
                        <div className="col-md-8">
                            <label className='d-block text-left font-weight-bold' htmlFor="name__input">Name <span className='text-danger'>*</span></label>
                            <input onChange={(event) => {
                                let { name, value } = event.target;
                                this.props.handleChange(name, value);
                            }} id='name__input' name='userName' type="text" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label className='d-block text-left font-weight-bold' htmlFor="number__seat__input">Number of Seats <span className='text-danger'>*</span></label>
                            <input onChange={(event) => {
                                let { name, value } = event.target;
                                this.props.handleChange(name, value);
                            }} id='number__seat__input' name='numberOfSeat' type="number" min={1} className="form-control" />
                        </div>
                    </div>
                </div>
                {/* Action button */}
                <div className="body__select__btn py-3">
                    <button onClick={() => {
                        this.props.confirmInput()
                    }} className='btn btn-info text-left d-block'>Start Selecting</button>
                </div>
            </>
        )
    }
}
