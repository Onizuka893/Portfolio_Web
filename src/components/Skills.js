import Navbar from "./navbar";
import CSharpLogo from "../assets/c-sharp.svg";
import SqlLogo from "../assets/microsoft-sql.svg";
import DotNetLogo from "../assets/net.svg";
import ReactLogo from "../assets/react.svg";
import JSLogo from "../assets/javascript-js.svg";
import ReactStars from "react-rating-stars-component";
import {RiStarSmileLine,RiStarSmileFill} from 'react-icons/ri'

function Skills() {
  let skillsObj = [
    {id:0, name:'C#', level:5, img:CSharpLogo, description:'C# is my favorite language. In my education the focus lies deeply on .NET and C#. Thus I have honed my C# skills to the max.'},
    {id:1, name:'.NET', level:5, img:DotNetLogo, description:'The .NET platform has all the tools a developer could want. From Windows to Android to IOS to Linux.... With my knowledge of C#, .NET is a no brainer to use.'},
    {id:2, name:'JavaScript', level:4, img:JSLogo, description:'In this day and age you need at least a basic understanding of JS. To make a dynamic user interactable website. I can with certainty say that I have more than basic knowledge with JS.'},
    {id:3, name:'SQL', level:4, img:SqlLogo, description:'I am mainly a backend guy. But one cannot call himself such without knowing at least the basics of a DB language. My language of choice is SQL because of its seemles integration with .NET.'},
    {id:4, name:'React.JS', level:3, img:ReactLogo, description:'I chose to learn React because I believe it to be the future of web. Created by Facebook. Enjoyed and used by developers all over the globe.'}
  ]

  let navArray = [
      {text:'Who am I?', page:'/profile'},
      {text:'Go Back', page:'/'},
      {text:'What have I done?', page:'/projects'}
    ];

  return (
      <>
        <Navbar navArray={navArray}/>
        <div className="container_skills">
          {skillsObj.map((item,id)=>{
            return <div className='skill_card' key={id}>
                  <div className="skill_card_inner">
                    <div className="skill_card_front">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="skill_card_back">
                      <h1 style={{color:'#38A3A5'}}>{item.name}</h1>
                      <p>{item.description}</p>
                      <ReactStars emptyIcon={<RiStarSmileLine/>} filledIcon={<RiStarSmileFill/>} count={5} value={item.level} size={24} activeColor="#E8B90E" color="#38a3a5" edit={false}/>
                    </div>
                  </div>
              </div>
          })}
        </div>
      </>
  )
}

export default Skills;
