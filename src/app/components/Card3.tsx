import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Card3() {
  return (
    <div>
          <div className="container flex justify-center items-center p-[30px]">
      <div className="flex flex-wrap justify-center mt-4 gap-10 text-center ">
        {/* Product 1 */}
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
         
           <Image src="/img6.gif" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Hydro+X Serum</h5>
            <p className="card-text">
            &quot;Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality.&quot;
            </p>
        <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>

      
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
         
           <Image src="/img7.gif" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Windest Serum</h5>
            <p className="card-text">
            &quot;Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing.&quot;
            </p>
            <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button>  
          </div>
        </div>

     
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
         
           <Image src="/img8.gif" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Serum E+V</h5>
            <p className="card-text">
            &quot;Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality.&quot;
            </p>
            <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}
