import styled from 'styled-components'

export const Container = styled.div`
  background-color: #5b4f8e;
  border-bottom: 5px solid #a7dbfb;
  width: 100%;
  header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin: 0 50px;
    align-items: center;
    img {
      width: 120px;
      height: 53px;
    }
    nav {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      a,
      button {
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        margin-left: 20px;
        color: white;
        font-size: 16px;
        transition: all 0.5s;
        &:hover {
          color: #a7dbfb;
        }
      }
      .divider::after {
        content: '•';
        color: white;
        padding-left: 10px;
      }
      #notification {
        img {
          width: 27px;
          height: 28px;
        }
        span {
          background-color: #00cff7;
          color: #fff;
          padding: 1px 8px;
          border-radius: 50%;
          position: relative;
          top: -20px;
          left: -15px;
        }
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
  .not {
    width: 25px;
    height: 30px;
    img {
      width: 25px;
    }
  }

  .sair {
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 20px;
    color: #5b4f8e;
    transition: all 0.5s;
    font-size: 16px;
    background: #a7dbfb;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      color: #5b4f8e;
      background: #fff;
    }
  }
`
