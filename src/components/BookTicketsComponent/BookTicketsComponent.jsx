import React, { Component } from 'react'
import BodyComponent from './BodyComponent/BodyComponent'
import FooterComponent from './FooterComponent/FooterComponent'
import HeaderComponent from './HeaderComponent/HeaderComponent'

export default class BookTicketsComponent extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </>
    )
  }
}
