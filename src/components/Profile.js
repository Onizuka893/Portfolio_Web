import Navbar from './navbar'
import {FiMail} from 'react-icons/fi'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import Foto from "../assets/profielFoto.jpeg";


function Profile({
  offsetY
}){
  let navArray = [
    {text:'Go Back', page:'/'},
    {text:'What are my skills?', page:'/skills'},
    {text:'What have I done?', page:'/projects'}
  ];

  let educations = [
    {id:0, school:'PXL', richting:'Graduaat Programmeren', time:'2021 - 2022'},
    {id:1, school:'Campus De Helix', richting:'Se-N-Se Sturing en beveiligingstechnieken', time:'2020 - 2021'},
    {id:2, school:'Campus De Helix', richting:'Chemie', time:'2017-2019'},
  ]
  return (
    <>
      <Navbar navArray={navArray}/>
      <div className="container">
          <div className="container_Profile">
            <div className="container_Profile_Pic">
              <img src={Foto} alt="profilePicture" />
            </div>
            <div className="container_Profile_About">
              <h1>About</h1>
              <p style={{color: 'azure', fontWeight: 'bold'}}>Ik ben Volkan Ibis een 22 jarige gepassioneerde .NET-programmeur die studeert aan pxl in Hasselt.
                In mijn vrije tijd een entrepreneur. perfectionist, ambitieus, probleemoplossend, competetief
                en zelfzeker van mijn eigen om al deze beweringen te maken. Naast mijn studie als programmeur vind ik het leuk
                om Leetcode vragen op te lossen en hieruit bijleren. Van jongs af aan heb ik een fascinatie gehad
                voor technologie en games. Dit zorgt ervoor dat ik het inzicht en probleemoplossend capabiliteiten heb
                dat zeer belangrijk zijn voor een developer. Ik ben open voor nieuwe uitdagingen.</p>
              </div>
          </div>
          <div className="container_Profile_Info">
            <h1>Education</h1>
              {educations.map((item,id)=>{
                return <ul style={{listStyle:'none'}} key={id}>
                  <li><h4 style={{color:'#22577A'}}>{item.time}</h4></li>
                  <li><h3 style={{color:'azure'}}>{item.richting}</h3></li>
                  <li><h3 style={{color:'#57CC99'}}>{item.school}</h3></li>
                </ul>
              })}
          </div>
          <div className='container_Contact'>
            <a href="mailto:volkanibis123@gmail.com?subject=Hey Volkan ik heb je online CV gezien&body="><FiMail /></a>
            <a href="https://www.linkedin.com/in/volkan-ibis-015359187/" rel='noreferrer' target={"_blank"}><BsLinkedin /></a>
            <a href="https://github.com/Onizuka893" rel='noreferrer' target={"_blank"}><BsGithub /></a>
          </div>
      </div>
    </>
  )
}

export default Profile
