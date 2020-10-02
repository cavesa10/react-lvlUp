import styled, {css} from "styled-components";
import { fadeIn } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin: -30px 0 20px 0;
  &&::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
  {
    ${fadeIn()};
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0020px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 10px auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.7);
    z-index: 100;
  }
  `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
