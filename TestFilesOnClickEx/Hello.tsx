import React from 'react';
import { useState } from 'react';


interface TestProp {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onLinkClick: () => void;
  }

export function Hello(props: TestProp)
{
    const [counter , setCounter] = useState(10);

    const { onLinkClick } = props;
    const myadditionFunction = () => {
              console.log("Jadfa");
    }
    const mylogicFunc = () => {
        const a = 4;
        return a;
    }
    const onInsideClick = () =>{
        myadditionFunction();
        const b = mylogicFunc();
        console.log('Hello' + b);
    }

    const onIncrement = () => {
            setCounter( counter + 10 );
    }
    return(
   <>
      <div>Hello World</div>
      {/* These two buttons for click validation when received from parent or defined within the component.  */}
      <button type="button" onClick={onInsideClick}>
        Click From Inside
      </button>
      <button type="button" onClick={onLinkClick}>
        Click From Outside
      </button>
      <button type="button" onClick={onIncrement}>
        Incrementer
      </button>
      <div data-testid="incrementLabel">{`The counter value is ${counter}`}</div>
    </>)
};
