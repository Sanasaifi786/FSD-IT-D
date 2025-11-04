import { useState } from 'react'

function App(){
  const image = ["https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_hybrid&w=740&q=80",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
  ]
  // let index =0;
  const [index,setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const prev = ()=> setIndex((index-1+image.length)%image.length);
  const next = ()=> setIndex((index+1)%image.length); 

  const rotateLeft = () => setRotation(rotation - 90);
  const rotateRight = () => setRotation(rotation + 90);

  return (
    <div className="container">
      <div className='image'>
      <h2>Image Slider</h2>
      <img src={image[index]} alt="" style={{
    width: '50px',
    height: '50px',
    backgroundColor: 'teal',
    transform: `rotate(${rotation}deg)`,
  }}/>
      <div id="image-slider">
        <button onClick={prev} className='btn btn-outline-primary'>left</button>&nbsp;
        <button onClick={next} className='btn btn-outline-primary'
        >right</button><br /><br />
      </div>
      <div id='rotate-img'>
         <button onClick={rotateLeft} className='btn btn-primary'>Rotate Left</button>&nbsp;
        <button onClick={rotateRight} className='btn btn-primary'>Rotate Right</button>
      </div>
    </div>
    </div>
  )
}

export default App
