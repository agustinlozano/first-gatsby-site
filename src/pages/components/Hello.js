import * as React from 'react'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}
const headingAccentStyles = {
  color: '#663399'
}

const Hello = () =>
  <h1 style={headingStyles}>
    Hello there!
    <br />
    <span style={headingAccentStyles}>— you have arrived my site! </span>
    <span role='img' aria-label='Party popper emojis'>
      🎉🎉🎉
    </span>
  </h1>

export default Hello
