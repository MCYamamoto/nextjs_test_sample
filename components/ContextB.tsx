import { VFC } from 'react'
import { useStateContext } from '../context/StateProvider'

const ContextB: VFC = () => {
  const { toggle } = useStateContext()
  return (
    <>
      <p>Context B</p>
      <p className="mb-5 text-indigo-600" data-testid="toggle-b">
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}

export default ContextB
