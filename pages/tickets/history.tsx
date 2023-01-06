import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const historyTicketsPage = () => {
  const data = useSelector((state: RootState) => state.sliderImage)

  return (
    <pre>{JSON.stringify(data, null, 4)}</pre>
  )
}

export default historyTicketsPage