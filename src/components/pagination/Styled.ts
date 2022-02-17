import styled from "styled-components";

type props = {
    disabled?: boolean,
    active? :string,
}

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`
export const Button = styled.button`
  font-weight: 500;
  text-align: center;
  line-height: 30px;
  min-width: 32px;
  height: 34px;
  margin: 1px 1px;  
  cursor: ${(props: props) =>  props.disabled ? 'auto' : 'pointer'};
`
export const Li = styled.li` 
  font-weight: 500;
  text-align: center;
  line-height: 32px;
  min-width: 32px;
  height: 32px;
  margin: 1px 1px;
  

  vertical-align: middle;
  cursor: ${(props: props) => props.active ? 'default' : 'pointer'} ;
  border: 1px solid ;
  border-color:  ${(props: props) => props.active ? '#0077b6' : 'gray'};
  color: ${(props: props) => props.active ? '#0077b6' : '#4c5358'};
  border-radius: 4px;
  &:hover {
  background-color: rgba(192,192,192, 24%);
  }
  &:active {
  background-color: rgba(192,192,192, 36%);
  }
`
