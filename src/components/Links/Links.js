import React from 'react'
import { list, linkStyle, description } from './links.module.css'

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
}

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1
}

// data
const links = [
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/agustin-lozano-blua/',
    description:
      'Here you can reach me and take a look at my professional profile.',
    color: '#E95800'
  },
  {
    text: 'Github',
    url: 'https://github.com/agustinlozano',
    description:
      'This is a great place to know all my projects, feel free to clone every repository you want and open issues.',
    color: '#1099A8'
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/AgustinnLozano',
    description:
      'I don\'t think that you want to read my Twitter account, anyway here is it.',
    color: '#BC027F'
  }
]

const OurLinks = () =>
  <ul className={list}>
    {links.map(link => (
      <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
        <span>
          <a
            className={linkStyle}
            href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {link.text}
          </a>
          {link.badge && (
            <span style={badgeStyle} aria-label='New Badge'>
              NEW!
            </span>
          )}
          <p className={description}>{link.description}</p>
        </span>
      </li>
    ))}
  </ul>

export default OurLinks
