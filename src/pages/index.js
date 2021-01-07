import React, { useState } from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/data';
import Navbar from '../components/navbar';
import Services from '../components/services';
import Sidebar from '../components/SideBar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
            
        </>
    )
}

export default Home
