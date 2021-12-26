import Popup from './components/Popup';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App" style={{zIndex: "0"}}>
      <Button style={{margin: "20px"}} variant='success' onClick={togglePopup}>Add to card</Button>
      {isOpen && <Popup handleClose={togglePopup}/>}
    </div>
  );
}

export default App;
