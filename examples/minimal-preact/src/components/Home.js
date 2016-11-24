import { h, Component } from 'preact'
import { Link } from 'preact-router'

export default () => (
  <div style={styles.containerStyle}>
    <h1>Github search</h1>
    <Link style={styles.button} href='/github?user=okbel'>
      Buscar
    </Link>
  </div>
)

const styles = {
  containerStyle: {
    paddingTop: '20px',
    width: '500px',
    margin: '0 auto',
    fontFamily: 'Menlo, Monaco, Lucida Console, Courier New, monospace, serif'
  },
  button: {
    fontFamily: 'Helvetica, Arial',
    padding: '5px 30px',
    borderRadius: '3px',
    color: '#fff',
    textShadow: '0 -1px 0 rgba(0,0,0,0.15)',
    backgroundColor: '#6cc644',
    backgroundImage: '-webkit-linear-gradient(#91dd70, #55ae2e)',
    backgroundImage: 'linear-gradient(#91dd70, #55ae2e)',
    border: '1px solid #5aad35',
    textDecoration: 'none'
  }
}