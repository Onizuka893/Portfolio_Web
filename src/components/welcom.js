import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'

function Welcom({
  offsetY
}) {
    const [background, setBackground] = useState("#f0ffff");

    const changeColor = (background) => {
        setBackground(background);
    }

  return <div className='main'>
        <h1 className='welcom' style={{
      transform: `translateX(${offsetY * -0.9}px)`
    }}>Welcome my name is <span style={{
        color: 'rgb(87, 204, 153)'
      }}>Volkan</span></h1>
        <h1 className='junior' style={{
      transform: `translateY(${offsetY * -0.5}px)`
    }}>I am a <span style={{
        color: 'rgb(87, 204, 153)'
      }}>junior</span> developer</h1>
        <div className='info' style={{
      transform: `translateX(${offsetY * 1.1}px)`
    }}>
          <div className='crntEdu'>
            <div style={{
          padding: '10px'
        }}>
              <h1>Education</h1>
              <h2>Currently Student</h2>
              <h2 onClick={() => window.open('https://www.pxl.be/')} onMouseOver={() => changeColor("#38A3A5")} onMouseOut={() => changeColor("#f0ffff")} style={{color: `${background}` ,cursor:'pointer'}}><span style={{
              color: 'rgb(34, 87, 122)'
            }}>@</span> PXL <span style={{fontSize:'17px'}}>(click me)</span> </h2>
              <h3>Graduaat Programmeren</h3>
            </div>
          </div>
          <div className='crntJob'>
            <div style={{
          padding: '10px'
        }}>
              <h1>Job</h1>
              <h2>Currently Working</h2>
              <h2><span style={{
              color: 'rgb(34, 87, 122)'
            }}>@</span> Albert Heijn Maasmechelen</h2>
              <h3>Magazijnier</h3>
            </div>
          </div>
        </div>
        <div className="scroll-line" style={{width:`${Math.round((offsetY/100)*3.355705)}%`}}></div>
        {/* scrollline.style.width = percentScrolled + '%' */}
        <div className="scrollMe" style={{opacity:`${10/offsetY}`}} >
            <h2>Scroll me</h2>
            <MdKeyboardArrowDown style={{color:'rgb(87, 204, 153)', fontSize:'40'}}/>
        </div>
      </div>;
}

export default Welcom
  