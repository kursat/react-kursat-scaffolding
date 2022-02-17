import Head from 'next/head'
import React, { useCallback } from 'react'
import Button from '../../components/core/Button/Button'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import useMovies from '../../hooks/useMovies'
import { decrement, increment, incrementByAmount } from '../../store/counter'

const SamplePage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  const { data: movies } = useMovies()

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
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Button onClick={onClickDecrementFive} color={'secondary'}>
        -5
      </Button>
      <Button onClick={onClickDecrement}>-</Button>
      {count}
      <Button onClick={onClickIncrement}>+</Button>
      <Button onClick={onClickIncrementFive} color={'secondary'}>
        +5
      </Button>

      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </>
  )
}

export default SamplePage
