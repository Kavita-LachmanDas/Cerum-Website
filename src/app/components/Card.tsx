import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Card() {
  return (
    <div>
        


   <div className="container flex justify-center items-center p-[30px]">
      <div className="flex flex-wrap justify-center mt-4 gap-10 text-center ">
       
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
         
          <Image src="/img1.webp" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Hydro Cool Serum</h5>
            <p className="card-text">
              "Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality."
            </p>
            <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>

      
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
         
  <Image src="/img2.webp" alt='hi' width="300" height={300}></Image>

          <div className="card-body p-[20px]">
            <h5 className="card-title">Vitamin-E Serum</h5>
            <p className="card-text">
              "Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing."
            </p>
            <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>

   
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
        <Image src="/img3.webp" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Vitamin+O Serum</h5>
            <p className="card-text">
              "Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality."
            </p>
            <button  className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>
      </div>
    </div>





    </div>
  )
}
