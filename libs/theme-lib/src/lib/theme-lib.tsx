import { purple } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const ThemeLib = createMuiTheme({
  palette: {
    // primary: { 500: '#467fcf' },
    primary: {
      main: purple[500],
    },
  },
})
export default ThemeLib
