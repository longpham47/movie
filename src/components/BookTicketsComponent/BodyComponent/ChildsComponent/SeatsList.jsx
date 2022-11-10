import React, { Component } from 'react'

export default class SeatsList extends Component {

    renderSeatsList = () => {
        return this.props.seatsList.map((seatRow, index) => {
            let { hang } = seatRow;
            return <table key={`table-${index}`} className="table table-borderless mb-0 seat__table">
                <tbody>
                    <tr className='seat__row'>
                        <td className='text-left font-weight-bold'>{hang}</td>
                        {/* Render seat number */}
                        {seatRow.danhSachGhe.map((seatName, index) => {
                            return <td key={`seat-${index}`}>
                                <span onClick={() => {
                                    this.props.addSeat(seatName)
                                }} className='seat'
                                    style={{ background: `${this.props.checkItem(seatName.soGhe)}` }} >
                                    {seatName.soGhe}
                                </span>
                            </td>
                        })}
                    </tr>
                </tbody>
            </table>
        })
    }

    render() {
        return (
            <>
                {/* Seat status */}
                <div className="body__seat__label d-block text-left">
                    <span className='seat__status selected__seat'>Selected Seat</span>
                    <span className='seat__status reserved__seat'>Reserved Seat</span>
                    <span className='seat__status empty__seat'>Empty Seat</span>
                </div>
                {/* Warn label */}
                <div className="body__warn" style={{ display: `${this.props.displayWarnTitle}` }}>
                    <span className='warn__title d-block w-50 mx-auto my-5'>Please Select your Seats NOW!</span>
                </div>
                <div className="body__seats">
                    {this.renderSeatsList()}
                </div>
                {/* Screen label */}
                <div className="body__screen">
                    <span className='screen__label'>screen this way</span>
                </div>
                {/* Confirm button */}
                <div className="body__confirm__btn py-4">
                    <button onClick={() => {
                        this.props.confirmFnc()
                    }} className='btn btn-success'>Confirm Selection</button>
                </div>
            </>

        )
    }
}
