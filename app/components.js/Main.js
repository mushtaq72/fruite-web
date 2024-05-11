import React from "react";

const Main = () => {
  return (
    <div className="container ">
    <section className="man background-image py-5">
     
       <div className="row py-5">
          <div className="col-lg-6 py-5">
            <p className="m-0">Organic Products</p>
            <h1>Fresh Organic</h1>
            <div className="line my-4"></div>
            <p>Organic food is a food and drinks products by methods complying with the 
              standers of organic farming.
            </p>
            <button className="mbtn1 mt-4 ">Read more</button>
            <button className="mbtn2">Shop now</button>
          </div>
        </div>
        </section>
        <section className='py-5' >
    <div className="row about py-5">
    <div className="col-lg-5 py-5 offset-lg-7 col-md-6 col-sm-12 col-12">
    <p className="m-0">Organic products </p>
    <h1>About our organic</h1>
    <div className="line my-4"></div>
    <p>Organic food is a food and drinks products by methods complying with the standers of organic farming</p>
    <button className="mbtn1 mt-4">Read more</button>
    </div>
    </div>
    </section>
   </div>
  );
};

export default Main;
