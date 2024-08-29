import React from "react";
import Layout from '@/components/_App/Layout'
import AppState from '@/context/AppState'

// Import Styles 
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/utilities.css'
import '@/styles/app.css'
import '@/styles/home.css'
import '@/styles/responsive.css'
import '@/styles/fontawesome.min.css'
import '@/styles/about.css'
import '@/styles/contact.css'
import '@/styles/pe-icon-7-stroke.css'
import '@/styles/blog.css'



export default function App({ Component, pageProps }) {
  return (
    <AppState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppState>
  )
}
