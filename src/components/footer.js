import {Link} from 'react-router-dom'

function footer() {
  return (
    <footer>
        <h2>Made with React.JS</h2>
        <p>Copyright &copy; 2022</p>
        <Link style={{color:'#57cc99'}} to="/about">About</Link>
    </footer>
  )
}

export default footer;
