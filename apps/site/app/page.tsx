import Advertisement from '@/components/advertisement/Advertisement'
import BannerCard from '@/components/card/BannerCard'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import { Fragment } from 'react'

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function Home() {
   return (
      <Fragment>
         {/* Header */}
         <Header />

         {/* Page Body */}
         <main className="container mx-auto">
            <div>
               <BannerCard />
            </div>
            <div className=" mt-36 mb-20">
               <Advertisement />
            </div>
         </main>

         {/* Footer */}
         <Footer />
      </Fragment>
   )
}
