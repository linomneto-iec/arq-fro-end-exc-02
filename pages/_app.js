import '../styles/globals.scss'
import App from 'next/app';
import Layout from '../components/layout'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
