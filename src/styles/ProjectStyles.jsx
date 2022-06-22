import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    padding: 80px;
`

export const CardWrapper = styled.div`
    display: grid;
 
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
`

export const Heading = styled.h1`
text-align: center;
padding-bottom: 50px;
`

export const CardLinks = styled.div`
    display: flex;
    align-items:center ;
`