import React from 'react'
import post1 from "../assets/post1.jpg"
import post2 from "../assets/post2.jpg"
import post3 from "../assets/post3.jpg"
import post4 from "../assets/post4.jpg"

import icon1 from "../assets/icon1.jpg"
import icon2 from "../assets/icon2.jpg"
import icon3 from "../assets/icon3.jpg"
import icon4 from "../assets/icon4.jpg"

const Posts = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px",margin:"30px",width:"90%",marginLeft:"5%"}}>


        <div style={{display:"flex",flexDirection:"row",gap:"30px"}}>

            <div>

                    <div style={{display:"flex",flexDirection:"row",gap:"15px"}}>
                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={post1} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Elegance Unveiled: Timeless Home Decor Trends</h5>
                                    <p className="card-text">Explore enduring sophistication with classic pieces and refined accents, crafting spaces that exude timeless elegance and understated luxury.</p>
                                    <button style={{color:"white",backgroundColor:"#ef5145",width:"200px",border:"none",padding:"10px",margin:"20px",borderRadius:"10px"}}>Read More!</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={post2} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Artistry at Home: Crafting Spaces with Decor Delights</h5>
                                    <p className="card-text">Infuse creativity into living spaces with curated artworks and bespoke furnishings, creating personalized havens that reflect individual style and personality.</p>
                                    <button style={{color:"white",backgroundColor:"#ef5145",width:"200px",border:"none",padding:"10px",margin:"20px",borderRadius:"10px"}}>Read More!</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",gap:"15px"}}>
                      <div className="card mb-3" style={{maxWidth: "540px"}}>
                          <div className="row g-0">
                              <div className="col-md-4">
                              <img src={post3} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">Serenity in Style: Creating Tranquil Havens with Home Decor</h5>
                                  <p className="card-text">Achieve serenity with soothing colors and natural elements, fostering tranquil environments that offer relaxation and rejuvenation in every corner.</p>
                                  <button style={{color:"white",backgroundColor:"#ef5145",width:"200px",border:"none",padding:"10px",margin:"20px",borderRadius:"10px"}}>Read More!</button>
                              </div>
                              </div>
                          </div>
                      </div>
                      <div className="card mb-3" style={{maxWidth: "540px"}}>
                          <div className="row g-0">
                              <div className="col-md-4">
                              <img src={post4} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">Chic Retreats: Elevating Spaces with Contemporary Home Decor</h5>
                                  <p className="card-text">Elevate your surroundings with sleek lines and modern flair, transforming your home into chic retreats that blend style with comfort seamlessly.</p>
                                  <button style={{color:"white",backgroundColor:"#ef5145",width:"200px",border:"none",padding:"10px",margin:"20px",borderRadius:"10px"}}>Read More!</button>
                              </div>
                              </div>
                          </div>
                      </div>
                    </div>
            </div>

                    <div style={{display:"flex",flexDirection:"column",width:"20%"}}>
                      <div className="card">
                        <h5 className="card-header">All Keywords</h5>
                        <div className="card-body">
                          <h5 className="card-title">Choose your required field</h5>
                          <span className='field'>Hotels</span>
                          <span className='field'>Sports</span>
                          <span className='field'>Cars</span>
                          <span className='field'>Shoes</span>
                          <span className='field'>Technology</span>
                          <span className='field'>Hotels</span>
                          <span className='field'>Sports</span>
                          <span className='field'>Cars</span>
                          <span className='field'>Shoes</span>
                          <span className='field'>Technology</span>          
                          <span className='field'>Cars</span>
                          <span className='field'>Shoes</span>
                        </div>
                      </div>
                    </div>
        </div>
          <div className="card">
            <h5 className="card-header" style={{backgroundColor:"#f6847c"}}>Discover Author</h5>
            <div className="card-body2">
              <div className='icon'><img src={icon1} /><h3>philip dunphy</h3></div>
              <div className='icon'><img src={icon4} /><h3>luke dunphy</h3></div>
              <div className='icon'><img src={icon2} /><h3>alex dunphy</h3></div>
              <div className='icon'><img src={icon3} /><h3>manny delgado</h3></div>
            </div>
         </div>
    </div>
  )
}

export default Posts
