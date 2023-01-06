import { useEffect } from 'react'
import { useAppDispatch } from './useRedux'
import { changeBackgroundImage } from '../actions/sliderActions' 
import { slider } from '../utils/slider' 

const useChangeBackgroundImage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(changeBackgroundImage(slider[0].image))

  },[])

  const handleCarouselChange = (index: number) => {
    dispatch(changeBackgroundImage(slider[index].image))
  }

  return { handleCarouselChange }
}

export default useChangeBackgroundImage



  