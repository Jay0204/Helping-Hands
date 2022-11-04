import React,{Component} from 'react';

import {Jumbotron} from 'reactstrap';
class AboutUs extends Component{

    render(){
        return(
            <>
            <div> 
                <img className="img-fluid w-100" src="./images/about-us.jpg" alt="" />
            </div>

        <Jumbotron style={{margin:0}}>
           
            <div className="row">
            <div className="col-sm-6">
                <div className="row">
                
                <h3 className="container-fluid">Who are we and what we do?
                </h3>
                    <hr className="w-100"/>
                     
                </div>
                
                <div className="row container-fluid">
                <p>
                        MyHelp provides local service providers a platform to provide services to the customer and increase their reach. It also helps customers book reliable home services like beauty services, massage therapy, cleaning, plumbing,carpentry, appliance repair, painting etc to empower millions of service professionals across the world to deliver services at home like never before. 
                        
                        </p>
                        <p>
                        Once on the platform, our match-making algorithm identifies which service provider are closest to the users' requirements and available at the requested time and date.
                        </p>
                </div>
                        
                
                
            </div>
            <div className='offset-1 col-sm-5 mt-2'>
                <img className="w-75" src="./images/team.png" alt="" />
                </div>
            <div className="row">
            
            
            </div>
            
            </div>
        <Jumbotron style={{margin:0}}>
        <div className="row">
          <div className="col-sm-12 ">
            <h5 className="d-flex justify-content-center">MEET THE TEAM</h5>
            <h6 className="d-flex justify-content-center">
              “Individuals can and do make a difference, but it takes a team to
              really mess things up.”
            </h6>
            
            <hr className="w-90"/>

            <div className="row">
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Nehi Desai</h5>
                        <p className="card-text">Full Stack Web Developer</p>
                        <a href="https://www.linkedin.com/in/jay-prajapati-694981222/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/jay202112103/Helping_hands2" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2 " aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Jay Prajapati</h5>
                        <p className="card-text">Frontend Developer</p>
                        <a href="https://www.linkedin.com/in/jay-prajapati-694981222/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/jay202112103/Helping_hands2" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Vishwa Aashara</h5>
                        <p className="card-text">Frontend Developer</p>
                        <a href="https://www.linkedin.com/in/jay-prajapati-694981222/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/jay202112103/Helping_hands2" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Nisha Shah</h5>
                        <p className="card-text">Backend Developer</p>
                        <a href="https://www.linkedin.com/in/jay-prajapati-694981222/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/jay202112103/Helping_hands2" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2 " aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>

            </div>
          </div>
          
        </div>
      </Jumbotron>
      </Jumbotron>
            </>
        );
    }
}

export default AboutUs