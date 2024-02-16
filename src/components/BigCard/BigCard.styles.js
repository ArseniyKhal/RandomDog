import { styled } from 'styled-components'
import { Button } from '../../App.styles'

export const BigCard = styled.div`
  height: 100vh;
  background-color: rgb(166, 224, 166);
`
export const Content = styled.div`
  //   height: 100vh;
  padding: 10px;
  background-color: rgb(60, 168, 60);
  //   border-radius: 10px;
  //   //   cursor: pointer;
  //   overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const MainContent = styled.div`
  height: 100vh;
  padding: 10px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: 24px;
  border-radius: 15px;
  padding: 8px;
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
export const ToMainButton = styled(CardButton)`
  width: 400px;
  margin: 10px auto;
  padding: 0;
`
export const ToMainButtonText = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
`
export const DownloadLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`
