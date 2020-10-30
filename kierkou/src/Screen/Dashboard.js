import React, { Component } from 'react';
import { Button } from '../components/Button';
//import {Search} from '../components/Search';
import Footer from '../components/Footer/Footer';
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
                    <div className="section9">
                        <a href="#">
                            <img  src={"https://blog.send-anywhere.com/wp-content/uploads/2016/11/get-it-on-google-play-icon-logo.png"} height="70" width="130"/>
                        </a>
                        <a href="#">
                            <img  src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACCCAMAAABxTU9IAAAAkFBMVEUDAgL///8AAACRk5aNj5KGiIqUlplgYWNxcnXi4uIKCQmkpKT7+/vZ2dnx8fF0dHQ6Ojro6OjU1NRFRESTkpJ6enrDw8OqqqpLSkrt7e319fVbW1uYmJjX19cjIyO8vLy0tLTMzMwzMzMWFhaBgYGenp5UVFRpaGgqKSlAQEAeHR18foEmJSVfX19WV1kTEhLoWWntAAAUq0lEQVR4nO2d62KquhKAZQC7VNSCAqJWwIqobXff/+1O7iSAGFpvZy3mR1sRSJgvyUwmQ9ozyvKWppndyY1kHQReReU95dMyyD4syzI7uZkg9X70g+VZCFH4YZn9Pj2zk5uISRRsfWSDWghOYiME1sti+/kOndxIvg+LF9tEHOxwWYUwwJT8Izu318lNhGp385/dNy3bK0NIER5/26n/LoLUvEAY7ESFkNim+V9H4G6CxqUcD0kyhNg2rWPH4J4CMLN4XyAQ3hCDbYfgvgKwRRQ8DmGC7MGsY3B3gaNp7iYMwsjqv3Rj0QME/utbGYUwts2PjsEjBMDvf4wJhLVpvnYMHiJwME0TQxjgjvDo2vyrAn9wV+gZidVZ5YcJbE0rRBA+TKuzCI8SANv8Y/Rcy/zTMXiYwEv/I+oFVn/fQXiYwKxvBb3UMrvJ8uME3k0r7o1M87uD8DABsMxRz0Z2+dE1+ZcFPkwbQbA7CA8UPFPodVO1xwrkCILV7zzURwr2UXtmN014qHQQnkD+Bgg/SA25RjbD9TJSrgqhRbXkPJzflrrPsq92N4F1GP662K8wvNIU93oQkDa3u/lJ70YwS4iE6/nitxjANoxRSwiRYfywUNFqYG0YVwr2XAsCqpqNs/o0I+LwUiQATuzfUYBdewjuTyHAbj4/kEth/mwQAPwJ0aguhC85GXb8Kwr3hYCuXNwAgv17CAApS+nWHCUxhHC42ZwW8wjnXxYUdI1EcZ4CoXJ5+QD5VAuhWnJNXWBQglC9f3tVXgUCHHhi60CzChjCiNnlEbpuzcZZ2VYrf0gHyjZdglC29RXbzz9XIJTOPOM3oE8IwiutBoFwoTw9uQYE2Dh8YEk170Mh0D8Bp6DRBgqLGN1qkuBRF75jLyFPO/W8HVF+4gUbQB/fXiFDanTn9CoBAQF1cSVybjthinuoEyz451nsRt68CoGdOcg4V887QIg6qSsbLDgkCWpuQRKvgEBYQIZG4WgtyrPf0F08vyWFK0Agj8TEbw8BXc8uBOxwUCFKTw0Hp4BAjJ4L//5cYuuBH37rceYgQYC9Y0jHezBMlXqRS7FEZQhiODWWhBfunVv29kAi9aNXqX7oZs7ijX70aHnv/IWDtB2Fa0AIBYPl4QcQiJZDpk1jnI3wo+ToKX36CxzaU2BFhi2wDCM23rJszGExCLBFJy6TNbqbEQOrmJvN5/jEDelSuIpB7BpBGUKANbcOUbN2SC9EEALDy0jHygsI29RzpJ7gpKi6pB42aUOoabhra+Sw8vU1+GsIcCzcnER7rqZAQI5+gJ5qs8RaBdIhJujXkbCBBb7zFwhLaBnstIQ2QQYBsCZxT4FDRLw0OA2cARmhU0oPj+cp/oxhyBBgj5S/YGfG+JbYTk3xgYBUTZxYsglI+bQeY3zAx+ciOU3wOW1U+HsIQfuOUIIwJU+BlUmNAG5SOXlgOvy4MaKBNeR+Uwgeaehb6ghwCOijQ5wz3GUSbsHxrx2liVQ9eScnrEsQAj5gIf05nxQC7Ux7PtbwUxXvKCD3/3ZwTwUYG8sTKdNv0RzJrX4LAT6LjqC/NFQLAaliBfwAVmtoTA6YSOJjbX+7xO5jCBlREDrgvhcQcuEXwAQN+73CWckphDnXDbFCcvt2mGdARsY9hbAjd9hM1FmMCmFH/1oSCBvWzwDffnxfCHPBINY3RyqEHe3Hb0b0SZ/qRBoiPmmPNZSjp3rHo9OOQfDrIKwLTzelSgX4msfeeBxRCLFwHFTDjJXmgaiKTyHkGhCm9K83AgHVb/I2JmLQRqCtjV9DEB5I0MIlUCGEBhluBkSn+MCQaAU+J0itOX5CF6nGp49/FkLGWyZRN7HkxeuRGELKtUYpFZU5iIEfF5L9EMLMkOWeEAD4PK1FPyi7qBOsVtITNvSp3mlPQCNRivSBBuUQDSSB4cIFCHO5J8ARjTLj0PLzOYUQFD1hUO4J6e97AoIQ71dMWoV1fw+B+ubLXSvXWIGAHtwB2lJpMAa3/hF1Pl301GgGtUL9e0BH9LMQpsIzRFQn6EDCZ+VTCmFNPeEam0ArgP9MiF1qhjCrh3AgNvwnc+ZfQ/jGCCbhpmWxDAKu7pdRTBMy+lQpm70h73S/NI7E1O3ZM5+FsBXOz570S+xjEUOPNRvSeUbUIwd2Ve+I4IchMh+HH/YE7B1R7wy2288b94RSkCUIwtVJieno3OMLKxzLKiFTWHw9mmw52DPFOlrSO7rGgEwZEBbxiOcgMCcfuSkRnVcEeHzCRTCbMHTZCYvyPAH1vIh4lzE1bQ0QPOJHQxUCOUDdo8Th1klToy0h4DK2X7a/4tpmesfPPp2vs2y+0uGAIThLJGQwi06ibRmJNfcM4fwlzOCTr2h08ByEHrGMaMYaOmwSNyW3s2IjkmbkUZilRjRQIWDVLkf2Gk+Qj/jM8xDwNG7MY0cqBAzZXdvrAZlraiqU3KAVBDwRCViAZjw/0RZBDm/WhSfi7S5iUNYTMhH/EgGQEYgJAx2YDoYYq+YShAhD4CtruEFToRYct2tir74ZBHH/Y1COHY35pVT3BYSlGhkm1p7GjtYCwph5xNsJuwlzMHSlFQQpwkad0hUbgPzS1jHOpcUymAUxkSRcFcTQyJESinuO5RB4YxL2gcDz+EzOe6MK+o69GE+hp+MxnSbCBgc5eXQVT5XHOCY7BM+z6WCdo4o68RZGnhrvpaeSr6jR8DxqJE6BlyjPAq/JIFrimFYeB8yPCL0xK3CN7zJuu1TYAgJS0cQoySTMF7u4fBQPHRdWd0AS9ej7O8hY5FGvOKZ8qXw1PKlnKoWID5Wuio+ehufLKNe8XKx6/5Zujj4EabDQkpefOVzlZyh4VA/1oHygfLnQV+lAr1o59cpKGeqZlSPnqq8l2hBACtTpSf4zCv+g6EIQVq6FdG//aIomBMBBgbby6/yqf0V0Icwu67ws7QIZ/7LoQcDBtZbi5B0DXdGEkF/Wekk6s6wvWhCkCaWutIqd3Fl+5MvfUvQgvF7WuipBi0e8q05IUZvNdjN8Ig56ENpN0wyaYaJbg8Uey+IeGkF6z0djdzJZTiI39rdPgkEHAsnzaCUtnFN4ZatCt3+TGuCURXI1nWD/FBj0ILTtCMMWEHhM8OZWBGBXiX0ZyTNQ0ILwVal7s7TI9yhyKL0ba4PmvFbELdbAfhZ9u0bVdCCs62rfIG1GoxW/yLnt1mNn4y4Rf7kIYJVj0XzZ6Jp104FQ24QaZNoCQmHz57eFYPFyvOxrP9uvRTzyjcehh7RT3n/7LS0IbWN3+o9B0l2YuLccCGhCApL0UwT9OX+erTQcPDOEtCWEoz6EKdU/+XnLqCtZGzZwjp60YDRV6D85hOr/vWgWfW2yRYoh+XnDqCsA9U3VLEGewrn/GyFox43wex8GThQhjx/dbjzC2a3V5sEnQMn/A4S0JYS1NoQdOd9n/ldeUlHhMdYu3tZ9f6ZknA+GMb+X1ovpIMWTqSmEY3WFtf7uxbHyl5eqU67dLQyzbnI+sD5G0sqNUsQJevkUSU6W5d/3VhIku8W3vAy88NH3/idZtj/6oyBYfx3OPDeb6pRtPyySEMkcYIju5dMhy6LFFpWE034XBkG425+UZeh3Uj55uWS1jmM+2yQX2OiCkT/71sKgBaFt6GiiC4Em8eC0eBKmVV4yYR6jC3K0wR2dCsNKq4XfoJzyKC9+R7CucNYTKnMR0WJPpUcYFOZ7HwgPbhJLcQ72ihKac+ekCy15xsUsFhe4oU58SgvC3Ggpuq+U01FoCryInQJhQLUBufx/mJZisYiNJXvYKDYrrHtqnKiKZXRGJRUIfNIPh1J+Qyxm2Cy2HBavI5Kj3+qsyplr5CPqQFgZLUXvvTk2CJOMbPq+j/xmkoCwK91cvLBKISwOpYhQ3auTPHncOJMceA5CTapVxI07h7DnXxDrcKwEO4OarJlS6ToQvsv3vSgXUr/YfWn1Sa4ptQ7OsQJhXG0Bvgqh+tRVPRcJO8G+zl6eGY5gtSzfnLxiSK+hEEZ8KMQQ4DWqXnDx7Rm9KGpNVZrF0zFIbFCnOY02+XtegeASyxB5YeKJWlDEDAKl58VhKl6nrgmAAG+vhvG2e606WkPLtm3a6rMd+pNm4R+YSp10l+e7lPWmCXufiEJ4w0cn4/HAhWIJMgq/9vs8Pl+f1hB6rfO+tLxUnNCLZDmkz0sukze5GIomvvRJauSBp92wd8VHorRki78f5hxDdU1JyR903NB/rXEqaYECkeg+6ZZa79eUfqYvJRXrjW6+Qd9u6dtCWMIhvWDGmFzKCdWC0Noy6wTxmNvInoh5q4saCNGBO+Mr1hYXKgSfK+2bmegaHxlKsx0nSvyNyqE8WeO9Jy4mI7FcPocQ8DkBHGj9eEIwahdj6Rl/CWHbHoJxcYMH1s7Y213M/oY1EEQ7Ap71ESsQ1qIkeGfjR61trnjajjeFatfjELjKo2KJiq9+xDKEYvLBvD1J5ZzjNSBIu1foS3ahZBqyiNiyJhuPXLHKKSBkkp3gAwR5HYBBkN8f4DG5usAJ8virSSNu0VYqEDbUCMl9Gr/dKcpnEKZFG6He3qFa4eY9PzTzjlqv9GN5a5wusOeJRbtLyeevCgR5gOeLfAsJgvwKOw/U1cYCAe8iU6ml8GgrEGhZE3mRB76p8c4LCIXO2exNcYZKT3lGFXoQjuWq60mDYeBGQITUWHWDsk5S1X5SJcwlCIoVZqbxzFopHrn3YSmbkA8nFQghK1+5A23ZSQGh6IisG+5AlhkxE817m+mmQbbNtzCU56m7JbUz7lBUl1o151SCkKlKiAslUAjq8/Hx6FzBtKjVSJ5kj2vXE3jXVP1LtkCXFhCK8hm19dSXZEfHtCtA+JF/1LztD7tjKDUadfjkOimFVul8IiggqHlmLBx14aGx5IXfvauHQHuM+lo4gzyohZCeV8VVIHw75ws4Kw3rCnxaM/AKodbfK40Oi3YQDhotj1agCAvRAakCgX5c1UGIaiBA07pLYxKQ9ksiPzDNTRviNViZQyMEbjkEBHVOwF0arRm76N/bWgi0mZTWgRakNbptITSmtmlDOLSH0OSXNUBdqxD2t+kJ5GTu8frX7AnLSVWc60Bo3xWaPALuStbJQLWTqofFGm9cQFAND2upZQhn1rm4xzuqhUB1mtdBGDfYhBzqpFG52i8ObtpG8ZpWmnl03FGFHjwqEErDDW27YQHBVSLFbLhySgzeSdJxJYQD22VRRsVFpToteWd0Uhw0eEft8zlbvEJrt2PQFMDlEYH4uJDl6AkNFzoZ180TdtI8QVktY4lqpa1B6W4W1Q1DOYR5LYSMXaTcPy0aQQWCzsSsVh0t3mNulXTRuB8eTzH+KvVZ+hQTxVlRsph48OhTgiBv0cxntKVtm9mKyKQ8MvMO+VILgcZ9lvKGLZzaqhYCfbFP9Uc0RqNWb/TP2ripjZ2SadstrTlxq/qlQJCaIvfdyXIuh+BIcQWeNlt624F3oFI4S0RFT7UQTsXsvHx/qIXATLk8s4DhPFuvs+aYcpu9LdoMSI3bs/LJaCXizI7HCoQiHit8ypEMQSqLb0+7LJfO3QpfHdtYOI5tH9MruWPsIikgB6+yDSlD4IiUiKJfAVmjjzYQ9Bd3ls2TE5pxZ1T2KBNBB5AhGDTgjH7wVnBQIJCAPvl+z5yHyjMLDzsTYwP6zXOEqS/NJwZiPYrPZcZiPeHgyuVXIWwdXh+uMVaj96tBQEOrbghp1VwobdDVjDs40TrvVAhsYThP2UeWMVesrLlkI9kj96IrHUHysN01XTmD044HtrlPzP38hVhZYxdFU2ay2Kp/CPUQxGg15tvfzB1W4etBQG1Dz0+9sKzGxs6aeDPra54EgR5xBpGwSGxHJwaBjRmTQWGxapxjOQS5fIsTr7idcK8EqLckpgOOuGgZZ1nMn50nENdAEM6LO5rP5wm7Ynkh36Llzl98LtQsFzxlvlBXs2MiH4/wNkYMwrayoMQGbQYhr8wia1eT4HRuYapYwSiSAXi2xaFmTsl3lKqBUH+Bcyn3pPX2a2pfCNb77WHmx0p2zvSSR0bVVpf/yxM71hKEz1LqD1cagzAtW6ozCV5nLFpUhNvlM3je0aGyGDcQsfYaCIh15YLoYv5P640I4VusiYylCfpRLFl5F7kzRdf+CxbmNLoFhFexfE8LLRayOATldS7nbBNARqX64qDSa6CXliBIQT4m0oJ2HYReeXe0S6u85JrWu0GiZ4ldY5Kut/IiOXZdgsEgDY+Xg8hswlVrvPmXyDgKCHxXNkz4RSpTQID3kI2SeOe1s+WriwgG3SetpEGfNWQpFxUs0eze5NvXQ8AXzOsvOK+RH+yLWh+T0olU0ROHTWeK2xQQyMFFbucL5SoBgXy/zX3/6/tSpAzfyB4lcZyM5nWpeOTQ7OW4Vawt6uj5bpcfSxece2J8bFZ3wdlqXeUfG7UTPVoyhNprJAi69yxOvNgKai+6fPsfXfAICHqiQqg7QYbwfy0dhCeQDsITSAfhCaSD8ARCIFj9J3ySfwlCjiDY5sfzPQnfauJfgPCHQND/v1B3ExjGOCNsfHaZFGz8/VvL/4f9jAIfpoUgWC0mIveSSxOe1jOopxWwzVEvM83mpZ/HyCUd/zUMwLLSXmCZt93xqZMmgZNpBQhC/78OwsMEZn3L6w0sU/d/+HZyfUHThA+jZyDr3GIDx06uKoDsch9BCK3+XTaH7aRG4Ni3AgTBs81uo/1HCfj9jyWCYFhm//4bXnWCBbamFRoYAuoKdmcVHiGApsu2SyAYfav/pxuQ7i+AXCPcEQgEF1noVUfh7gIz07SWDIKRIgr1W5d1cjMBOJqmTUL2BIKR2Kb5HDvZ/zMCsEAMaE4VhYAp9P8MOwz3EpyL1jdtlrrIIBgxomDv/4rA5PMLThCzEQOeEsghIEcVzRfs/zZ/SYj4WYWo932PEFiWSNgXEIxohDGY9stiW2z80cm15bB4sS2EwE6KFPcCgmEMwg/LNPt95Dh1ciuh+v1I5HcZZAh4k13zA5/Yyc0EqfcjK70toUIgxiEI1nYnN5IsDar7wP0P8BJsviRAw8MAAAAASUVORK5CYII="} height="35" width="120"/>
                        </a>
                    </div>
                </div>
                  
                 <Footer/>
            </div >



        );
    }
}

