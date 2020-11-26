import React from "react";
import BarCard from "./BarCard";
import DonutCard from "./DonutCard";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import BarCharts from "./BarCharts";
function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-0 col-md-0 col-sm-0 ">
          <Sidebar />
        </div>
        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 rightpart">
          <div class="row">
            <div class="col-md-12">
              <Navbar />
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <Navbar />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-5 col">
              <BarCard />
            </div>
            <div class="col-lg-4 col-md-6 col">
              <DonutCard />
            </div>
            <div class="col-lg-3 col-md-12 col">
              <BarCard />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col">
              <DonutCard />
            </div>
            <div class="col-md-4 col">
              <BarCard />
            </div>
            <div class="col-md-3 col">
              <BarCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
