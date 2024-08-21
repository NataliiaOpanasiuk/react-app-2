import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input type="text" class="form-control" placeholder="Enter city" />
          </div>

          <div className="col-2">
            <input type="submit" class="btn btn-primary" value="Search" />
          </div>
          <div className="col-2">
            <button type="submit" class="btn btn-primary">
              Current
            </button>
          </div>
        </div>
      </form>
      <ul>
        <li> Here will be a City: Wexford</li>
        <li> Here will be a temperature: 18°</li>
        <li> Here will be a humidity: 25%</li>
        <li> Here will be a wind: 2 m/s</li>
        <li> Here will be a icon: sun</li>
        <li> Here will be a description: sunny</li>
      </ul>
    </div>
  );
}
