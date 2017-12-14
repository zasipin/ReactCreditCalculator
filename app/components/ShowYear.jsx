import React from 'react';

		var renderYear = (year) => {
			year = year > 0 ? year : 0;
			if(year == 1)
				return 'год';
			if(year > 1 && year < 5)
				return 'года';
			return 'лет';
		}

		const renderYearNumber = (months) => {
			if(months % 12 == 0)
				return months / 12;
			return parseFloat(months / 12).toFixed(2);			
    }
    
const ShowYear = ({months}) => {
  return ( 
    <span>
      {renderYearNumber(months)} {renderYear(months/12)}
    </span>
  );
};

export default ShowYear;