import React, { useState } from 'react';
const Rating = () => {
  const [selectedRating, setSelectedRating] = useState('0');
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };
  return (
    <div className="mb-4">
      <label className="block mb-2">Rating</label>
      <div className="flex flex-col space-y-2">
        {['5', '4', '3', '2', '1'].map((rating) => (
          <label key={rating} className="inline-flex items-center">
            <input
              type="checkbox"
              value={rating}
              checked={selectedRating === rating}
              onChange={handleRatingChange}
              className="form-radio h-4 w-4 text-green-600"
            />
            <span className="ml-2">
            <span className="text-[#FFA500] text-[24px]">
            {'★'.repeat(Math.round(rating))}
          </span>
          <span className="text-gray-400 text-[24px]">
            {'★'.repeat(5 - Math.round(rating))}
          </span>
              {rating === '0' ? 'NULL' : `${rating} Star${rating > 1 ? 's' : ''} & Up`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
export default Rating;