import { styled } from 'styled-components'
import { Button } from '../../App.styles'

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
export const CardButton = styled(Button)`
  font-size: 20px;
  width: 120px;
  background-color: rgb(56, 138, 56);
`
export const ButtonSvg = styled.svg`
  width: 30px;
  height: 30px;
  fill: transparent;
`
