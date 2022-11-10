import React, { Component } from 'react'
import './BodyStyling/BodyStyling.css'
import '../../../js/disabledScrollEvent.js'
import SeatsList from './ChildsComponent/SeatsList'
import InputFormComponent from './ChildsComponent/InputFormComponent'
import ResultTableComponent from './ChildsComponent/ResultTableComponent'

export default class BodyComponent extends Component {

  seatsList = [
    {
      "hang": "",
      "danhSachGhe": [
        { "soGhe": "1", "gia": 0 },
        { "soGhe": "2", "gia": 0 },
        { "soGhe": "3", "gia": 0 },
        { "soGhe": "4", "gia": 0 },
        { "soGhe": "5", "gia": 0 },
        { "soGhe": "6", "gia": 0 },
        { "soGhe": "7", "gia": 0 },
        { "soGhe": "8", "gia": 0 },
        { "soGhe": "9", "gia": 0 },
        { "soGhe": "10", "gia": 0 },
        { "soGhe": "11", "gia": 0 },
        { "soGhe": "12", "gia": 0 }
      ]
    }
    ,
    {
      "hang": "A",
      "danhSachGhe": [
        { "soGhe": "A1", "gia": 75000, "daDat": false },
        { "soGhe": "A2", "gia": 75000, "daDat": false },
        { "soGhe": "A3", "gia": 75000, "daDat": false },
        { "soGhe": "A4", "gia": 75000, "daDat": false },
        { "soGhe": "A5", "gia": 75000, "daDat": false },
        { "soGhe": "A6", "gia": 75000, "daDat": false },
        { "soGhe": "A7", "gia": 75000, "daDat": false },
        { "soGhe": "A8", "gia": 75000, "daDat": false },
        { "soGhe": "A9", "gia": 75000, "daDat": false },
        { "soGhe": "A10", "gia": 75000, "daDat": false },
        { "soGhe": "A11", "gia": 75000, "daDat": false },
        { "soGhe": "A12", "gia": 75000, "daDat": false }
      ]
    },
    {
      "hang": "B",
      "danhSachGhe": [
        { "soGhe": "B1", "gia": 75000, "daDat": false },
        { "soGhe": "B2", "gia": 75000, "daDat": false },
        { "soGhe": "B3", "gia": 75000, "daDat": false },
        { "soGhe": "B4", "gia": 75000, "daDat": false },
        { "soGhe": "B5", "gia": 75000, "daDat": false },
        { "soGhe": "B6", "gia": 75000, "daDat": false },
        { "soGhe": "B7", "gia": 75000, "daDat": false },
        { "soGhe": "B8", "gia": 75000, "daDat": false },
        { "soGhe": "B9", "gia": 75000, "daDat": false },
        { "soGhe": "B10", "gia": 75000, "daDat": false },
        { "soGhe": "B11", "gia": 75000, "daDat": false },
        { "soGhe": "B12", "gia": 75000, "daDat": false }
      ]
    },
    {
      "hang": "C",
      "danhSachGhe": [
        { "soGhe": "C1", "gia": 75000, "daDat": false },
        { "soGhe": "C2", "gia": 75000, "daDat": false },
        { "soGhe": "C3", "gia": 75000, "daDat": false },
        { "soGhe": "C4", "gia": 75000, "daDat": false },
        { "soGhe": "C5", "gia": 75000, "daDat": false },
        { "soGhe": "C6", "gia": 75000, "daDat": false },
        { "soGhe": "C7", "gia": 75000, "daDat": false },
        { "soGhe": "C8", "gia": 75000, "daDat": false },
        { "soGhe": "C9", "gia": 75000, "daDat": false },
        { "soGhe": "C10", "gia": 75000, "daDat": false },
        { "soGhe": "C11", "gia": 75000, "daDat": false },
        { "soGhe": "C12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "D",
      "danhSachGhe": [
        { "soGhe": "D1", "gia": 75000, "daDat": false },
        { "soGhe": "D2", "gia": 75000, "daDat": false },
        { "soGhe": "D3", "gia": 75000, "daDat": false },
        { "soGhe": "D4", "gia": 75000, "daDat": false },
        { "soGhe": "D5", "gia": 75000, "daDat": false },
        { "soGhe": "D6", "gia": 75000, "daDat": false },
        { "soGhe": "D7", "gia": 75000, "daDat": false },
        { "soGhe": "D8", "gia": 75000, "daDat": false },
        { "soGhe": "D9", "gia": 75000, "daDat": false },
        { "soGhe": "D10", "gia": 75000, "daDat": false },
        { "soGhe": "D11", "gia": 75000, "daDat": false },
        { "soGhe": "D12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "E",
      "danhSachGhe": [
        { "soGhe": "E1", "gia": 75000, "daDat": false },
        { "soGhe": "E2", "gia": 75000, "daDat": false },
        { "soGhe": "E3", "gia": 75000, "daDat": false },
        { "soGhe": "E4", "gia": 75000, "daDat": false },
        { "soGhe": "E5", "gia": 75000, "daDat": false },
        { "soGhe": "E6", "gia": 75000, "daDat": false },
        { "soGhe": "E7", "gia": 75000, "daDat": false },
        { "soGhe": "E8", "gia": 75000, "daDat": false },
        { "soGhe": "E9", "gia": 75000, "daDat": false },
        { "soGhe": "E10", "gia": 75000, "daDat": false },
        { "soGhe": "E11", "gia": 75000, "daDat": false },
        { "soGhe": "E12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "F",
      "danhSachGhe": [
        { "soGhe": "F1", "gia": 75000, "daDat": false },
        { "soGhe": "F2", "gia": 75000, "daDat": false },
        { "soGhe": "F3", "gia": 75000, "daDat": false },
        { "soGhe": "F4", "gia": 75000, "daDat": false },
        { "soGhe": "F5", "gia": 75000, "daDat": false },
        { "soGhe": "F6", "gia": 75000, "daDat": false },
        { "soGhe": "F7", "gia": 75000, "daDat": false },
        { "soGhe": "F8", "gia": 75000, "daDat": false },
        { "soGhe": "F9", "gia": 75000, "daDat": false },
        { "soGhe": "F10", "gia": 75000, "daDat": false },
        { "soGhe": "F11", "gia": 75000, "daDat": false },
        { "soGhe": "F12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "G",
      "danhSachGhe": [
        { "soGhe": "G1", "gia": 75000, "daDat": false },
        { "soGhe": "G2", "gia": 75000, "daDat": false },
        { "soGhe": "G3", "gia": 75000, "daDat": false },
        { "soGhe": "G4", "gia": 75000, "daDat": false },
        { "soGhe": "G5", "gia": 75000, "daDat": false },
        { "soGhe": "G6", "gia": 75000, "daDat": false },
        { "soGhe": "G7", "gia": 75000, "daDat": false },
        { "soGhe": "G8", "gia": 75000, "daDat": false },
        { "soGhe": "G9", "gia": 75000, "daDat": false },
        { "soGhe": "G10", "gia": 75000, "daDat": false },
        { "soGhe": "G11", "gia": 75000, "daDat": false },
        { "soGhe": "G12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "H",
      "danhSachGhe": [
        { "soGhe": "H1", "gia": 75000, "daDat": false },
        { "soGhe": "H2", "gia": 75000, "daDat": false },
        { "soGhe": "H3", "gia": 75000, "daDat": false },
        { "soGhe": "H4", "gia": 75000, "daDat": false },
        { "soGhe": "H5", "gia": 75000, "daDat": false },
        { "soGhe": "H6", "gia": 75000, "daDat": false },
        { "soGhe": "H7", "gia": 75000, "daDat": false },
        { "soGhe": "H8", "gia": 75000, "daDat": false },
        { "soGhe": "H9", "gia": 75000, "daDat": false },
        { "soGhe": "H10", "gia": 75000, "daDat": false },
        { "soGhe": "H11", "gia": 75000, "daDat": false },
        { "soGhe": "H12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "I",
      "danhSachGhe": [
        { "soGhe": "I1", "gia": 75000, "daDat": false },
        { "soGhe": "I2", "gia": 75000, "daDat": false },
        { "soGhe": "I3", "gia": 75000, "daDat": false },
        { "soGhe": "I4", "gia": 75000, "daDat": false },
        { "soGhe": "I5", "gia": 75000, "daDat": false },
        { "soGhe": "I6", "gia": 75000, "daDat": false },
        { "soGhe": "I7", "gia": 75000, "daDat": false },
        { "soGhe": "I8", "gia": 75000, "daDat": false },
        { "soGhe": "I9", "gia": 75000, "daDat": false },
        { "soGhe": "I10", "gia": 75000, "daDat": false },
        { "soGhe": "I11", "gia": 75000, "daDat": false },
        { "soGhe": "I12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "J",
      "danhSachGhe": [
        { "soGhe": "J1", "gia": 75000, "daDat": false },
        { "soGhe": "J2", "gia": 75000, "daDat": false },
        { "soGhe": "J3", "gia": 75000, "daDat": false },
        { "soGhe": "J4", "gia": 75000, "daDat": false },
        { "soGhe": "J5", "gia": 75000, "daDat": false },
        { "soGhe": "J6", "gia": 75000, "daDat": false },
        { "soGhe": "J7", "gia": 75000, "daDat": false },
        { "soGhe": "J8", "gia": 75000, "daDat": false },
        { "soGhe": "J9", "gia": 75000, "daDat": false },
        { "soGhe": "J10", "gia": 75000, "daDat": false },
        { "soGhe": "J11", "gia": 75000, "daDat": false },
        { "soGhe": "J12", "gia": 75000, "daDat": false }
      ]
    }

  ]

  state = {
    userName: '',
    numberOfSeat: 0,
    seatsArr: [],
    confirmSelected: false,
    displayWarnTitle: 'none',
    // test: ''
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  confirmInput = () => {
    let { userName, numberOfSeat } = this.state;
    if (userName === '' || numberOfSeat === 0) {
      alert('Please input valid data !');
    } else {
      this.setState({
        displayWarnTitle: 'block'
      })
    }
  }

  checkItem = (value) => {
    for (let i = 0; i < this.state.seatsArr.length; i++) {
      if (value === this.state.seatsArr[i].soGhe) {
        return '#ff9800'
      }
    }
  }

  addSeat = (seat) => {
    if (this.state.displayWarnTitle === 'block') {
      let { numberOfSeat, seatsArr } = this.state;
      // Check seat is exist seatsArr ?
      for (let i = 0; i < seatsArr.length; i++) {
        if (seat === seatsArr[i]) {
          seatsArr.pop(seat);
        }
      }
      if (seatsArr.length < numberOfSeat) {
        seatsArr.push(seat);
        this.setState({
          seatsArr: [...seatsArr],
        })
        this.checkItem(seat)
      } else {
        let tempArr = seatsArr.splice(0, numberOfSeat);
        this.setState({
          seatsArr: tempArr
        })
      }
    }
  }

  confirmFnc = () => {
    let { displayWarnTitle } = this.state;
    if (displayWarnTitle === 'block') {
      this.setState({
        confirmSelected: true
      })
    }
  }

  totalPrice = () => {
    let amountPrice = 0;
    this.state.seatsArr.map((item) => {
      amountPrice += item.gia;
    })

    return amountPrice;
  }



  render() {
    return (
      <div className='book-tickets__body'>
        <div className="body__content">
          <div id='content__form' className="card container mx-auto my-5">
            <div className="card-body">

              {/* Input form */}
              <InputFormComponent confirmInput={this.confirmInput} handleChange={this.handleChange} />

              {/* Seats List */}
              <SeatsList displayWarnTitle={this.state.displayWarnTitle} seatsList={this.seatsList} addSeat={this.addSeat} checkItem={this.checkItem} confirmFnc={this.confirmFnc} />

              <ResultTableComponent userName={this.state.userName} numberOfSeat={this.state.numberOfSeat} seatsArr={this.state.seatsArr} confirmSelected={this.state.confirmSelected} totalPrice = {this.totalPrice}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
