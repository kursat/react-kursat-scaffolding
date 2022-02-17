import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../components/core/Button/Button'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import useMovies from '../../hooks/useMovies'
import { decrement, increment, incrementByAmount } from '../../store/counter'

import Rollbar from 'rollbar'

const SamplePage = () => {
  const [rollbar, setRollbar] = useState<Rollbar | null>(null)
  useEffect(() => {
    const instance = new Rollbar({
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true,
    })

    setRollbar(instance)
  }, [])

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

  const createError = useCallback(() => {
    throw new Error('Kursat codebase is testing rollbar')
  }, [])

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

      <h1>Rollbar</h1>

      <Button onClick={createError}>Throw Error</Button>
    </>
  )
}

export default SamplePage
