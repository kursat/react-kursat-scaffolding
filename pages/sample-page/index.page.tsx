import React, { useCallback } from 'react'
import Button from '../../components/core/Button/Button'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { decrement, increment, incrementByAmount } from '../../store/counter'

const SamplePage = () => {
  const dispatch = useAppDispatch()

  const count = useAppSelector((state) => state.counter.value)

  const onClickIncrement = useCallback(() => {
    dispatch(increment())
  }, [dispatch])
  const onClickIncrementFive = useCallback(() => {
    dispatch(incrementByAmount(5))
  }, [dispatch])
  const onClickDecrement = useCallback(() => {
    dispatch(decrement())
  }, [dispatch])
  const onClickDecrementFive = useCallback(() => {
    dispatch(incrementByAmount(-5))
  }, [dispatch])

  return (
    <div>
      <Button onClick={onClickDecrementFive}>-5</Button>
      <button onClick={onClickDecrement}>-</button>
      {count}
      <button onClick={onClickIncrement}>+</button>
      <button onClick={onClickIncrementFive}>+5</button>
    </div>
  )
}

export default SamplePage
