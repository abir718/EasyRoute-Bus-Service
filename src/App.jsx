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
import Footer from './Footer'

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

let [emailInput, setemailInput] = useState('');
let [nameInput, setnameInput] = useState('');
let [numberInput, setnumberInput] = useState('');
let [modal , showModal] = useState(false)

  let buttonInput = () => {
    let name = nameInput.split('')
    let number = parseInt(numberInput)
    let email = emailInput.trim()
    if (select.length === 0) {
      toast.error('No seat selected!')
    } 
    else if (name.length === 0) {
      toast.error('Provide a valid name!')
    }
    else if (!number) {
      toast.error(`Invalid Number!`)    
    }
    else if (email === '') {
      toast.error('Provide an Email Address!')
    }

    
    else {
      showModal(true)
    }


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
      <Form nameInput={nameInput} setnameInput={setnameInput} numberInput={numberInput} setnumberInput={setnumberInput} emailInput={emailInput} setemailInput={setemailInput} buttonInput={buttonInput}></Form>
      </div>
      </div>
      </div>
      </section>

      <Footer></Footer>
    
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box bg-white p-6 rounded-lg text-center">
            <h3 className="font-bold text-3xl">Successful!</h3>
            <p className="py-2 mt-2 text-lg">Congrats! {nameInput} you have successfully purchased {select[0]}  {select[1]}  {select[2]}  {select[3]} </p>
            <p className="py-2 text-lg">An Email has been sent to {emailInput} with the ticket transcript.</p>
            <div className="modal-action mt-4">
              <button onClick={() => showModal(false)} className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 text-black text-xl  rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

                                                      
                            

      <ToastContainer autoClose={2500} />
      
    </>
  )
}


export default App
