import { useState } from "react"

function App() {
  const [color,setColor] = useState("lightblue")

  return (
    <div className="w-full h-screen duration-500" 
    style={{backgroundColor : color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-2xl px-10 py-5 rounded-2xl text-black text-xl
         hover:cursor-pointer">
          <button
          onClick={() => setColor("violet")}
          className="py-4 px-10 rounded-full outline outline-slate-950 "
          style={{backgroundColor:"violet"}}
          >VIOLET
          </button>
          <button
           onClick={() => setColor("indigo")}
          className="py-4 px-10 rounded-full outline outline-slate-950 "
          style={{backgroundColor:"indigo"}}
          >INDIGO
          </button>
          <button
           onClick={() => setColor("blue")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"blue"}}
          >BLUE
          </button>
          <button
           onClick={() => setColor("green")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"green"}}
          >GREEN
          </button>
          <button
           onClick={() => setColor("yellow")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"yellow"}}
          >YELLOW
          </button>
          <button
           onClick={() => setColor("orange")}
          className="py-4 px-10 rounded-full outline outline-slate-950 outline outline-slate-950"
          style={{backgroundColor:"orange"}}
          >ORANGE
          </button>
          <button
           onClick={() => setColor("red")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"red"}}
          >RED
          </button>
          <button
           onClick={() => setColor("pink")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"pink"}}
          >PINK
          </button>
          <button
           onClick={() => setColor("#000")}
          className="py-4 px-10 rounded-full outline outline-slate-50 text-white"
          style={{backgroundColor:"black"}}
          >BLACK
          </button>
          <button
           onClick={() => setColor("white")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"white"}}
          >WHITE
          </button>
          <button
           onClick={() => setColor("gray")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"gray"}}
          >GRAY
          </button>
          <button
           onClick={() => setColor("purple")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"purple"}}
          >PURPLE
          </button>
          <button
           onClick={() => setColor("Lavender")}
          className="py-4 px-10 rounded-full outline outline-slate-950"
          style={{backgroundColor:"Lavender"}}
          >LAVENDER
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
