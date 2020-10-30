import React, { Component } from 'react';
import { Button } from '../components/Button';
//import {Search} from '../components/Search';
import Navbar from '../components/Navbar/Navbar';
import './Dashboard.css'


export default class Dashboard extends Component {
    render() {
        return (
            <div className="main-dashboard">
                <Navbar />

                <div className="Header">
                    <h1> Hire The Best Freelncers <br></br>
                 online for Any Local Job</h1>
                    <p className="para">Kierkou experts connects 4local professionals <br />
                    and agencies to business seeking <br />
                    specialized telent </p>

                    <Button className="btn1">I Want To Hire</Button>
                    <Button className="btn2">I want To Get Hired</Button>

                </div>
                <div className="Header2">
                    <h1> Hire expert Freelncer for<br />
                         Any Job, Any Time
                </h1>
                    <p style={{ fontSize: 12 }, { fontWeight: "bold" }, { marginTop: 15 }}>millions of small businesses use kierkou to turn their ideas to reality</p>
                </div>
                <div className="main-dashboard">

                </div>
                <input className="forminput" type="text" placeholder="What Kind of Work do you need?" aria-label="Search" />
                <Button className="search">Search</Button>
                <div className="Header3">
                    <h1>Find Quality Telents and Agencies</h1>
                </div>
                <div className="mainsection">
                    <div className="section">
                        <h4> Construction & <br />
                            Engineering</h4>
                        <p className="bottom">Its A Long Established Fact that A Reader <br />   Will Be Distracted by The </p>

                    </div>
                    <div className="section">
                        <h4> Agriculture & <br />
                            Environment</h4>
                        <p className="bottom">Its A Long Established Fact that A Reader <br /> Will Be Distracted by The </p>

                    </div>
                    <div className="section">
                        <h4> Information & <br />
                              Technology</h4>
                        <p className="bottom">Its A Long Established Fact that A Reader <br /> Will Be Distracted by The </p>

                    </div>
                    <div className="section">
                        <h4> Health & <br />
                             Well Being</h4>
                        <p className="bottom">Its A Long Established Fact that A Reader <br /> Will Be Distracted by The </p>

                    </div>
                    <div className="section">
                        <h4> Government & <br />
                             Low</h4>
                        <p className="bottom">Its A Long Established Fact that A Reader <br /> Will Be Distracted by The </p>

                    </div>
                    <div className="section">
                        <h4>  Food & <br />
                              Drinks</h4>
                        <p className="bottom">Its A Long Established Fact that A Reader <br /> Will Be Distracted by The </p>

                    </div>
                </div>
                <div>
                    <div className="section1">
                        <h4>Can't find any thing What you are Looking For ? </h4>
                        <a style={{ color: "tomato" }} href='#'>See All Categories</a>
                    </div>
                    <div className="section2">
                        <h1 >How It Works</h1>
                        <p>Get almost everything done in just few simple steps</p>
                    </div>
                </div>
                <div>
                    <div className="btn3">
                        <Button>Learn More</Button>
                    </div>
                </div>
                <div className="section3">
                    <div className="mini1">
                        <h3 style={{ fontSize: 20 }, { fontWeight: "bold" }}>Post A Job (Its Free)</h3>
                        <p>Tell us about your project kirekou <br /> connects you with top talent <br /> and agencies around the world<br /> or near you </p>
                    </div>
                    <div className="mini2">
                        <h3 style={{ fontSize: 20 }, { fontWeight: "bold" }}>Bids Come To You</h3>
                        <p> Get qualified proposals within <br /> 24 hours Compare bids, reviews, <br /> and prior work. Interview favorites <br /> and hire the best fit </p>
                    </div>
                    <div className="mini3">
                        <h3 style={{ fontSize: 20 }, { fontWeight: "bold" }}>Collborate Easily</h3>
                        <p> Use kierkou to chat or or Video call, <br /> share your files, and track project <br /> milestones fron your desktop or <br />mobile </p>
                    </div>
                    <div className="mini4">
                        <h3 style={{ fontSize: 20 }, { fontWeight: "bold" }}>Payment Simplified</h3>
                        <p> Pay hourly or fixed-price and receive <br /> invoices through kierkou. pay for work <br /> you authorize  </p>
                    </div>
                </div>
                <div className="section4" >
                    <div className="mini5">
                        <h2 className="box"> Hire For Any Scope</h2>
                    </div>
                    <div className="mini6">
                        <h4 style={{ fontWeight: "bold" }, { color: "#f00031" }}>Complex Project</h4>
                        <p style={{ fontSize: 15 }}>Find specialized expert And Agencies <br /> for Large Projects  </p>
                    </div>
                    <div className="mini7">
                        <h4 style={{ fontWeight: "bold" }, { color: "#f00031" }}>Longer - Term Contract</h4>
                        <p style={{ fontSize: 15 }}>Expand Your Team With A <br />Skilled Resources </p>
                    </div>
                    <div className="mini8">
                        <h4 style={{ fontWeight: "bold" }, { color: "#f00031" }}>Short Term</h4>
                        <p style={{ fontSize: 15 }}>Build A Pool of Diverce Experts <br /> For one-Off Tasks </p>
                    </div>
                </div>
                <div className="section5">
                    <h4 style={{ fontSize: 15 }, { fontWeight: "bolder" }, { color: "#f00031" }}>Money Protection</h4>
                    <p style={{ fontWeight: "bold" }}>Your Funds are always Protected</p>
                    <div className="mini9">
                        <h4 style={{ fontSize: 15 }, { fontWeight: "bolder" }, { color: "#f00031" }} >Pinless And Risk Free</h4>
                        <p style={{ fontSize: 10 }}>Our Intutive Payment System Holds Payments <br /> In Escrow Account Untill Work Is Considered Complete <br />By Both </p>
                    </div>
                    <div className="mini10">
                        <h4 style={{ fontSize: 15 }, { fontWeight: "bolder" }, { color: "#f00031" }}>Anti-F-Raud Protection</h4>
                        <p style={{ fontSize: 10 }}>Our Intutive Payment System Holds Payments <br /> In Escrow Account Untill Work Is Considered Complete <br />By Both</p>
                    </div>
                    <div className="mini11">
                        <h4 style={{ fontSize: 10 }, { fontWeight: "bolder" }, { color: "#f00031" }} >Here To Help</h4>
                        <p style={{ fontSize: 10 }}> Weather You Are Experienceing  Technical Or Collobration<br /> Issue Our Customer Can Help You To<br /> Solve Them Swiftley And Promotly </p>
                    </div>

                </div>

                <div className="section6">
                    <Button>Join Now</Button>
                </div>
                <div className="mainsection">
                    <div className="section">
                        <h4>Browse Portfolio </h4>
                        <p className="bottom">Find Proffesional You Can Trust By <br /> Browsing Their Samples Of <br />   Previous Work And Reading Their<br /> Profile Reviews.</p>

                    </div>
                    <div className="section">
                        <h4>View Bids</h4>
                        <p className="bottom">Recieve Free Bids From Our <br /> Telanted Freelancers Within Seconds. </p>

                    </div>
                    <div className="section">
                        <h4> Live Chat
                            </h4>
                        <p className="bottom">You Can Live Chat With Your <br /> Freelancers To Get Constant Update On <br />  The Progress Of Your Work.</p>

                    </div>
                    <div className="section">
                        <h4> Pay When You Are Satisfied</h4>
                        <p className="bottom">Pay For Work When It Has Been <br /> Completed And You Are 100% Satified.  </p>

                    </div>
                    <div className="section">
                        <h4> Track Your Anywhere</h4>
                        <p className="bottom">Keep Up-To-Date And On-The-Go with <br /> Our Time Tracker, And Mobile App. </p>

                    </div>
                    <div className="section">
                        <h4>24H Support</h4>
                        <p className="bottom">We Are Always Here To Help.<br /> Our Support Consists Of Real <br /> People Who Are Available 24/7. </p>

                    </div>
                </div>
                <div className="section7">
                    <div>
                        <h2 style={{fontSize:10}, {fontWeight:"bold"}}>Manage Your Enitre Project <br/> From Your Phone</h2>
                        <p style={{fontWeight:"bold"}, {fontSize:15}}>Trackle Your To-Do List Whatever You Are With <br/> Our Mobile App.</p>
                    </div>
                </div>
                <div className="section8">
                    <div>
                        <h4 style={{ fontSize: 10 }, { fontWeight: "bolder" }, { color: "#f00031" }}>Get The App</h4>
                    </div>
                </div>


            </div >



        );
    }
}

