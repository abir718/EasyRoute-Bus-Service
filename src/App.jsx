import { useState } from 'react'
import './App.css'
import Header from './Header'
import Offer from './Offer'
import Ticket from './Ticket'
import Seats from './Seats'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form'
import Others from './Others'
import SelectSeat from './SelectSeat'


function App() {
  let [select , setSelect] = useState([])

  let seatSelect = (seatNum) =>{
 if (select.length < 4) {
  if (!select.includes(seatNum)) {
    let totalSeat = [...select , seatNum]
    setSelect(totalSeat)
    toast.success(`Seat ${seatNum} selected!`);
    
  } else {
    toast.error(`Seat already selected!`)
  }
   
 } else {
   toast.error(`Max number of seat added!`);
 }
  };

  let seatDeselect = (seatNum) => {
    let updatedSeats = select.filter(seat => seat !== seatNum);
    setSelect(updatedSeats);
    toast.info(`Seat ${seatNum} deselected.`);
  };



  return (
    <>
      <Header></Header>
      <Offer></Offer>


      <section  className="border-2 border-green-500 bg-gray-100 ">
      <Ticket></Ticket>
      <div className='flex items-center mx-auto justify-center'>
      <div className='bg-white flex gap-12 p-10 rounded-lg'>
        <div>
        <SelectSeat></SelectSeat>     
        <Seats seatSelect={seatSelect} select={select}></Seats>
        </div> 

      <div>
      <Others seatDeselect={seatDeselect} select={select}></Others>
      <Form></Form>
      </div>
      </div>
      </div>

      </section>
      
      <ToastContainer autoClose={2500} />
      
    </>
  )
}

export default App
