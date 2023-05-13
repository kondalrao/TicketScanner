import {Input} from "@chakra-ui/react";
import { useRef, useEffect } from 'react';


export default function Barcode() {
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log("Keypress Event: ", event.target.value)
      if(event.target.value === "") return;

      event.target.select()
      // event.target.value = ""

      let value = localStorage.getItem(JSON.stringify(event.target.value)) || undefined;
      console.log("Value: ", value)
      if(value === undefined) {
        console.log("Adding the value: ", event.target.value)
        localStorage.setItem(JSON.stringify(event.target.value), Date().toLocaleString());
      } else {
        console.log("Duplicate!!!")
        alert("Duplicate Ticket { " + event.target.value + " }!!")
      }
    }
  }

  const handleBlur = event => {
    event.target.focus()
  };

  return (
      <Input w="300px" placeholder='Scan Ticket...' ref={inputRef} type="text" onKeyPress={handleKeyPress} onBlur={handleBlur}/>
  )
}
