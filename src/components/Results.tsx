type ResultsProps = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = ({ results }: ResultsProps) => {
  const { country, cityName, temperature, icon, conditionText } = results;
  return (
    <>
      {country && (
        <>
          <div className="results-country">{country}</div>
          <div className="results-city">{cityName}</div>
          <div className="results-temp">
            {temperature}
            <span>℃</span>
          </div>
          <div className="results-condition">
            <img src={icon} alt="icon" />
            <span>{conditionText}</span>
          </div>
        </>
      )}
    </>
  );
};

export default Results;
