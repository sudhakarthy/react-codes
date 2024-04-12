import React from "react";
import { Hello } from './Hello';
import {fireEvent, render, screen,cleanup} from '@testing-library/react'



afterEach(cleanup);
it('Testing OnClick definition from outside component', ()=>{
   const handleClick = jest.fn();
   render(<Hello onLinkClick={handleClick}/>);
   fireEvent.click(screen.getByText(/click from outside/i));
   console.log(handleClick);
   expect(handleClick).toHaveBeenCalledTimes(1);
});

it('Testing Onclick defined inside component', ()=>{
   const handleClick = jest.fn();
   const myspy = jest.spyOn(console, 'log');
   render(<Hello onLinkClick={handleClick}/>);
   fireEvent.click(screen.getByText(/click from inside/i));
   fireEvent.click(screen.getByRole('button', {name: 'click from inside'}));
   console.log("Hello")
   expect(myspy).toHaveBeenCalledTimes(3);
})

it('Testing Counter', ()=>{
   const handleClick = jest.fn();
   render(<Hello onLinkClick={handleClick}/>);  
   const incrementLabel = screen.getByTestId('incrementLabel');
   expect(incrementLabel).toHaveTextContent(/The counter value is 10/i);
   fireEvent.click(screen.getByText(/Incrementer/i));
   expect(incrementLabel).toHaveTextContent(/The counter value is 20/i);
})
