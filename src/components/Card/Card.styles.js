import { styled } from 'styled-components'

export const Card = styled.li`
  background-color: rgb(60, 168, 60);
  border-radius: 10px;
  //   cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const Picture = styled.div`
  position: relative;
  padding-bottom: 320px;
`
export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const CardBody = styled.div`
  padding: 10px;
`
export const CardText = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`
export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  font-size: 20px;
  border-radius: 15px;
  padding: 2px 8px;
  width: 120px;
  background-color: rgb(56, 138, 56);
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(0, 1px);
  }
  &:active {
    transform: translate(0, 3px);
  }
`
export const ButtonSvg = styled.svg`
  width: 30px;
  height: 30px;
  fill: transparent;
  fill: ${(props) => (props.primary ? 'red' : '')};
`
