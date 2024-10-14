import React from 'react';
import travel from "../assets/travel.jpg";
import lifestyle from "../assets/lifestyle.jpg"
import animal from "../assets/animal.jpg"
import yoga from "../assets/yoga.jpg"
import food from "../assets/food.jpg"
import sports from "../assets/sports.jpg"

export default function Topics() {
  return (
    <center>
    <div style={{display:"flex",justifyContent:"center",padding:"50px",flexDirection:"column",width:"80%",marginBottom:"60px"}}>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <div className='first'>
            <h1>Most Viewed Topics</h1>
            <button>See All Categories</button>
        </div>
        <div style={{display:"flex",gap:"20px",justifyContent:"space-evenly",margin:"0 30px"}}>
            <div className="card" style={{ width: "15rem",borderBlock:"0" }}> 
                <img src={travel} className="card-img-top" alt="..." />
                <h3 className='cardtext'>Travel</h3>
            </div>
            <div className="card" style={{ width: "15rem" }}> 
                <img src={lifestyle} className="card-img-top" alt="..." />
                <h3 className='cardtext'>Life Style</h3>
            </div>
            <div className="card" style={{ width: "15rem" }}> 
                <img src={animal} className="card-img-top" alt="..." />
                <h3 className='cardtext'>Animal</h3>
            </div>
            <div className="card" style={{ width: "15rem" }}> 
                <img src={yoga} className="card-img-top" alt="..." />
                <h3 className='cardtext'>Health</h3>
            </div>
            <div className="card" style={{ width: "15rem" }}> 
                <img src={food} className="card-img-top" alt="..." />
                <h3 className='cardtext'>Food</h3>
            </div>
            <div className="card" style={{ width: "15rem" }}> 
                <img src={sports} className="card-img-top" alt="..." />
                <h3 className='cardtext'>Sports</h3>
            </div>
        </div>
    </div>
    </center>
  );
}
