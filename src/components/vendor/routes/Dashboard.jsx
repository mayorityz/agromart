import React from "react";

const Dashboard = () => {
  return (
    <>
      <div class="ps-block--vendor-dashboard">
        <div class="ps-block__header">
          <h3>Sale Report</h3>
        </div>
        <div class="ps-block__content">
          <form class="ps-form--vendor-datetimepicker" action="#" method="get">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="time-from">
                      From
                    </span>
                  </div>
                  <input
                    class="form-control ps-datepicker"
                    aria-label="Username"
                    aria-describedby="time-from"
                  />
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="time-form">
                      To
                    </span>
                  </div>
                  <input
                    class="form-control ps-datepicker"
                    aria-label="Username"
                    aria-describedby="time-to"
                  />
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                <button class="ps-btn">
                  <i class="icon-sync2"></i> Update
                </button>
              </div>
            </div>
          </form>
          <div class="table-responsive">
            <table class="table ps-table ps-table--vendor">
              <thead>
                <tr>
                  <th>date</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sold</th>
                  <th>Commission</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nov 4, 2019</td>
                  <td>
                    <a href="#0">
                      Marshall Kilburn Portable Wireless Bluetooth Spe...
                    </a>
                  </td>
                  <td>$235.35</td>
                  <td>25</td>
                  <td>$2940.00</td>
                  <td>24.5%</td>
                </tr>
                <tr>
                  <td>Nov 4, 2019</td>
                  <td>
                    <a href="#0">Unero Military Classical Backpack</a>
                  </td>
                  <td>$42.35</td>
                  <td>10</td>
                  <td>$211.00</td>
                  <td>17.5%</td>
                </tr>
                <tr>
                  <td>Nov 4, 2019</td>
                  <td>
                    <a href="#0">Sleeve Linen Blend Caro Pana T-Shirt</a>
                  </td>
                  <td>$23.35</td>
                  <td>80</td>
                  <td>$935.00</td>
                  <td>62.5%</td>
                </tr>
                <tr>
                  <td>Nov 30, 2019</td>
                  <td>
                    <a href="#0">Harman Kardon Onyx Studio 2.0</a>
                  </td>
                  <td>$299.35</td>
                  <td>14</td>
                  <td>$2095.00</td>
                  <td>62.5%</td>
                </tr>
                <tr>
                  <td>Nov 30, 2019</td>
                  <td>
                    <a href="#0">Korea Long Sofa Fabric In Blu Navy Color</a>
                  </td>
                  <td>$299.35</td>
                  <td>5</td>
                  <td>$6095.00</td>
                  <td>62.5%</td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>124 Sale</strong>
                  </td>
                  <td colspan="2">
                    <strong>$12.104.725</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ps-block--vendor-dashboard">
        <div class="ps-block__header">
          <h3>Recent Orders</h3>
        </div>
        <div class="ps-block__content">
          <div class="table-responsive">
            <table class="table ps-table ps-table--vendor">
              <thead>
                <tr>
                  <th>date</th>
                  <th>Order ID</th>
                  <th>Shipping</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nov 4, 2019</td>
                  <td>
                    <a href="#0">MS46891357</a>
                  </td>
                  <td>$00.00</td>
                  <td>$295.47</td>
                  <td>
                    <a href="#0">Open</a>
                  </td>
                  <td>
                    <a href="#0">View Detail</a>
                  </td>
                </tr>
                <tr>
                  <td>Nov 2, 2017</td>
                  <td>
                    <a href="#0">AP47305441</a>
                  </td>
                  <td>$00.00</td>
                  <td>$25.47</td>
                  <td>Close</td>
                  <td>
                    <a href="#0">View Detail</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
