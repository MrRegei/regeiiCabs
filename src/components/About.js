import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/284974286_1950505911810187_9065685220923611118_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFH1V4M5j2fi-T4ZviROYANKx_vl9_RNbYrH--X39E1thN-8dbdC6Lh5VfQkZSm2VXV59Z4Y2zTJ2RU4uhfn0dx&_nc_ohc=w_vIlUK3oBwAX8_Z_lu&_nc_ht=scontent.fmnl4-1.fna&oh=00_AT_i03zn83UBh4Iyhcp78Upt1tBctQ6qv-i0h_XDQazFuw&oe=62B5E976" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}