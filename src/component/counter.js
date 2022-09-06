import {React, useState} from "react"

function Counter() {
    // react ile jquery arasındaki aynı örnegin re-render farkını gördük.
    // react ta sayacı 1 yapıldıktan sonra tekrar btn tıklandıgında 1 yapmaya çalımıyor, jqueryde tekrar tekrar yapıyor
    const  [count, setCount] = useState(0);

    function increase()  {
        setCount(1);
    }
    const decrease = () => {
        setCount(count-1);
    }
   return (
       <div>
           <h1>SAYAÇ</h1>
           <hr/>
           <h1>{count}</h1>
           <button onClick={increase}>+</button>
           <button onClick={decrease}>-</button>
       </div>
   )
}

export default Counter;