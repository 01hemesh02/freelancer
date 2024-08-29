import React from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link'

// const MainCategory = dynamic(() => import('@/components/MainCategory'))
const HomeArea = dynamic(() => import('@/components/_App/HomePage/Banner'))
const ServicesSection = dynamic(() => import('@/components/_App/HomePage/ServicesSection'))
const CounterArea = dynamic(() => import('@/components/_App/HomePage/CounterArea'))
const OverviewSection = dynamic(() => import('@/components/_App/HomePage/OverviewSection'))

const Home = ({ parentCategories }) => {
  return (
    <>
      {/* <MainCategory /> */}
      <HomeArea />
      <ServicesSection />
      <CounterArea />
      <OverviewSection />
    </>
  );
}

export default Home;
