import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;

  div {
    margin-bottom: 10px;
  }

  label {
    font-size: 15px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    width: 100%;
    font-size: 15px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
