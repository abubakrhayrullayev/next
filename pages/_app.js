import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Layouts} from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
