import React from 'react'
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.jpg"
export default function Articles() {
  return (
    <center>
    <div  style={{display:"flex",justifyContent:"normal",padding:"50px",flexDirection:"column",width:"80%",paddingBottom:"60px"}}>
    <h1 style={{marginBottom:"30px"}}>Recent Articles</h1>
    <div className='articles'>
        <div className="card" style={{width: "47%"}}>
            <img src={card1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">Pedaling Paradise: Exploring Mountain Trails on Two Wheels</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium provident ab ex amet consequuntur! Debitis odio eos, optio ipsum repellat vitae tempore nemo blanditiis?</p>
                <h5 style={{color:"#ef5145"}}>Read More</h5>
            </div>
        </div>
        <div className="card" style={{width: "47%"}}>
            <img src={card2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">Rhythm of Productivity: Syncing Beats with Work</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima ab quaerat, dolore placeat voluptatem facilis. A quos voluptatum explicabo porro dolorem expedita rerum laudantium debitis et? Esse officiis eaque libero fugit nulla nesciunt, ex impedit? Ut praesentium dolores quo eum laborum aut facilis corrupti?</p>
                <h5 style={{color:"#ef5145"}}>Read More</h5>
            </div>
        </div>
    </div>
    <div className='articles'>    
        <div className="card" style={{width: "47%"}}>
            <img src={card3} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">Data Dive: Unveiling Insights - Analytics at a Glance</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem dignissimos exercitationem perferendis dolorum possimus nam reiciendis numquam, autem tempora iste soluta, repellendus tenetur. Perspiciatis distinctio modi non cupiditate quidem ipsum neque? Minima, eaque delectus!</p>
                <h5 style={{color:"#ef5145"}}>Read More</h5>
            </div>
        </div>
        <div className="card" style={{width: "47%"}}>
            <img src={card4} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">Whiskered Wanderer: A Squirrel's Tale of Urban Exploration</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem quaerat molestiae quas voluptatibus saepe, veritatis reprehenderit libero blanditiis sit!</p>
                <h5 style={{color:"#ef5145"}}>Read More</h5>
            </div>
        </div>
    </div>
    </div>
    </center>
  )
}
