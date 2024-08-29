import React from 'react';
import dynamic from 'next/dynamic'


const AboutArea = dynamic(() => import('@/components/_App/About/AboutSection'))
const TeamMembers = dynamic(() => import('@/components/_App/About/TeamMembers'))
const Breadcrumb = dynamic(() => import('@/components/_App/TitleBanner'))
const PartnerSection = dynamic(() => import('@/components/_App/About/PartnerSection'))

import { ABOUT } from "@/services/pageInfo"



const About = () => {
    return (
        <>
            <Breadcrumb data={ABOUT} />
            {/* <TitleArea /> */}
            <AboutArea />
            {/* <CounterArea /> */}
            <TeamMembers />
            <PartnerSection />


        </>
    );
}

export default About;