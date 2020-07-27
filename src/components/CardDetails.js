import React, { Component } from 'react';
import './CardDetails.css'

export default class CardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        let { card1, card2, card3, card4, month, year, cvc, name } = this.state.data
        let cardNumber = card1 + card2 + card3 + card4
        return (
            <div className="">
                <label htmlFor="">CARD NUMBER </label> {cardNumber}
                <br />
                <label htmlFor="">Month </label> {month}
                <br />
                <label>Year </label> {year}
                <br />
                <label htmlFor="">CVC </label> {cvc}
                <br />
                <label htmlFor="">Name</label> {name}
            </div>
        )
    }
}
