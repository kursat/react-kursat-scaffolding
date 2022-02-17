import { orange, purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: purple['A200'],
    },
    secondary: {
      main: orange['A200'],
    },
  },
})
