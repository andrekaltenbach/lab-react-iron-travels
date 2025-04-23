import travelPlansData from '../assets/travel-plans.json';

function TravelList() {
  const displayLabel = (cost) => {
    if (cost <= 350) {
      return <div className="great-deal">Great Deal</div>;
    } else if (cost >= 1500) {
      return <div className="premium">Premium</div>;
    }
  };

  return travelPlansData.map((elementObj) => {
    return (
      <div className="TravelList" key={elementObj.id}>
        <div className="img-container">
          <img src={elementObj.image} alt="destination image" />
        </div>
        <div className="text-container">
          <h2>
            {elementObj.destination} ({elementObj.days} Days)
          </h2>
          <p>{elementObj.description}</p>
          <p>
            <b>Price:</b> {elementObj.totalCost}
          </p>
          <div className="label-container">
            {displayLabel(elementObj.totalCost)}
            {elementObj.allInclusive && <div className="all-inclusive">All-Inclusive</div>}
          </div>
        </div>
      </div>
    );
  });
}

export default TravelList;
