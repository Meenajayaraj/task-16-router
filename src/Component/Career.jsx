import React, { useState } from 'react';


const Career = ({ obj }) => {
  const[data]=useState(obj)

  const career = data.filter((item) => item.courseId === 'C');
  return (
      <>
     <div className='container'>
      <div className="row">
        {career.map((item, index) => {
          return (
              <div className="col-12 col-md-6 col-lg-4 mt-5" key={index}>
                <div className="card h-100">
                  <div className="card-img">
                    <img width='100%' src={item.img} alt="" />
                  </div>
                  <div className="card-text p-4">
                  <div className="card-text fw-bolder">
                   {item.desc}
                  </div><br/>
                  <div className="card-text text-secondary">
                   {item.desc1}
                  </div>
                  <div className="read card-text fw-bolder"> 
                  Read More » 
                  </div>
                  </div>
                  <div className="card-footer opacity-50">
                    {item.date} - No Comments
                  </div>
                </div>
                
              </div>
          );
      })}
      </div>
    </div>
</>
  );
};
export default Career;