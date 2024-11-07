import Card from '@/app/components/Card'
import Card2 from '@/app/components/Card2'
import Card3 from '@/app/components/Card3'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

export default function page() {
  return (
    <div>
        <Header/> <br /><br /> <br />
        <Card/>
        <Card2/>
        <Card3/>
        <Footer/>
    </div>
  )
}
