import "./Sidebar.css";
import rssImg from "../../assets/RSS 1.png";

function Sidebar() {

  const geDates = (date) =>{
    console.log(date)
  }



  return (
    <div className="Sidebar container-fluid">
      <div className="container sidebar_container">
        <div className="logo">
          {/* <img src={rssImg} alt="RSS Logo" height={'80px'} width={'auto'} /> */}
          <h1>राष्ट्रीय स्वयंसेवक संघ</h1>
        </div>
        <hr />

        <div className="year">
            <h4>वर्ष</h4>
          <div className="year_input container">
            <label>से</label>
            <input type="month" onChange={(e)=>{geDates(e.target.value)}} />
          </div>
          <div className="year_input container">
            <label>तक</label>
            <input type="month" />
          </div>
        </div>

        <div className="year" style={{marginTop:'20px'}}>
            <h4>दायित्व</h4>
            <div className="year_input container">
               <input type="text" placeholder="दायित्व" />
            </div>
        </div>



        <div className="year" style={{marginTop:'20px'}}>
            <h4>नाम</h4>
            <div className="year_input container">
               <input type="text" placeholder="नाम" />
            </div>
        </div>


        <div className="buttons">
          <button>खोज</button>
          <button>स्पष्ट</button>
        </div>



      </div>
    </div>
  );
}

export default Sidebar;
