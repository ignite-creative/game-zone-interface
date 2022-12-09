import Header from './Header'

interface Props {
  children: React.ReactNode
}

const MainBoard = (props: Props) => {
  return (
    <div id="main-board">
      <Header />
      {props.children}
    </div>
  )
}

export default MainBoard
