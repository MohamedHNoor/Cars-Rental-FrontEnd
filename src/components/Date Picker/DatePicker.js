import React, { useRef, useState } from 'react';

const DatePicker = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <input className='mb-4 add-input'
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />

    </div>
  );
};

export default DatePicker;