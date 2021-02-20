import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1.title {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;

  h1{
    margin-bottom: 15px;
    align-items: center;
    font-size: 17px;
  }

  ul{
    margin-bottom: 15px;
    align-items: center;
    font-size: 17px;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
  }

  button {
    background: #20b2aa;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    }
  `;

export const RemoveButton = styled.button`
  background: #FFF;
  border: 0;
  padding: 0 8px;
  
  border-radius: 4px;
`;


