import { useQuery } from 'react-query'

const useMovies = () => {
  const { isLoading, error, data } = useQuery('movies', () =>
    fetch('/api/movies').then((res) => res.json())
  )

  return { isLoading, error, data }
}

export default useMovies
