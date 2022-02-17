import { Provider } from 'react-redux'
import { store } from '../../store/store'
import SamplePage from './index.page'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Sample Page',
  component: SamplePage,
}

export const SamplePageStory = () => (
  <Provider store={store}>
    <SamplePage />
  </Provider>
)
