import styled from "styled-components";
type props = {
    countri?: string;
}
export const TableStyled = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  margin-top: 16px;
  width: 100%;
  -webkit-box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
`
export const Header = styled.tr`
  margin: 140px 140px;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #414141;
`
export const Wrapper = styled.div`
    
`
export const Row = styled.tr`
height: 66px;
  padding: 0px 108px;
  &:hover {
    background-color: #eaeaea;
  }
`
export const Avatar = styled.img`
  border-radius: 50%;
`
export const Td = styled.td`
 padding: 8px 24px;
 border-bottom: 1px solid #dddddd;
 &.blue {
  color: #1f9eff;
 } 
`
export const Th =styled.th` 
 padding: 16px 16px;
`
export const Tbody = styled.thead`
  
`
export const ColorizeCountry = styled.div`
  border-radius: 4px;
  padding: 4px 6px;
  background-color: ${(props: props) => props.countri ? props.countri : "#a5a5a5 "};
`
export const CopyToClipboard = styled.div`
  cursor: pointer;
`
