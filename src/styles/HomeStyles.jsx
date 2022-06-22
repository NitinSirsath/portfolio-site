import styled from "styled-components";

export const Container = styled.div`

`

export const WrapperHead = styled.div`
   display: grid;
   place-items: center;
    gap: 30px;
    min-height: 100vh;
    color: #f4f2f2;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.background});

        h1{
            padding: 20px 0px ;
            color: goldenrod ;
        }
`
export const Icons = styled.div`
    display: flex;
    justify-content:center ;
    gap: 20px;
    margin: 30px 0px;

`

export const SkillContainer = styled.div`
    padding: 80px 200px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.background});
    

        h1{
            color: #032165;
        }
`
export const ListItems = styled.li`
    list-style: none;
    margin: 50px 0px;

           

            h2{
                color: darkred;
            }
        
        span{
                font-weight: 400;
        }
`
