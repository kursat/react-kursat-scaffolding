import React from 'react'

type PropTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<PropTypes> = ({ children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>
}

export default Button
