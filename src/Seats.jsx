import PropTypes from 'prop-types';

const Seats = ({ seatSelect, select}) => {
    return (
        <div className="flex gap-14">
            <div className="flex flex-col gap-4">
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">A</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">B</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">C</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">D</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">E</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">F</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">G</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">H</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">I</p>
                <p className="w-16 py-2 px-10 rounded-lg font-medium text-gray-500">J</p>
            </div>

            <div className="flex flex-col gap-4">
            <button onClick={() => seatSelect('A1')} className={`${select.includes('A1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>A1</button>
            <button onClick={() => seatSelect('B1')} className={`${select.includes('B1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>B1</button>
            <button onClick={() => seatSelect('C1')} className={`${select.includes('C1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>C1</button>
            <button onClick={() => seatSelect('D1')} className={`${select.includes('D1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>D1</button>
            <button onClick={() => seatSelect('E1')} className={`${select.includes('E1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>E1</button>
            <button onClick={() => seatSelect('F1')} className={`${select.includes('F1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>F1</button>
            <button onClick={() => seatSelect('G1')} className={`${select.includes('G1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>G1</button>
            <button onClick={() => seatSelect('H1')} className={`${select.includes('H1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>H1</button>
            <button onClick={() => seatSelect('I1')} className={`${select.includes('I1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>I1</button>
            <button onClick={() => seatSelect('J1')} className={`${select.includes('J1') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>J1</button>
            </div>

            <div className="flex flex-col gap-4">
            <button onClick={() => seatSelect('A2')} className={`${select.includes('A2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>A2</button>
            <button onClick={() => seatSelect('B2')} className={`${select.includes('B2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>B2</button>
            <button onClick={() => seatSelect('C2')} className={`${select.includes('C2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>C2</button>
            <button onClick={() => seatSelect('D2')} className={`${select.includes('D2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>D2</button>
            <button onClick={() => seatSelect('E2')} className={`${select.includes('E2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>E2</button>
            <button onClick={() => seatSelect('F2')} className={`${select.includes('F2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>F2</button>
            <button onClick={() => seatSelect('G2')} className={`${select.includes('G2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>G2</button>
            <button onClick={() => seatSelect('H2')} className={`${select.includes('H2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>H2</button>
            <button onClick={() => seatSelect('I2')} className={`${select.includes('I2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>I2</button>
            <button onClick={() => seatSelect('J2')} className={`${select.includes('J2') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>J2</button>
            </div>

            <div className="flex flex-col gap-4">
            <button onClick={() => seatSelect('A3')} className={`${select.includes('A3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>A3</button>
            <button onClick={() => seatSelect('B3')} className={`${select.includes('B3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>B3</button>
            <button onClick={() => seatSelect('C3')} className={`${select.includes('C3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>C3</button>
            <button onClick={() => seatSelect('D3')} className={`${select.includes('D3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>D3</button>
            <button onClick={() => seatSelect('E3')} className={`${select.includes('E3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>E3</button>
            <button onClick={() => seatSelect('F3')} className={`${select.includes('F3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>F3</button>
            <button onClick={() => seatSelect('G3')} className={`${select.includes('G3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>G3</button>
            <button onClick={() => seatSelect('H3')} className={`${select.includes('H3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>H3</button>
            <button onClick={() => seatSelect('I3')} className={`${select.includes('I3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>I3</button>
            <button onClick={() => seatSelect('J3')} className={`${select.includes('J3') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>J3</button>
            </div>

            <div className="flex flex-col gap-4">
            <button onClick={() => seatSelect('A4')} className={`${select.includes('A4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>A4</button>
            <button onClick={() => seatSelect('B4')} className={`${select.includes('B4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>B4</button>
            <button onClick={() => seatSelect('C4')} className={`${select.includes('C4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>C4</button>
            <button onClick={() => seatSelect('D4')} className={`${select.includes('D4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>D4</button>
            <button onClick={() => seatSelect('E4')} className={`${select.includes('E4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>E4</button>
            <button onClick={() => seatSelect('F4')} className={`${select.includes('F4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>F4</button>
            <button onClick={() => seatSelect('G4')} className={`${select.includes('G4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>G4</button>
            <button onClick={() => seatSelect('H4')} className={`${select.includes('H4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>H4</button>
            <button onClick={() => seatSelect('I4')} className={`${select.includes('I4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>I4</button>
            <button onClick={() => seatSelect('J4')} className={`${select.includes('J4') ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center w-16 py-2 px-10 rounded-lg font-medium text-gray-500`}>J4</button>
            </div>

        </div>
    );
};


Seats.propTypes = {
    seatSelect: PropTypes.func.isRequired, 
    select: PropTypes.array.isRequired


  };

export default Seats;
