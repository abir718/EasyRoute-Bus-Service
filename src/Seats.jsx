import PropTypes from 'prop-types';

const Seats = ({ seatSelect, select }) => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const cols = [1, 2, 3, 4];

    return (
        <div className="flex gap-3 lg:gap-10">
            <div className="lg:flex hidden lg:flex-col lg:gap-3">
                {rows.map(row => (
                    <p key={row} className="flex py-2 px-8 rounded-lg font-medium text-gray-500">{row}</p>                  
                ))}
            </div>

            {cols.map(col => (
                <div key={col} className="flex flex-col gap-3">
                    {rows.map(row => {
                        const seatId = `${row}${col}`;
                        return (
                            <button
                                key={seatId}
                                onClick={() => seatSelect(seatId)}
                                className={`flex items-center justify-center lg:py-2 lg:px-8 py-2 px-6 rounded-lg font-medium text-gray-500 
                                    ${select.includes(seatId) ? 'bg-[rgb(29,209,0)]' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                {seatId}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

Seats.propTypes = {
    seatSelect: PropTypes.func.isRequired,
    select: PropTypes.array.isRequired
};

export default Seats;
