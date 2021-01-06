import React from 'react';
import Video from '../../videos/Video.mp4';
import { HeroContainer,HeroBack,VideoBg } from './HeroElements';

const Hero = () => {
    return (
        
        <HeroContainer id="home">
            <HeroBack>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />    
            </HeroBack>
            <HeroContent>
                
            </HeroContent>
        </HeroContainer>   
    
    )
}

export default Hero
