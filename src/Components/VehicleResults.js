import React from "react";
import Vehicle from "./Vehicle";
import Header from "./Header";

const vehicleJSON2 = require("../../data/vehicle-data2.json");
const allVehicles = vehicleJSON2.searchResult.vehicles;

class VehicleResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      showSaved: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  shapeRawData(ar) {
    function getCondition(pre, cert) {
      if (!pre || !cert) {
        return "New";
      } else {
        return pre ? "Pre-Owned" : "Certified";
      }
    }
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const data = [];
    ar.forEach(v => {
      data.push({
        year: v.year,
        make: v.make.label,
        model: v.model.label,
        condition: getCondition(v.preOwned, v.certified),
        style: v.style.label,
        bodyType: v.bodyType,
        vin: v.vin,
        price: numberWithCommas(v.prices[3].price.amount),
        msrp: numberWithCommas(v.prices[1].price.amount)
      });
    });
    // console.log("shaped data: ", data);
    return data;
  }

  handleSearch(val) {
    //all vehicles
    const defaultData = this.shapeRawData(allVehicles);

    if (val === "") {
      console.log("empty");
      this.setState({ vehicles: defaultData });
    } else {
      console.log(val);

      const filtered = defaultData.filter(vehicle => {
        return (
          Object.values(vehicle)
            //convert all to strings
            .map(String)
            //see if any values conatain teh search val
            .some(x => x.toLowerCase().indexOf(val.toLowerCase()) > -1)
        );
      });

      console.log("filtered: ", filtered);
      this.setState({ vehicles: filtered });
    }
  }

  render() {
    // this.shapeRawData(allVehicles);
    // console.log("new data");
    return (
      <div className="results-page">
        <Header handleSearch={this.handleSearch} />
        {this.state.vehicles.map(veh => (
          <Vehicle key={veh.vin} {...veh} />
        ))}

        {this.state.vehicles.length === 0 && (
          <p id="no-results">No results found</p>
        )}

        {/* <Form handleSearch={this.handleSearch} /> */}
      </div>
    );
  }

  componentDidMount() {
    this.setState({ vehicles: this.shapeRawData(allVehicles) });
  }
}

export default VehicleResults;
