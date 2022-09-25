import {useState} from 'react';

export default function Nav () {
    
const [data,setData] = useState(null)

    const Api = () => {
  fetch(`https://api.github.com/users`)
   .then(res => res.json())
   .then(data => {
    console.log(data)
    setData(JSON.stringify(data))})
 
    }
    
return (
  <div>
    <h1 className=''>{data}</h1>
    <button onClick={Api}>Click</button>
  </div>
)
}