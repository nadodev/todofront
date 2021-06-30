import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    align-items:center;
`;
export const Content = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    width: 50%;

    h1{
      color: #ee6b26;
      margin-top:30px;
    }
    p{
      color:#20295f;
      margin:0;
    }
`;
export const QrCodeArea = styled.div`
  display: flex;
  justify-content:center;
  margin-top:30px;
  flex-direction:column;
`;
export const ValidationCode = styled.div`
  display: flex;
  flex-direction:column;

  span{
    text-transform:uppercase;
    font-weight:bold;
    text-align:center;
    margin-top:30px;
  }
  input{
    font-size: 18px;
    padding:10px;
    text-align:center;
  }
  button{
    font-weight:bold;
    background-color:#ee6b26;
    color:white;
    font-size:18px;
    padding:10px;
    border-radius:30px;
    cursor:pointer;
    border:none;
    margin-top:10px;
transition:all 0.5s;
    &:hover{
      background-color:#20295f;
    }
  }
`;