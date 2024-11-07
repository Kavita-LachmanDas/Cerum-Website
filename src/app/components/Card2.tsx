import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
export default function Card2() {
  return (
    <div>
          <div className="container flex justify-center items-center p-[30px]">
      <div className="flex flex-wrap justify-center mt-4 gap-10 text-center ">
   
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
        <Image src="/img4.webp" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">SPF+2 Serum</h5>
            <p className="card-text">
            &quot;Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing. Embrace the pure essence of vitality as you revitalize and renew your complexion..
            &quot;
            </p>
            <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>

        {/* Product 2 */}
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
         
           <Image src="/img5.webp" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Charcoal Serum</h5>
            <p className="card-text">
            &quot;Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality. Our luxe products revitalize and renew, offering a smooth, soft touch that refreshes and balances&quot;.

            </p>
            <button className='butt'>   <Link href="https://goodhabitskin.com" className="btn btn-primary">
              Order Now
            </Link> </button> 
          </div>
        </div>

        {/* Product 3 */}
        <div className="card mb-4 mx-4" style={{ width: '18rem' }}>
        <Image src="/img4.webp" alt='hi' width="300" height={300}></Image>
          <div className="card-body p-[20px]">
            <h5 className="card-title">Neem+SPF Serum</h5>
            <p className="card-text">
            &quot;Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing. Embrace the pure essence of vitality as you revitalize and renew your complexion.&quot;

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
