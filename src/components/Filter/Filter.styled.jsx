import styled from "styled-components";

export const Form = styled.form`
margin: 50px auto 50px;
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
export const Label = styled.label`
margin-bottom: 16px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
`
export const Input = styled.input`
    width: 100%;
    font-size: 18px;
    line-height: 1.5;
    border-bottom: 2px solid rgb(209, 229, 244);
    border-top:none;
    border-left:none;
    border-right:none;
margin-top:20px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    background-color: #e9f4f2;
    &:focus{
      outline:none;
        border-color: red;
        background-color: #e9f4f2;
    }
`