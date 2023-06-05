import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
    setCurrentDay(date.toLocaleDateString(undefined, { weekday: 'long' }));
    setCurrentTime(date.toLocaleTimeString());
  }, []);

  const deleteToDo =(id)=>{
    console.log(id);
    const newToDo = toDos.filter(todo => todo.id!==id)
      setToDos (newToDo)
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>
           It's {currentDay} 🌝 ☕ on {currentDate}
        </h2>
        <p className="currentTime">time: {currentTime}</p>
      </div>
      <div className="input">
        <input vlaue = {toDo} onChange={(event)=>setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          if(toDo!==''){
            setToDos([...toDos ,{id : Date.now() , text :toDo , status : false }])
            setToDo('')
          
        }}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
         return (<div className="todo">
          <div className="left">
            <input onChange={(event)=>{
              console.log(event.target.checked);
              console.log(obj);
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status = event.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>deleteToDo(obj.id)} className="fas fa-times"></i>
          </div>
        </div> )   
      })}
      
      </div>
      <div className="list">
       <h2 >Task Which You Done</h2>
       </div>
      <div className="status">
       
      {toDos.map((obj)=>{
        if(obj.status){
          return (<h1 className='list' >{obj.text}</h1>)
        }
        return null
      })}
      </div>
    </div>
  );
}

export default App;
