import React from 'react'
// import { ButtonUnstyled } from "@mui/base";
import { Button as MaterialButton } from '@mui/material'

// TODO Write styles for ButtonUnstyled

type PropTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}

const Button: React.FC<PropTypes> = ({ children, color, ...otherProps }) => {
  return (
    <MaterialButton variant={'contained'} color={color} {...otherProps}>
      {children}
    </MaterialButton>
  )
}

Button.defaultProps = {
  color: 'primary',
}

export default Button
