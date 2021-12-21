import React, {Component} from 'react'

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTabOpen: 1
        };
    
        this.onpenTab = this.onpenTab.bind(this);  
    }
    
    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) { 
            acc[i].addEventListener("click", function() {
                var nacc = document.getElementsByClassName("accordion");
                for (var j = 0; j < nacc.length; j++) { 
                    nacc[j].classList.remove("active");
                    nacc[j].nextElementSibling.style.maxHeight = null;
                    nacc[j].nextElementSibling.classList.remove('active');
                }

                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    panel.classList.remove('active');
                } else {
                    // panel.style.maxHeight = panel.scrollHeight + "px";
                    panel.style.maxHeight = "fit-content";
                    panel.classList.add('active');
                } 
            });
        }
    }

    onpenTab( x) { 
        this.setState({isTabOpen:x});   
        var div = document.querySelectorAll('.panel.active .acc-content .tabbody');
        var n = x-1;
        for (let i = 0; i < div.length; i++) {
            const element = div[i];  
              
            if(i == n) {
                element.classList.add('active');
            } 
            else {
                element.classList.remove('active');
            }       
        }        
    }

    render() {
        return(
            <main>
                <div className="sm_container">
                    <h1 className="page-title">Portfolio</h1>
                    <div className="flexbox pf-first-row">
                        <div className="area-item-container">
                            <div className="area-item">
                                <p className="des-text">Average Yields</p>
                                <div className="flex-space">
                                    <p className="des-val">46 %</p> 
                                </div>
                            </div>
                        </div> 
                        <div className="area-item-container">
                            <div className="area-item ">
                                <p className="des-text">Projects</p>
                                <div className="flex-space">
                                    <p className="des-val">5</p> 
                                </div>
                            </div>
                        </div> 
                        <div className="area-item-container">
                            <div className="area-item ">
                                <p className="des-text">Total shares</p>
                                <div className="flex-space">
                                    <p className="des-val">1784</p> 
                                </div>
                            </div>
                        </div> 
                        <div className="area-item-container">
                            <div className="area-item ">
                                <p className="des-text">Total Value</p>
                                <div className="flex-space">
                                    <p className="des-val">154,788</p>
                                    <p className="des-text">VST</p>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <h2 className="page-sector-title">Properties</h2>
                    <div className="sector-item">
                        <div className="sector-accordion accordion acc-top">
                            <div className="img-wrap">
                                <img src="./assets/img/portfolio/img01.png" alt="img" />
                            </div>
                            <div className="tab-right">
                                <p className="acc-title">Tosmur Apartments #8741</p>
                                <div className="flexbox">
                                    <div>
                                        <p className="des-text">APY</p>
                                        <p className="des-val">72 %</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Monthly Yield</p>
                                        <p className="des-val">183 VST</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Total Investment</p>
                                        <p className="des-val">6200 VST</p>
                                    </div>                                     
                                </div>
                            </div>
                            <div className="arr-wrap">
                                <img src="./assets/img/common/select_arrow.png" alt="" />
                            </div>
                        </div>
                        <div className="panel">
                            <div className="acc-content">
                                <div className="acc-tablists">
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 1?"active":"")} onClick={(x) => this.onpenTab(1)}>Details</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 2?"active":"")} onClick={(x) => this.onpenTab(2)}>Bond</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 3?"active":"")} onClick={(x) => this.onpenTab(3)}>Staking</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 4?"active":"")} onClick={(x) => this.onpenTab(4)}>Trade</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 5?"active":"")} onClick={(x) => this.onpenTab(5)}>Update</p>
                                </div>
                                <div className="tabbody active">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">Token Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">2 Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">3</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="trade-content tabody-cont">
                                        <p className="com-text">Number of Shares</p>
                                        <form action="" className="form">
                                            <div className="trade_form_top">
                                                <div className="left">
                                                    <div className="number_inp">
                                                        <input type="number" name="share_num" id="" />
                                                        <p className="max_btn com-text">Max</p>
                                                    </div>
                                                    <div className="percent-list">
                                                        <div className="per_con">
                                                            <p className="percent active">25%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">50%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">75%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">100%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="row flex-space">
                                                        <p className="com-text">Transaction Fees</p>
                                                        <p className="com-val">0.5 %</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Token Price</p>
                                                        <p className="com-val">620 VST</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Total</p>
                                                        <p className="com-val">6480 VST</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trade_form_bottom">
                                                <button type="submit" className="defaultBtn">Limit Order</button>
                                                <button type="submit" className="buyBtn">Sell Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="update-content">
                                        <p className="acc-title">Update</p>
                                        <form className="search-form">
                                            <div className="update-item-container">
                                                <div className="item-container">
                                                    <p className="des-text">Investment Terms</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">1 Year</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                                <div className="item-container">
                                                    <p className="des-text">Risk Factor</p>
                                                    <input type="range" min="0" max="100" defaultValue="50"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Number of Shares</p>
                                                    <input type="text" name="number_shares" defaultValue="10"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Role</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">Class A Investor</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                            </div> 
                                            <button type="submit" className="buyBtn">SAVE</button>
                                        </form>
                                    </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>

                    <div className="sector-item mt_23">
                        <div className="sector-accordion accordion acc-top">
                            <div className="img-wrap">
                                <img src="./assets/img/portfolio/img02.png" alt="img" />
                            </div>
                            <div className="tab-right">
                                <p className="acc-title">Tosmur Apartments #8741</p>
                                <div className="flexbox">
                                    <div>
                                        <p className="des-text">APY</p>
                                        <p className="des-val">72 %</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Monthly Yield</p>
                                        <p className="des-val">183 VST</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Total Investment</p>
                                        <p className="des-val">6200 VST</p>
                                    </div>                                     
                                </div>
                            </div>
                            <div className="arr-wrap">
                                <img src="./assets/img/common/select_arrow.png" alt="" />
                            </div>
                        </div>
                        <div className="panel">
                            <div className="acc-content">
                                <div className="acc-tablists">
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 1?"active":"")} onClick={(x) => this.onpenTab(1)}>Details</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 2?"active":"")} onClick={(x) => this.onpenTab(2)}>Bond</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 3?"active":"")} onClick={(x) => this.onpenTab(3)}>Staking</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 4?"active":"")} onClick={(x) => this.onpenTab(4)}>Trade</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 5?"active":"")} onClick={(x) => this.onpenTab(5)}>Update</p>
                                </div>
                                <div className="tabbody active">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">Token Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">2 Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">3</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="trade-content tabody-cont">
                                        <p className="com-text">Number of Shares</p>
                                        <form action="" className="form">
                                            <div className="trade_form_top">
                                                <div className="left">
                                                    <div className="number_inp">
                                                        <input type="number" name="share_num" id="" />
                                                        <p className="max_btn com-text">Max</p>
                                                    </div>
                                                    <div className="percent-list">
                                                        <div className="per_con">
                                                            <p className="percent active">25%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">50%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">75%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">100%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="row flex-space">
                                                        <p className="com-text">Transaction Fees</p>
                                                        <p className="com-val">0.5 %</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Token Price</p>
                                                        <p className="com-val">620 VST</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Total</p>
                                                        <p className="com-val">6480 VST</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trade_form_bottom">
                                                <button type="submit" className="defaultBtn">Limit Order</button>
                                                <button type="submit" className="buyBtn">Sell Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="update-content">
                                        <p className="acc-title">Update</p>
                                        <form className="search-form">
                                            <div className="update-item-container">
                                                <div className="item-container">
                                                    <p className="des-text">Investment Terms</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">1 Year</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                                <div className="item-container">
                                                    <p className="des-text">Risk Factor</p>
                                                    <input type="range" min="0" max="100" defaultValue="50"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Number of Shares</p>
                                                    <input type="text" name="number_shares" defaultValue="10"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Role</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">Class A Investor</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                            </div> 
                                            <button type="submit" className="buyBtn">SAVE</button>
                                        </form>
                                    </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>

                    <div className="sector-item mt_23">
                        <div className="sector-accordion accordion acc-top">
                            <div className="img-wrap">
                                <img src="./assets/img/portfolio/img03.png" alt="img" />
                            </div>
                            <div className="tab-right">
                                <p className="acc-title">Tosmur Apartments #8741</p>
                                <div className="flexbox">
                                    <div>
                                        <p className="des-text">APY</p>
                                        <p className="des-val">72 %</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Monthly Yield</p>
                                        <p className="des-val">183 VST</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Total Investment</p>
                                        <p className="des-val">6200 VST</p>
                                    </div>                                     
                                </div>
                            </div>
                            <div className="arr-wrap">
                                <img src="./assets/img/common/select_arrow.png" alt="" />
                            </div>
                        </div>
                        <div className="panel">
                            <div className="acc-content">
                                <div className="acc-tablists">
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 1?"active":"")} onClick={(x) => this.onpenTab(1)}>Details</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 2?"active":"")} onClick={(x) => this.onpenTab(2)}>Bond</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 3?"active":"")} onClick={(x) => this.onpenTab(3)}>Staking</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 4?"active":"")} onClick={(x) => this.onpenTab(4)}>Trade</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 5?"active":"")} onClick={(x) => this.onpenTab(5)}>Update</p>
                                </div>
                                <div className="tabbody active">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">Token Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">2 Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">3</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="trade-content tabody-cont">
                                        <p className="com-text">Number of Shares</p>
                                        <form action="" className="form">
                                            <div className="trade_form_top">
                                                <div className="left">
                                                    <div className="number_inp">
                                                        <input type="number" name="share_num" id="" />
                                                        <p className="max_btn com-text">Max</p>
                                                    </div>
                                                    <div className="percent-list">
                                                        <div className="per_con">
                                                            <p className="percent active">25%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">50%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">75%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">100%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="row flex-space">
                                                        <p className="com-text">Transaction Fees</p>
                                                        <p className="com-val">0.5 %</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Token Price</p>
                                                        <p className="com-val">620 VST</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Total</p>
                                                        <p className="com-val">6480 VST</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trade_form_bottom">
                                                <button type="submit" className="defaultBtn">Limit Order</button>
                                                <button type="submit" className="buyBtn">Sell Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="update-content">
                                        <p className="acc-title">Update</p>
                                        <form className="search-form">
                                            <div className="update-item-container">
                                                <div className="item-container">
                                                    <p className="des-text">Investment Terms</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">1 Year</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                                <div className="item-container">
                                                    <p className="des-text">Risk Factor</p>
                                                    <input type="range" min="0" max="100" defaultValue="50"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Number of Shares</p>
                                                    <input type="text" name="number_shares" defaultValue="10"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Role</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">Class A Investor</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                            </div> 
                                            <button type="submit" className="buyBtn">SAVE</button>
                                        </form>
                                    </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>

                    <div className="sector-item mt_23">
                        <div className="sector-accordion accordion acc-top">
                            <div className="img-wrap">
                                <img src="./assets/img/portfolio/img01.png" alt="img" />
                            </div>
                            <div className="tab-right">
                                <p className="acc-title">Tosmur Apartments #8741</p>
                                <div className="flexbox">
                                    <div>
                                        <p className="des-text">APY</p>
                                        <p className="des-val">72 %</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Monthly Yield</p>
                                        <p className="des-val">183 VST</p>
                                    </div>
                                    <div>
                                        <p className="des-text">Total Investment</p>
                                        <p className="des-val">6200 VST</p>
                                    </div>                                     
                                </div>
                            </div>
                            <div className="arr-wrap">
                                <img src="./assets/img/common/select_arrow.png" alt="" />
                            </div>
                        </div>
                        <div className="panel">
                            <div className="acc-content">
                                <div className="acc-tablists">
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 1?"active":"")} onClick={(x) => this.onpenTab(1)}>Details</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 2?"active":"")} onClick={(x) => this.onpenTab(2)}>Bond</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 3?"active":"")} onClick={(x) => this.onpenTab(3)}>Staking</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 4?"active":"")} onClick={(x) => this.onpenTab(4)}>Trade</p>
                                    <p className={"acc-tabBtn des-text " + (this.state.isTabOpen == 5?"active":"")} onClick={(x) => this.onpenTab(5)}>Update</p>
                                </div>
                                <div className="tabbody active">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">Token Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">2 Discount</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="tab_info_container">
                                        <div className="tab_info_list">
                                            <div className="info_item">
                                                <div className="des-text">3</div>
                                                <div className="des-val">10 %</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Current Token Price</div>
                                                <div className="des-val">620 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Investment Terms</div>
                                                <div className="des-val">6 Months</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">NOI</div>
                                                <div className="des-val">17866 VST</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Role</div>
                                                <div className="des-val">Class A</div>
                                            </div>
                                            <div className="info_item">
                                                <div className="des-text">Gross Yield</div>
                                                <div className="des-val">470 VST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="trade-content tabody-cont">
                                        <p className="com-text">Number of Shares</p>
                                        <form action="" className="form">
                                            <div className="trade_form_top">
                                                <div className="left">
                                                    <div className="number_inp">
                                                        <input type="number" name="share_num" id="" />
                                                        <p className="max_btn com-text">Max</p>
                                                    </div>
                                                    <div className="percent-list">
                                                        <div className="per_con">
                                                            <p className="percent active">25%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">50%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">75%</p>
                                                        </div>
                                                        <div className="per_con">
                                                            <p className="percent">100%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="row flex-space">
                                                        <p className="com-text">Transaction Fees</p>
                                                        <p className="com-val">0.5 %</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Token Price</p>
                                                        <p className="com-val">620 VST</p>
                                                    </div>
                                                    <div className="row flex-space">
                                                        <p className="com-text">Total</p>
                                                        <p className="com-val">6480 VST</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trade_form_bottom">
                                                <button type="submit" className="defaultBtn">Limit Order</button>
                                                <button type="submit" className="buyBtn">Sell Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tabbody">
                                    <div className="update-content">
                                        <p className="acc-title">Update</p>
                                        <form className="search-form">
                                            <div className="update-item-container">
                                                <div className="item-container">
                                                    <p className="des-text">Investment Terms</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">1 Year</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                                <div className="item-container">
                                                    <p className="des-text">Risk Factor</p>
                                                    <input type="range" min="0" max="100" defaultValue="50"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Number of Shares</p>
                                                    <input type="text" name="number_shares" defaultValue="10"/>
                                                </div>

                                                <div className="item-container">
                                                    <p className="des-text">Role</p>
                                                    <select name="inverst_term" id="">
                                                        <option value="1">Class A Investor</option>
                                                        <option value="1">2</option>
                                                    </select>
                                                </div>
                                            </div> 
                                            <button type="submit" className="buyBtn">SAVE</button>
                                        </form>
                                    </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Portfolio
