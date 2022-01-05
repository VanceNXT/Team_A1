import React from 'react';
import Img from '../assets/img.jpg'
function video() {
  return (
    <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />      
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    <div className="row">
      <div className="col-md-12" style={{backgroundColor: '#003c5f'}}>
        <h1 style={{textAlign: 'center', color: 'white'}}>Cloud computing</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-sm-4">
        <br />
        <video width={400} height={500} controls style={{float: 'center'}}>
        <source src="https://www.youtube.com/watch?v=4UZrsTqkcW4" type="video/mp4" />
      </video>
     
      </div>
      <div className="col-md-4 col-sm-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Week #1
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
          <ul style={{listStyleType: 'square'}}>
          <li><a>cloud introduction</a></li>
          <li><a>cloud architecture</a></li>
          <li><a>cloud introduction</a></li>
          <li><a>cloud architecture</a></li>
        </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Week #2
            </button>
          </h5>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
         
          <ul style={{listStyleType: 'square'}}>
          <li><a>cloud introduction</a></li>
          <li><a>cloud architecture</a></li>
          <li><a>cloud introduction</a></li>
          <li><a>cloud architecture</a></li>
        </ul> </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Week #3
            </button>
          </h5>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
     
          <ul style={{listStyleType: 'square'}}>
          <li><a>cloud introduction</a></li>
          <li><a>cloud architecture</a></li>
          <li><a>cloud introduction</a></li>
          <li><a>cloud architecture</a></li>
        </ul>  </div>
        </div>
      </div>
    </div>
     
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-sm-4">
        <br />
        <h2 style={{color: 'rgb(0,153,204)'}}>Course Description</h2>
        <p title="NEC's story" style={{fontSize: '130%'}}>Cloud computing is the on-demand delivery of computations, storage, applications, and other IT resources through a cloud services platform over the internet with pay-as-you-go business model. Today's Cloud computing systems are built using fundamental principles and models of distributed systems. This course provides an in-depth understanding of distributed computing “concepts”, distributed algorithms, and the techniques, that underlie today's cloud computing technologies. The cloud computing and distributed systems concepts and models covered in course includes: virtualization, cloud storage: key-value/NoSQL stores, cloud networking,fault-tolerance cloud using PAXOS, peer-to-peer systems, classical distributed algorithms such as leader election, time, ordering in distributed systems, distributed mutual exclusion, distributed algorithms for failures and recovery approaches, emerging areas of big data and many more. And while discussing the concepts and techniques, we will also look at aspects of industry systems such as Apache Spark, Google’s Chubby, Apache Zookeeper, HBase, MapReduce, Apache Cassandra, Google’s B4, Microsoft’s Swan and many others. Upon completing this course, students will have intimate knowledge about the internals of cloud computing and how the distributed systems concepts work inside clouds.</p>
        <br />
        <div className="row">
          <div className="col-md-12">
            <h2 style={{color: 'rgb(0,153,204)'}}>Other Details:</h2>
            <p style={{fontFamily: 'candara', fontSize: '130%'}}>
            </p><ol style={{fontSize: '130%'}}>
              <b /><li style={{color: '#003C5F'}}><b><ins>Course certificate:</ins></b></li>
              <br />
              <ul style={{listStyleType: 'square'}}>
                
                <li>The course is free to enroll and learn from. But if you want a certificate, you have to register and write the proctored exam conducted by us in person at any of the designated exam centres.
                The exam is optional for a fee of Rs 1000/- (Rupees one thousand only).
                Date and Time of Exams: 27 March 2022 Morning session 9am to 12 noon; Afternoon Session 2pm to 5pm.
                Registration url: Announcements will be made when the registration form is open for registrations.
                The online registration form has to be filled and the certification exam fee needs to be paid. More details will be made available when the exam registration form is published. If there are any changes, it will be mentioned then.
                Please check the form for more details on the cities where the exams will be held, the conditions you agree to when you fill the form etc.</li>
              </ul><br />
              <b><li style={{color: '#003C5F'}}><ins>VanceNxt guidlines:</ins></li></b><br />
              <ul style={{listStyleType: 'square'}}>
                <li>We’ll meet your expectations, then we’ll exceed them.</li>
                <li>Our team members will prove themselves to you through the success and the quality of your project.</li>
              </ul><br />
             
            
            </ol>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-8">
      <br />

      <p style={{textAlign: 'center'}}><img src={Img} className="img-circle" width={200} height={200} /></p>
      <h3 style={{textAlign: 'center'}}>Prof. Rajiv Misra</h3>
      <h4 style={{textAlign: 'center', color: 'rgb(0,153,204)'}}>(IIT Patna)</h4>
      </div>
    </div>
  </div>
  );
}

export default video;
