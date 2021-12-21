import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
     
    constructor(props) {
        super(props); 

        this.state = {
            isSideOpen: false,
        };

        this.isSidebarOpen = this.isSidebarOpen.bind(this);
    } 

    isSidebarOpen() {
        this.setState(prevState => ({
            isSideOpen: !prevState.isSideOpen
        })); 
    }


    render() {
        return(
            <>
            <div className={"sidebar-mark sp_nav_mark " + (this.state.isSideOpen? "active": "")} onClick={this.isSidebarOpen}>
                <span></span>
                <span></span>
                <span></span>
            </div>
             <div className={this.state.isSideOpen? 'sidebar active': 'sidebar'}>
                <ul className="main_ul">
                    <li className="has-submenu">
                        PROPERTY
                        <ul className="sub-menu">
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>About</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>History</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Activity</Link>
                            </li>                            
                        </ul>
                    </li>
                    <li className="has-submenu">
                        Architecture
                        <ul className="sub-menu">
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Floor Plans</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Files</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Video</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Location</Link>
                            </li>  
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Attributes</Link>
                            </li>                            
                        </ul>
                    </li>

                    <li className="has-submenu">
                        Financial
                        <ul className="sub-menu">
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Equity</Link>
                            </li>
                            <li>
                                <Link to="#">Statistics </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Market Price</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Syndication</Link>
                            </li>  
                            <li>
                                <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Sale Schedule</Link>
                            </li>                            
                        </ul>
                    </li>
                    <li className="alone">
                        <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Contracts</Link>
                    </li>
                    <li className="alone">
                        <Link to="#" onClick={()=>{this.setState({isSideOpen:false})}}>Units</Link>
                    </li>
                    <li className="alone">
                        <Link to="#" className="buyBtn" onClick={()=>{this.setState({isSideOpen:false})}}>Buy Now</Link>
                    </li>
                </ul>
             </div>
             </>
        );
    }
}

export default Sidebar
