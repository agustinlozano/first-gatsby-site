import React from 'react'
import { paragraph, code } from './occupation.module.css'

// const paragraphStyles = {
//   marginBottom: 48
// }
// const codeStyles = {
//   color: '#8A6534',
//   padding: 4,
//   backgroundColor: '#FFF4DB',
//   fontSize: '1.25rem',
//   borderRadius: 4
// }

const Occupation = () =>
  <p className={paragraph}>
    I'm Agustin, <code className={code}>software engineer Jr.</code>
  </p>

export default Occupation
