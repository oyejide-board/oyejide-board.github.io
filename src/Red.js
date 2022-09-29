{/*import { useReducer } from "react";
const Incr = "INCREMENT";
const Decr = "DECREMENR";


const reducer = (state, action) => {
    switch(action.type){
        case Incr : 
        return {
            count: state.count + 1,
    
            }

    case Decr :
        return {
            count : state.count - 1,
        
        }
    }
}

export default function Red () {

    const [state,dispatch] = useReducer(reducer,{
        count : 0
    })
    const incr = () => {
        return dispatch({type : Incr})
    }
    const decr = () => {
        return dispatch({type : Decr})
    }
    
    return (
        <div> 
            <h1>Getting hooked on React Hooks</h1>
            <h2>{state.count}</h2>
            {state.text ? <p>or Even</p> :<p>Odd Appearance lol</p> }
            <button onClick={incr}>Inc</button>
            <button onClick={decr}>Decr</button>
        </div>
    )
    }

*/}