import * as React from 'react'
import { headingStyles, headingAccentStyles } from './hello.module.css'

const Hello = () =>
  <h1 className={headingStyles}>
    Hello there!
    <br />
    <span className={headingAccentStyles}>— you have arrived my site! </span>
    <span role='img' aria-label='Party popper emojis'>
      🎉🎉🎉
    </span>
  </h1>

export default Hello
