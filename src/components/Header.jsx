import React, {Component} from 'react'
import {BrowserRouter, Link} from 'react-router-dom' 
class Header extends Component {
     
    constructor(props) {
        super(props);
        this.state = {isMobileOpen: false};
    
        this.openMobileNav = this.openMobileNav.bind(this);
    }

    openMobileNav() {
        this.setState(prevState => ({
            isMobileOpen: !prevState.isMobileOpen
        })); 
    }

    render() {
        return(
            <header>
                <Link to="/" className="logo">
                    <img src="./assets/img/common/logo.png" alt="vestana logo" />
                </Link>
                <div className="container">
                    <div className="topbar-wrap">
                        <nav className="top-nav">
                            <li>
                                                           
                                <Link to="/projects" className="active">Projects</Link>     
                            </li>
                            <li>
                                <Link to="/portfolio" >Portfolio</Link> 
                            </li>
                            <li>
                                <Link to="/swap" >Swap</Link>  
                            </li>
                            <li>
                                <Link to="/pool" >Pool</Link>  
                            </li>                            
                        </nav>
                        <Link to="#" className="avarta"> 
                            <img src="./assets/img/user/user1.png" alt="John Smith" />
                            <span>John Smith</span> 
                        </Link>
                        <div className={"sp_nav_mark " + (this.state.isMobileOpen? "active": "")} onClick={this.openMobileNav}>
                            <span></span>
                            <span></span> 
                            <span></span> 
                        </div>
                        <div className={"mobileNav_container " + (this.state.isMobileOpen? "active": "")}>
                            <nav className="mobileNav">
                                <li>                                                            
                                    <Link to="/projects" className="active" onClick={()=>{this.setState({isMobileOpen:false})}}>Projects</Link>     
                                </li>
                                <li>
                                    <Link to="/portfolio" onClick={()=>{this.setState({isMobileOpen:false})}}>Portfolio</Link> 
                                </li>
                                <li>
                                    <Link to="/swap" onClick={()=>{this.setState({isMobileOpen:false})}}>Swap</Link>  
                                </li>
                                <li>
                                    <Link to="/pool" onClick={()=>{this.setState({isMobileOpen:false})}}>Pool</Link>  
                                </li>     

                                <li className="sp_avarta">
                                    <Link to="#" onClick={()=>{this.setState({isMobileOpen:false})}}>
                                        <img src="./assets/img/user/user1.png" alt="John Smith" />
                                        <span>John Smith</span>
                                    </Link>
                                </li>                         
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header
