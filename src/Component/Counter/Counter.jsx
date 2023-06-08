import React, {useState} from 'react'

function Counter() {
    const [ count, setCount] = useState(1)

    const inc = () =>{
        setCount(count +1);
    }

    const dec = () =>{
        if(count > 1){
            setCount(count-1);
        }
    }
    
  return (
    <div>
      <button onClick={inc}>+</button>
      <p>
        {
            count
        }
      </p>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Counter;
