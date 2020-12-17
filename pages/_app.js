import {ThemeProvider} from "styled-components"

import {theme} from "../global/theme"
import {GlobalStyle} from "../global/global"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
