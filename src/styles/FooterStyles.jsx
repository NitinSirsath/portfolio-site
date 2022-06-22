import styled from "styled-components";


export const Container = styled.div`
   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
   
    /* position:fixed;
   bottom:0; */
   width: 100% ;
   /* margin-top: 50px; */
   color: #d5d2d2;

   
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    background-color: black;
   padding: 100px 100px 100px 100px;
   @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
}
`
export const LinkSection = styled.div`
    
`
export const LogoSection = styled.div`
display: flex;
gap: 15px;
padding-bottom: 70px;
`
export const SpeechParagraph = styled.div`
    padding-bottom: 40px;
`

export const InfoSection = styled.div`
        display:flex;
        gap: 150px;
        @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
}
`
export const LinksCard = styled.div`
    display: flex;
    
    align-items: center;
    gap: 30px;
    `   
export const ListItem = styled.li`
    list-style: none;
`    
export const ListCard = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`    

export const BottomFooter = styled.div`
    display:  flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0c0c0c;
    padding: 30px 50px;

    @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
`