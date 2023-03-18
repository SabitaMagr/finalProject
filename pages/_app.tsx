import AdminMainLayout from "@/layout/AdminMainLayout"
import "@/styles/output.css"
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        pageProps?.type == 'admin' ?
          <AdminMainLayout>
            <Component {...pageProps} />
          </AdminMainLayout>
          :
          <Component {...pageProps} />

      }

    </>

  )
}
