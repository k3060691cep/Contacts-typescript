import styled from "styled-components";

type props = {
    active? :string,
}

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`
export const Li = styled.li` 
  margin: 4px 4px;
  padding: 4px 4px;
  cursor: ${(props: props) => props.active ? 'default' : 'pointer'} ;
  border: 1px solid ;
  border-color:  ${(props: props) => props.active ? '#0077b6' : 'gray'};
  color: ${(props: props) => props.active ? '#0077b6' : '#212529'};
  border-radius: 4px;
  &:hover {
  background-color: rgba(192,192,192, 24%);
  }
  &:active {
  background-color: rgba(192,192,192, 36%);
  }
`
