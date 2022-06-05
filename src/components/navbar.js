import {Link} from 'react-router-dom';

function Navbar({
  navArray
}) {
  let firstNav = `${navArray[0].text}`;
  let firstPage = `${navArray[0].page}`;
  let secNav = `${navArray[1].text}`;
  let secPage = `${navArray[1].page}`;
  let thirdNav = `${navArray[2].text}`;
  let thirdPage = `${navArray[2].page}`;

  return (
    <div className='NavBar'>
      <header>
        <ul>
          <li className="btn1"><Link style={{textDecoration: 'none'}} to={firstPage}><h3>{firstNav}</h3></Link></li>
          <li className="btn2"><Link style={{textDecoration: 'none'}} to={secPage}><h3>{secNav}</h3></Link></li>
          <li className="btn3"><Link style={{textDecoration: 'none'}} to={thirdPage}><h3>{thirdNav}</h3></Link></li>
        </ul>
      </header>
    </div>);
}

export default Navbar
  
  