import React from 'react'
import photo from "../assets/landingpage.jpeg"

const Home = () => {
    const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const currentDate = today.toLocaleDateString('en-US', options);
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
        <div className='container'>
            <div>
                <div className='header'>
                    <h6>LifeStyle</h6>
                    <h5>{currentDate}</h5>
                </div>
                <div className='text'>
                    It Takes What It Takes To End Something
                </div>
                <div className='subtext'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repellat aperiam possimus. Qui doloremque nam laboriosam illum! Quia, quae natus, velit cupiditate eius laboriosam expedita pariatur aliquam impedit cum debitis.
                </div>
                <button style={{color:"white",backgroundColor:"#ef5145",width:"200px",border:"none",padding:"10px",margin:"20px",borderRadius:"10px"}}>Read More!</button>
            </div>
            <div className='image_div'>
                <img src={photo} className='image' />
            </div>
        </div>
    </div>
  )
}

export default Home
