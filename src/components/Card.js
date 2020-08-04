import React from 'react';
import './Card.css';
import CardDetails from './CardDetails'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: '',
            card1: '',
            card2: '',
            card3: '',
            card4: '',
            month: '',
            year: '',
            cvc: '',
            name: '',
            isShow: false
        }
    }

    componentDidMount() {
        let a = [];
        for (let i = 2010; i <= 2050; i++) {
            a.push(i)
        }
        this.setState({
            arr: a
        })
    }


    handelChange = (e) => {
        e.preventDefault();
        let cnt = Number(e.target.id);
        let len = Number(e.target.value.length);
        if (cnt < 4) {
            if (len === 4) {
                cnt++;
                document.getElementById(cnt).focus();
            }
        }

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelKey = (e) => {
        let cnt = Number(e.target.id);
        let len = Number(e.target.value.length);

        if (cnt !== 1) {
            if (e.keyCode === 8 && len === 0) {
                cnt--;
                document.getElementById(cnt).focus()
            }
        }
    }

    handelPaste = e => {
        e.preventDefault();
        let cardCopyVal = e.clipboardData.getData("text/plain");
        let val1 = cardCopyVal.slice(0, 4)
        let val2 = cardCopyVal.slice(4, 8)
        let val3 = cardCopyVal.slice(8, 12)
        let val4 = cardCopyVal.slice(12, 16)

        document.getElementById(1).value = val1;
        document.getElementById(2).value = val2;
        document.getElementById(3).value = val3;
        document.getElementById(4).value = val4;
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        if (this.state.arr.length === 0) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <div className="card-input-box">
                    <form onSubmit={this.handelSubmit}>
                        <label htmlFor="nard-number">CARD NUMBER</label>
                        <div className="card-number">
                            <input type="text" id="1" name="card1" value={this.state.card1} maxLength={4} placeholder=" 0000" onChange={this.handelChange} onKeyDown={this.handelKey} onPaste={this.handelPaste} />
                            <input type="text" id="2" name="card2" value={this.state.card2} maxLength={4} placeholder=" 0000" onChange={this.handelChange} onKeyDown={this.handelKey} />
                            <input type="text" id="3" name="card3" value={this.state.card3} maxLength={4} placeholder=" 0000" onChange={this.handelChange} onKeyDown={this.handelKey} />
                            <input type="text" id="4" name="card4" value={this.state.card4} maxLength={4} placeholder=" 0000" onChange={this.handelChange} onKeyDown={this.handelKey} />
                        </div>
                        <div className="expiry">
                            <div>
                                <label htmlFor="expiry-month/year">EXPIRY MONTH/YEAR</label>
                                <div className="mon-year">
                                    <select name="month" value={this.state.month} onChange={this.handelChange} id="month">
                                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((e, index) => <option key={e} value={index + 1}>{e}</option>)}
                                    </select>
                                    <select name="year" value={this.state.year} onChange={this.handelChange} id="year">
                                        {this.state.arr.map((e) => <option key={e} value={e}>{e}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="cvc">CVC</label>
                                <div>
                                    <input type="text" name="cvc" value={this.state.cvc} onChange={this.handelChange} maxLength={3} id="cvc" placeholder="000" />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="name">CARD HOLDER NAME</label>
                        <div className="name">
                            <input type="text" id="name" name="name" maxLength={25} value={this.state.name} onChange={this.handelChange} placeholder="ENTER NAME AS ON CARD" />
                        </div>
                        <div className="pay">
                            <button type='submit'>Pay</button>
                        </div>
                    </form>
                    {this.state.isShow && <CardDetails data={this.state} />}
                </div>
            )
        }

    }
}
