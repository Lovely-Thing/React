import React, {Component} from 'react'
import Sidebar from '../components/Sidebar'
import CheckoutBar from '../components/CheckoutBar'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTabOpen: 1, 
            mainImg:'./assets/img/projects/img01.png',
            deMainImg:'./assets/img/projects/de01.png'
        };
    
        this.openTab = this.openTab.bind(this); 
        this.setImg = this.setImg.bind(this);
        this.setDeImg = this.setDeImg.bind(this);
    }

    openTab(x) {
        this.setState({isTabOpen:x});
    }    

    setImg(e) {
        this.setState({mainImg:e.target.src}); 
    }

    setDeImg(e) {
        this.setState({deMainImg:e.target.src}); 
    }

    render() {
        return(
            <main className="has_side_check">
                <div className="sm_container has-sidebar has-checkout">
                    <div className="img-wrap slider-main">
                        <img src={this.state.mainImg} alt="main images" />
                    </div>
                    <div className="img-list-wrap mt_35">
                        <div className="img-wrap">
                            <img src="./assets/img/projects/img02.png" alt="main images" onClick={(e) => this.setImg(e)}/>
                        </div>
                        <div className="img-wrap">
                            <img src="./assets/img/projects/img03.png" alt="main images" onClick={(e) => this.setImg(e)}/>
                        </div>
                        <div className="img-wrap">
                            <img src="./assets/img/projects/img04.png" alt="main images" onClick={(e) => this.setImg(e)}/>
                        </div>
                        <div className="img-wrap">
                            <img src="./assets/img/projects/img05.png" alt="main images" onClick={(e) => this.setImg(e)}/>
                        </div>
                    </div>
                    <h1 className="page-title mt_55 mb_15">XStairship Apartments</h1>    
                    <div className="flexbox">
                        <p className="des-text-m">Poperty ID: </p>
                        <p className="des-text-m ml_20">5734</p>
                        <img src="./assets/img/common/heart.png" className="ml_40 heart" alt="heart" />
                        <img src="./assets/img/common/vot.png" className="ml_30 vot" alt="heart" />
                    </div>   

                    <div className="tab-btns flexbox">
                        <p className={"btn-title " + (this.state.isTabOpen == 1?"active":"")} onClick={(x) => this.openTab(1)}>Overview</p>
                        <p className={"btn-title " + (this.state.isTabOpen == 2?"active":"")} onClick={(x) => this.openTab(2)}>Properties</p>
                    </div>      

                    <div className="tab-container">
                        <div className={"tab " + (this.state.isTabOpen == 1?"active":"")}>
                            <p className="tab-title">About This Plan</p>
                            <div className="tab-content">
                                This stunning barndominium-style house plan has a barn-like exterior with board and batten siding, large windows, and barn doors. Just inside the side entry of the home, you'll find a practical office that is perfect for anyone who works from home.
                                <br /><br />
                                The great room, kitchen, and dining room flow seamlessly in a wide open layout. The high ceilings in the great room make the space feel massive. A fireplace warms the great room and is flanked by bult-in bookshelves. The kitchen includes a large island and a walk-in pantry.
                                <br /><br />
                                The master suite is situated on the right side of the home for privacy. The master bathroom includes a soaking tub, his/her vanities, an enclosed toilet, and a walk-in shower. The master closet has convenient access to the laundry room. 
                                On the left side of the home, bedrooms 2 and 3 share a centrally located hall bathroom with the main living area. An amazing loft overlooks the great room.
                                <br /><br />
                                The home's large 3 car garage has a high cathedral ceiling and accesses the home through a mud room that includes a bench and lockers.
                            </div>
                        </div>

                        <div className={"tab " + (this.state.isTabOpen == 2?"active":"")}>
                            <p className="tab-title">Property of This Plan</p>
                            <div className="tab-content">
                                This stunning barndominium-style house plan has a barn-like exterior with board and batten siding, large windows, and barn doors. Just inside the side entry of the home, you'll find a practical office that is perfect for anyone who works from home.
                                <br /><br />
                                The great room, kitchen, and dining room flow seamlessly in a wide open layout. The high ceilings in the great room make the space feel massive. A fireplace warms the great room and is flanked by bult-in bookshelves. The kitchen includes a large island and a walk-in pantry.
                                <br /><br />
                                The master suite is situated on the right side of the home for privacy. The master bathroom includes a soaking tub, his/her vanities, an enclosed toilet, and a walk-in shower. The master closet has convenient access to the laundry room. 
                                On the left side of the home, bedrooms 2 and 3 share a centrally located hall bathroom with the main living area. An amazing loft overlooks the great room.
                                <br /><br />
                                The home's large 3 car garage has a high cathedral ceiling and accesses the home through a mud room that includes a bench and lockers.
                            </div>
                        </div>
                    </div>

                    <div className="project_sector_list mt_75">
                        <p className="project_sector_title">Floor Plans</p>
                        <div className="img-wrap slider-main">
                            <img src={this.state.deMainImg} alt="main images" />
                        </div>
                        <div className="img-list-wrap mt_35">
                            <div className="img-wrap">
                                <img src="./assets/img/projects/de02.png" alt="main images" onClick={(e) => this.setDeImg(e)}/>
                            </div>
                            <div className="img-wrap">
                                <img src="./assets/img/projects/de03.png" alt="main images" onClick={(e) => this.setDeImg(e)}/>
                            </div>                         
                        </div>
                        <p className="project_sector_title mt_75">Attributes</p>
                        <div className="attributes_sector">
                            <div className="sub_sect_container">
                                <p className="sub_sector_title">Square Footage Breakdown</p>
                                <div className="row">
                                    <p className="com-text">Total Heated Area:</p>
                                    <p className="com-val">2,810 sq. ft.</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">1st Floor</p>
                                    <p className="com-val">2,297 sq. ft.</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">2nd Floor</p>
                                    <p className="com-val">513 sq. ft.</p>
                                </div>
                                <hr />

                                <p className="sub_sector_title">Dimensions</p>
                                <div className="row">
                                    <p className="com-text">Width</p>
                                    <p className="com-val">56' 0"</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Depth</p>
                                    <p className="com-val">64' 0"</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Max Ridge Height</p>
                                    <p className="com-val">31' 0"</p>
                                </div>
                                <hr />
                                <p className="sub_sector_title">Beds/Baths</p>
                                <div className="row">
                                    <p className="com-text">Bedrooms</p>
                                    <p className="com-val">3</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Full Bathrooms</p>
                                    <p className="com-val">2</p>
                                </div> 
                            </div>
                            <div className="sub_sect_container">
                                <p className="sub_sector_title">Square Footage Breakdown</p>
                                <div className="row">
                                    <p className="com-text">Total Heated Area:</p>
                                    <p className="com-val">2,810 sq. ft.</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">1st Floor</p>
                                    <p className="com-val">2,297 sq. ft.</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">2nd Floor</p>
                                    <p className="com-val">513 sq. ft.</p>
                                </div>
                                <hr />

                                <p className="sub_sector_title">Dimensions</p>
                                <div className="row">
                                    <p className="com-text">Width</p>
                                    <p className="com-val">56' 0"</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Depth</p>
                                    <p className="com-val">64' 0"</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Max Ridge Height</p>
                                    <p className="com-val">31' 0"</p>
                                </div>
                                <hr />
                                <p className="sub_sector_title">Beds/Baths</p>
                                <div className="row">
                                    <p className="com-text">Bedrooms</p>
                                    <p className="com-val">3</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Full Bathrooms</p>
                                    <p className="com-val">2</p>
                                </div> 
                            </div>
                            <div className="sub_sect_container">
                                <p className="sub_sector_title">Square Footage Breakdown</p>
                                <div className="row">
                                    <p className="com-text">Total Heated Area:</p>
                                    <p className="com-val">2,810 sq. ft.</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">1st Floor</p>
                                    <p className="com-val">2,297 sq. ft.</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">2nd Floor</p>
                                    <p className="com-val">513 sq. ft.</p>
                                </div>
                                <hr />

                                <p className="sub_sector_title">Dimensions</p>
                                <div className="row">
                                    <p className="com-text">Width</p>
                                    <p className="com-val">56' 0"</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Depth</p>
                                    <p className="com-val">64' 0"</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Max Ridge Height</p>
                                    <p className="com-val">31' 0"</p>
                                </div>
                                <hr />
                                <p className="sub_sector_title">Beds/Baths</p>
                                <div className="row">
                                    <p className="com-text">Bedrooms</p>
                                    <p className="com-val">3</p>
                                </div>
                                <div className="row">
                                    <p className="com-text">Full Bathrooms</p>
                                    <p className="com-val">2</p>
                                </div> 
                            </div>
                        </div>

                        <p className="project_sector_title mt_75">Equity</p>

                        <div className="equity_container">
                            <div className="row">
                                <p className="com-text">Token Name</p>
                                <p className="com-val">XST5734</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Token Value</p>
                                <p className="com-val">183 VST</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Total Supply</p>
                                <p className="com-val">62000</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Total Value <br /> (Market Cap)</p>
                                <p className="com-val">154,788  VST</p>
                            </div>
                        </div>

                        <p className="project_sector_title mt_75">Stats</p>

                        <div className="equity_container">
                            <div className="row">
                                <p className="com-text">Liqudity</p>
                                <p className="com-val">$748,485.48</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Volume (24 hours)</p>
                                <p className="com-val">$1,815.21</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Volume (7 days)</p>
                                <p className="com-val">$15,870,26</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Fees (24 Hours)</p>
                                <p className="com-val">$3,540.40</p>
                            </div>
                        </div> 

                        <div className="equity_container mt_35">
                            <div className="row">
                                <p className="com-text">Syndication ID</p>
                                <p className="com-val">5734</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Total Value Locked</p>
                                <p className="com-val">748,485 VST</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Fundraising Rounds</p>
                                <p className="com-val">4</p>
                            </div>
                            <div className="row">
                                <p className="com-text">Genaral Partners</p>
                                <p className="com-val">147</p>
                            </div>
                        </div>


                        <p className="project_sector_title mt_75">Vault Details</p>

                        <div className="vaulti_container">
                            <p className="com-text">Token Address</p>
                            <p className="com-text active">0x2d77f5b3efa51821ad6483adaf38ea4cb1824cc5</p>
                            <p className="com-text mt_45">Vault Address</p>
                            <p className="com-text active">0xf4B6040A4b1B30f1d1691699a8F3BF957b03e463</p>
                            <p className="com-text mt_45">Vault ID</p>
                            <p className="com-text active">4842</p>
                        </div>

                    </div>
                </div>                
                <Sidebar />
                <CheckoutBar />
            </main>
        );
    }
}

export default Projects
