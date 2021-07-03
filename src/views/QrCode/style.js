import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h1 {
    color: #5b4f8e;
    margin-top: 30px;
  }
  p {
    color: #20295f;
    margin: 0;
  }
`
export const QrCodeArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
`
export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;

  span {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
  }
  input {
    font-size: 18px;
    padding: 10px;
    text-align: center;
    border-radius:14px;
    border:0;
    background:#eee;
    border: 1px solid  #e9e9e9;
  }
  button {
    font-weight: bold;
    background-color: #5b4f8e;
    color: white;
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
    border: none;
    margin-top: 10px;
    transition: all 0.5s;
    &:hover {
      background-color: #a7dbfb;
    }
  }
`
export const obs = styled.p`
font-size:12px;
color:red;
`