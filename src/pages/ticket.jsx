import { useRef, useEffect, useState } from 'react';

export default function Ticket() {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [lbl, setLbl] = useState("")

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  useEffect(() => {
    if(name === "") return;

    value = localStorage.getItem(JSON.stringify(name)) || undefined;
    if(value === undefined) {
      localStorage.setItem(JSON.stringify(name), Date().toLocaleString());
      setLbl("Good!")
    } else {
      setLbl("Duplicate!!")
    }
  }, [name]);

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log("Keypress Event: ", event.target.value)
      setName(event.target.value)
      event.target.select()
      // event.target.value = ""
    }
  }

  const handleBlur = event => {
    event.target.focus()
  };

  return (
    <>
      <div><label>This ticket is: {lbl}</label></div>
      <input autoFocus ref={inputRef} type="text" onKeyPress={this.handleKeyPress} onBlur={ handleBlur }/>
      <button onClick={() => {console.log("Button Clicked!!")}}> Button </button>
    </>
  )
}
