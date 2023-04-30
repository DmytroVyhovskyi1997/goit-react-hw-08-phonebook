import styled from "styled-components";
export const Div = styled.div`
margin: 30px auto 50px;
    padding: 48px 64px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 32px;
    background-color: #e9f4f2;
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;
`

export const Button = styled.button`
padding: 8px 24px;
font-size: 14px;
    line-height: 1.5;
    font-weight:bold;
display: inline-flex;
margin-left:20px;
-webkit-box-align: center;
align-items: center;
gap: 4px;
color: rgb(24, 24, 24);

background-color: rgb(255, 255, 255);
border-radius: 12px;
border:none;
box-shadow: rgb(209 229 244) 0px 0px 0px 2px;


&:hover,focus{
    color:white;
    background-color: red;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s
}
`

export const Ul = styled.ul`
display: grid;
padding:0;
    align-items: center;
    justify-content: space-around;
`

export const Li = styled.li`
display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Text = styled.p`
font-size: 18px;
    line-height: 1.5;
    font-weight:bold;
`