import React from 'react'
import type { AppProps } from 'next/app'
import '@app/scss/global.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return <Component {...pageProps} />
}

export default MyApp
