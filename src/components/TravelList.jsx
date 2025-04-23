import travelPlansData from '../assets/travel-plans.json';

function TravelList() {
  return travelPlansData.map((elementObj) => {
    return (
      <div className="TravelList">
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
        </div>
      </div>
    );
  });
}

export default TravelList;
