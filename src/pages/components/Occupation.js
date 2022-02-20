import React from 'react'

const paragraphStyles = {
  marginBottom: 48
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
}

const Occupation = () =>
  <p style={paragraphStyles}>
    I'm Agustin, <code style={codeStyles}>software engineer Jr.</code>
  </p>

export default Occupation
