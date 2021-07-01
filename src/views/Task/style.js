import styled from 'styled-components'

export const Task = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.div`
  width: 50%;
  max-width: 100%;
  min-height: 850px;
`
export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
  .inative {
    opacity: 0.5;
  }
`
export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    color: #5b4f8e;
    margin-bottom: 7px;
  }
  input {
    font-size: 16px;
    padding: 15px 0;
    border: none;
    border-bottom: 1px solid #5b4f8e;
    margin: 10px 0px 20px;
  }
  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 95%;
    top: -55px;
  }
`
export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  span {
    color: #5b4f8e;
    margin: 7px 0;
  }
  textarea {
    font-size: 16px;
    padding: 15px;
    border: none;
    border: 1px solid #5b4f8e;
    border-radius: 4px;
    outline: none;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    color: #5b4f8e;
    font-weight: bold;
    cursor: pointer;
    font-size: 17px;
    transition: all 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }

  div {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #5b4f8e;
  }
`

export const Save = styled.div`
  width: 100%;

  button {
    width: 100%;
    border: none;
    background: #5b4f8e;
    font-size: 20px;
    color: white;
    padding: 10px;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      background: #a7dbfb;
    }
  }
`
