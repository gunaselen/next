import type { AppProps } from 'next/app'

import Providers from "@/app/Providers";

export default function MyApp({ Component, pageProps }: AppProps) {

    return  <Providers>
                <Component {...pageProps} />
            </Providers>
}