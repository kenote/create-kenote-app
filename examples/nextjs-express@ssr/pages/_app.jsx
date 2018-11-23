import * as React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import nextRouter from 'next/router'
import '../styles/common.scss'
import '../styles/nprogress.scss'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'


nextRouter.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
nextRouter.events.on('routeChangeComplete', () => NProgress.done())
nextRouter.events.on('routeChangeError', () => NProgress.done())

@withRedux(initStore)
export default class MyApp extends App {

  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
    
  }

  render () {
    let { Component, pageProps, store } = this.props
    return (
      <Container>
        <Head >
          <title>Next.js App</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}