import { createRouter } from 'kenote-react-utils'
import AppEntry from '../containers/app'
import { PageNotFound } from '../components'
import * as Pages from '../pages'

export default createRouter({
  context: '/',
  entry: AppEntry,
  features: Pages,
  notFound: PageNotFound
})