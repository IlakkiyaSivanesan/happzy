import React from 'react';


const Hoppzy = () => {
  
     return (
    <div className="main-content">
      <div className="search-box">
        <h2>Search your next ride</h2>
        <div className="date-time-inputs">
          <input  placeholder="Pick up Date" className="date-input" />
          <input  placeholder="Pick up Time" className="time-input" />
          <input  placeholder="Drop off Date" className="date-input" />
          <input  placeholder="Drop off Time" className="time-input" />
        </div>
        <button className="search-button">Search</button>
      </div>
       <div className="promo-banner">
      <h3 className="promo-text">Rates Starts at just</h3>
      <div className="promo-price">Rs. 300 / Day</div>
    </div>

    </div>
    
    
  );
}
;

export default Hoppzy;
