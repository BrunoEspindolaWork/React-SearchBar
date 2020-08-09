


import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #E2E8F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  width: 80%;
  height: 50px;
  padding: 5px;
  background-color: transparent;
`

export const Button = styled.button`
  width: 10%;
  height: 50px;
  padding: 5px;
  background-color: transparent;
  border-radius: 25px;
  color: lightgreen;
  cursor: pointer;
  font-size: 20px;
  transition: 0.2s;

  &:hover {
    font-size: 23px;
    color: #3ea457;
  }

`

export const Icon = styled.div`
  width: 10%;
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchBar = styled.div`
  background-color: white;
  width: 400px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 5px;
`

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 5px 5px 10px;
  border-radius: 6px;
  background-color: #E2E8F0;
  margin-right: 5px;
  color: #717171;

  h5 {
    margin-right: 5px;
  }

  button {
    padding: 2px 3px;
    transition: 0.5s;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0,0,0,0.2);
    color: white;
  }
`

export const Filters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  flex-wrap: wrap;
`

export const DataTable = styled.table`
  background-color: white;
  border-radius: 10px;
  padding: 10px 50px;
  font-size: 14px;
  margin-top: 20px;

  thead {
    text-align: left;
  }
 
  tbody{
    text-align: left;
  }

  tbody tr {
    border: 2px solid black;
  }

  th {
    font-weight: bold;
  }

  td {
    width: 100px;
  }
`


