import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer,InfoWrapper, InfoRow, Column1, Column2, TextWrapper,TopLine,Heading,Subtitle,BtnWrap, ImgWrap, Img } from './infoElements';

const infoSection = () => {
    return (
        <>
         <InfoContainer>
             <InfoWrapper>
                 <InfoRow>
                     <Column1>
                        <TextWrapper>
                            <TopLine>Top Line</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Suntitle</Subtitle>
                            <BtnWrap>
                              <Button to="home"/>  
                            </BtnWrap>
                        </TextWrapper>
                     </Column1>
                     <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
             </InfoContainer>   
        </>
    )
}

export default infoSection
