import "./Benifits.css" 
import $ from 'jquery';

export default function Benifits(){
    return(
        <>
            <div className="benefitsbody">
                
                        
                        <div className="know-more" id="know-more-1" onMouseOver={()=>{
                            $("#know-more-2").css("opacity",0)
                        }} onMouseLeave={()=>{
                            $("#know-more-2").css("opacity",1)
                        }}>Know More</div>
                        
                        <div className="know-more" id="know-more-2"onMouseOver={()=>{
                            $("#know-more-2").css("opacity",0)
                        }} onMouseLeave={()=>{
                            $("#know-more-2").css("opacity",1)
                        }}>Know More</div>
                            
                        <div className="know-more" id="know-more-3" onMouseOver={()=>{
                            $("#know-more-2").css("opacity",0)
                        }} onMouseLeave={()=>{
                            $("#know-more-2").css("opacity",1)
                        }}>Know More</div>


                <div className="benefits-title">
                    Benefits    
                </div>
                    

                    <div className="benefit-circle" id="benefit-circle-1">
                        <div id="student-content">
                            <div id="student-title">
                                Benefits for the Students
                            </div>
                            <p>
                            Students get to learn directly from Industry Experts and learn the core gaps that need to be filled in. By learning on a case study basis, they understand critical processes and real-life experiences which have occurred within the industry.
                            </p>
                            </div>
                        <div className="inner-circle">
                            <div className="inner-image" id="student-ellipse"></div>
                        </div>
                    </div>

                    <div className="benefit-circle" id="benefit-circle-2">
                        <div id="company-content">
                        <div id="company-title">
                                Benefits for the Students
                            </div>
                            <p>
                            Students get to learn directly from Industry Experts and learn the core gaps that need to be filled in. By learning on a case study basis, they understand critical processes and real-life experiences which have occurred within the industry.
                            </p>   
                        </div>
                        <div className="inner-circle">
                            <div className="inner-image" id="company-ellipse"></div>
                        </div>
                    </div>

                    <div className="benefit-circle" id="benefit-circle-3">
                    <div id="college-content">
                    <div id="college-title">
                                Benefits for the Students
                            </div>
                            <p>
                            Students get to learn directly from Industry Experts and learn the core gaps that need to be filled in. By learning on a case study basis, they understand critical processes and real-life experiences which have occurred within the industry.
                            </p>  </div>
                        <div className="inner-circle">
                            <div className="inner-image" id="college-ellipse"></div>
                        </div>
                    </div>

                    
                    
                    <h2>Benefits for the Students</h2>
                    
                    <h2>Benefits for the Company</h2>
                    
                    
                    <h2>Benefits for the College</h2><br/>
                    

                </div>
        </>
    )
}