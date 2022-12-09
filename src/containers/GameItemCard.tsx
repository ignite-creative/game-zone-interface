import { useState } from 'react'
interface Props {
  children: React.ReactNode
}
const GameItemCard = (props: Props) => {
  const [isActive, setActive] = useState(false)
  return (
    <div>
      <h1>Game Card</h1>
      {isActive ? <h2>Active</h2> : <h2>Inactive</h2>}
    </div>
  )
}

export default GameItemCard
