import { h, Component } from 'preact'

export default ({user}) => (
  <div style={styles.containerStyle}>
    <img style={styles.imgStyle} src={user.avatar_url} />
    <h2 style={styles.nameStyle}>
      {user.name}
    </h2>
    <h1 style={styles.userNameStyle}>
      {user.login}
    </h1>
    <p style={styles.bioStyle}>
      {user.bio}
    </p>
    <div>
      <ul style={styles.list}>
        <li>{user.location}</li>
        <li>
          <a style={styles.linkStyle}>
            {user.email}
          </a>
        </li>
        <li>
          <a style={styles.linkStyle}>
            {user.blog}
          </a>
        </li>
      </ul>
    </div>
  </div>
)

const styles = {
  containerStyle: {
    paddingTop: '20px',
    width: '500px',
    margin: '0 auto',
    fontFamily: 'Menlo, Monaco, Lucida Console, Courier New, monospace, serif'
  },
  imgStyle: {
    maxHeight: '200px',
    borderRadius: '3px'
  },
  nameStyle: {
    fontSize: '26px',
    lineHeight: '30px'
  },
  userNameStyle: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '300px',
    lineHeight: '24px',
    color: '#666'
  },
  bioStyle: {
  },
  linkStyle: {
    color: '#4078c0',
    textDecoration: 'none'
  },
  list: {
    padding: '20px 0',
    listStyle: 'none',
    borderTop: 'solid 1px #e5e5e5'
  }
}