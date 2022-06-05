import Navbar from './navbar'
import Galgje from "../assets/Galgje_app.jpg";
import Portfolio from "../assets/Portfolio_web.jpg";
import Scobiel from "../assets/scobiel_web.jpg";
import AHApp from "../assets/AH_app.jpg";
import {BsGithub} from 'react-icons/bs'

function Projects() {
    let projects = [
        {id:0, name:'Scooter Renting Website', desc:'For our finals we had to make a website for renting out products. We did this project in a team of 5. We came up with the idea to rent scooters. Whilst the guys from my team were mainly building the front end of the project. I was the one responsible for the back end and database. I also did the system design. It\'s a fully functional site. You an make an account and rent a scooter of your choice. You can view this project and more by clicking the Github icon below.',link:'', image:Scobiel},
        {id:1, name:'Albet Heijn Calendar app', desc:'Whilst working at Albert Heijn we used their website to see the planning for each week. The website was outdated and it looked plain. I did some diging and found how the website did the API calls. I reverse engineered them and put them in a simple Xamarin app. With this app you log in once and can view the schedule for the current week. You can view this project and more by clicking the Github icon below.',link:'https://github.com/Onizuka893/AlbetHeinCalendar', image:AHApp},
        {id:2, name:'Hangman', desc:'For my first semester at PXL. We had to make a fully functional hangman game. With extra\'s such as a customizable timer and lives, also a highscore board. When I look back at this project i can think of a 1000 things I could improve. But I want to keep it in it\'s original form. So I can look back at it and see how much I have improved over time. You can view this project and more by clicking the Github icon below.',link:'https://github.com/Onizuka893/Galgje', image:Galgje},
        {id:3, name:'This Portfolio Website', desc:'This portfolio might look simple, but a lot of time went into making it. Most of the time went mainly into learning the quircks of React. Before this I made a plain HTML portfolio. To impress recruiters I wanted to make a portfolio by using state of the art technology. My choice React. React is a great library to use. You can view this project and more by clicking the Github icon below.',link:'', image:Portfolio}
    ];

    let navArray = [
        {text:'Who am I?', page:'/profile'},
        {text:'What are my skills?', page:'/skills'},
        {text:'Go Back', page:'/'}
      ];

  return (
      <>
        <Navbar navArray={navArray}/>
        <div className="container_projects">
        {projects.map((project,id)=>{
            return <div className="project_card" key={id}>
            <h1 style={{color:'#38A3A5'}}>{project.name}</h1>
            <div className="card_container">
                <p style={{color:'azure', fontWeight:'bold', fontSize:'18px', width:'60%', marginTop:'10px'}}>{project.desc}</p>
                <img src={project.image} alt={project.name} />
            </div>
            <a href={project.link} rel='noreferrer' target={"_blank"}><BsGithub style={{fontSize:'30px',color:'#38A3A5'}}/></a>
        </div>
        })}
    </div>
      </>
  )
}

export default Projects;
