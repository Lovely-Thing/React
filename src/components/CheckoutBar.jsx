import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CheckoutBar extends Component {
     
    constructor(props) {
        super(props); 

        this.state = {
            
        };
 
    } 
 


    render() {
        return(
            <> 
                <div className="checkout_bar_container">
                    <div className="ch-tabBtnlist">
                        <p className="chTab active">Buy</p>
                        <p className="chTab">Sell</p>
                    </div>
                    <div className="ch-tab">
                        <p className="com-text">Number of Shares</p>
                        <div className="inp_wrap">
                            <input type="text" name="number" defaultValue="10" className="ch_share_num"/>
                        </div>
                        <p className="com-text mt_30">Staking Time</p>
                        <div>
                            <select name="stakingTime" id="" className="stakingTime">
                                <option value="6 Months">6 Months</option>
                                <option value="6 Months">6 Months</option>
                                <option value="6 Months">6 Months</option>
                            </select>
                        </div>
                        <div className="row flex-space mt_30">
                            <p className="com-text">Monthly Yield</p>
                            <p className="com-val">183 VST</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">APY</p>
                            <p className="com-val">72 %</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">Token Price</p>
                            <p className="com-val">620 VST</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">Gross Yield</p>
                            <p className="com-val">470 VST</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">Total Investment</p>
                            <p className="com-val">6200 VST</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">Service Fees</p>
                            <p className="com-val">0.5 %</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">Discounts</p>
                            <p className="com-val">10 %</p>
                        </div>
                        <div className="row flex-space">
                            <p className="com-text">Total</p>
                            <p className="com-val">6480 VST</p>
                        </div>
                        <Link to="" className="buyBtn">Connect your Wallet</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default CheckoutBar
