import { useCallback, useEffect, useLayoutEffect } from "react"
import styles from '../styles/Main.module.css'

export default function Main(){
    const Knowledges = [{
        name: "HTML5",
        level: "Advanced"
      },
      {
        name: "CSS",
        level: "Advanced"
      },
      {
        name: "JAVASCRIPT",
        level: "Advanced"
      },
      {
        name: "NEXT.JS",
        level: "Intermediate"
      },
      {
        name: "SOLIDITY",
        level: "Intermediate"
      },
      {
        name: "TYPESCRIPT",
        level: "Beginner"
      },
      {
        name: "C#",
        level: "Intermediate"
      },
      {
        name: "REACT",
        level: "Intermediate"
      },
      {
        name: "BOOTSTRAP",
        level: "Beginner"
      }
    ]
    
      const DataDiccionary:any = {
        "Advanced": 100,
        "Intermediate": 50,
        "Beginner": 15
      }
    
      useEffect(()=> {
        const Divs = document.querySelectorAll(`.${styles.blurHover}`)
        Divs.forEach((div:any) => {
          div.addEventListener('mousemove', (event:any) => { 
            const {x, y} = div.getBoundingClientRect();
            div.style.setProperty('--x-axis', event.clientX - x);
            div.style.setProperty('--y-axis', event.clientY - y);
          })
        })
        Divs.forEach((div:any) => {
          div.addEventListener('mouseleave', () => {
            div.style.removeProperty('--x-axis');
            div.style.removeProperty('--y-axis');
          })
        })
      })
    
      const Methods = [
        [...'Grow'],
        [...'Build'],
        [...'Develop']
      ]

      const titleFunc = useCallback(()=>{
        const titles = document.querySelector(`#${styles.intrinsecTitle}`);
        const counters = { counter1: 0, counter2: 0 }
        var intervalBool = {
          x : false,
          y: false
        };
        if(intervalBool.x !== true){
          const x = setInterval(()=>{
            intervalBool.x = true
            if(intervalBool.y !== true){
              const y = setInterval(()=>{
                intervalBool.y = true
                const yy = setTimeout(()=>{
                  if(Methods[(counters.counter1 + 0) % 3][counters.counter2 + 1] !== undefined){
                  titles!.textContent += Methods[(counters.counter1 + 0) % 3][counters.counter2+1]
                  }else{
                    null
                  }
                  counters.counter2++
                  clearTimeout(yy)
                  }, 100)
                }, 300);
            }else{
              null
            }
            titles!.textContent = ''
            titles!.textContent = Methods[(counters.counter1 + 1) % 3][0]
            counters.counter2 = 0
            counters.counter1++
          }, 5000)
        }
      }, []);

      useEffect(()=>{
        titleFunc()
      }, [titleFunc]);

    return(
        <main>

        <p id={styles.myname}>Benjamin Martin</p>

        <p id={styles.title}><span id={styles.intrinsecTitle}>Grow</span> With Me</p>

        <div id={styles.skillsContainer}>
          {
            Knowledges.map(element => <div className={styles.blurHover} key={element.name}>
              <p>{element.name}</p>
              <progress max={100} value={DataDiccionary[element.level]}></progress>
            </div>)
          }
        </div>
      </main>
    )
}

function uselayoutEffect(arg0: () => void) {
    throw new Error("Function not implemented.")
}
