import React from 'react'
import Header from '../layout/Header.tsx/page'
import Footer from '../layout/Footer.tsx/page'

interface MainLayout {
    children:React.ReactNode
}

const RootLayout:React.FC<MainLayout> = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default RootLayout
