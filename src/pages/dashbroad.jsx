import React from "react";
import ApexChart from "../components/apexChart/apexChart";
import dashboardIcon1 from "../assets/dashboardIcon1.png";
import dashboardIcon2 from "../assets/dashboardIcon2.png";
import dashboardIcon3 from "../assets/dashboardIcon3.png";
import butilka from "../assets/butilka.png";
const Dashboard = () => {
  return (
    <div className="p-[20px]">
      <h1 className=" text-[32px] font-semibold">Dashboard</h1>
      <div className="flex justify-between">
        <div className="w-[68%]">
          <div className="flex py-[20px]  justify-between">
            <div className="flex gap-[20px] items-center p-[20px_60px] bg-[#FEF3F2]">
              <div className="">
                <div>
                  <img src={dashboardIcon1} alt="" />
                </div>
              </div>
              <div>
                <p className="text-[18px]">Cost</p>
                <p className="font-bold text-[24px]">$99.7k</p>
              </div>
            </div>
            <div className="flex gap-[20px] items-center p-[20px_60px] bg-[#FFFAEB]">
              <div className="">
                <div>
                  <img src={dashboardIcon2} alt="" />
                </div>
              </div>
              <div>
                <p className="text-[18px]">sales</p>
                <p className="font-bold text-[24px]">$152k</p>
              </div>
            </div>
            <div className="flex gap-[20px] items-center p-[20px_60px] bg-[#F0FDF9]">
              <div className="">
                <div>
                  <img src={dashboardIcon3} alt="" />
                </div>
              </div>
              <div>
                <p className="text-[18px]">Profit</p>
                <p className="font-bold text-[24px]">$32.1k</p>
              </div>
            </div>
          </div>
          <div>
            <ApexChart />
          </div>
        </div>
        <div className="p-[20px] border-[2px] w-[30%]">
          <h1 className="flex justify-between font-bold">
            Top selling products <span>See All</span>
          </h1>
          <div className="p-[10px] flex flex-col gap-[10px]  h-full">
            <div className="flex items-center gap-[20px] ">
              <div>
                <img src={butilka} alt="" />
              </div>
              <div className="w-[90%]">
                <h1 className="flex justify-between   ">
                  Healthcare Erbology{" "}
                  <span className="text-[#10B981]">13,153</span>
                </h1>
                <p className="flex justify-between text-[#6C737F]">
                  in Accessories <span>in sales</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] ">
              <div>
                <img src={butilka} alt="" />
              </div>
              <div className="w-[90%]">
                <h1 className="flex justify-between">
                  Healthcare Erbology{" "}
                  <span className="text-[#10B981]">13,153</span>
                </h1>
                <p className="flex justify-between text-[#6C737F]">
                  in Accessories <span>in sales</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] ">
              <div>
                <img src={butilka} alt="" />
              </div>
              <div className="w-[90%]">
                <h1 className="flex justify-between   ">
                  Healthcare Erbology{" "}
                  <span className="text-[#10B981]">13,153</span>
                </h1>
                <p className="flex justify-between text-[#6C737F]">
                  in Accessories <span>in sales</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] ">
              <div>
                <img src={butilka} alt="" />
              </div>
              <div className="w-[90%]">
                <h1 className="flex justify-between   ">
                  Healthcare Erbology{" "}
                  <span className="text-[#10B981]">13,153</span>
                </h1>
                <p className="flex justify-between text-[#6C737F]">
                  in Accessories <span>in sales</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] ">
              <div>
                <img src={butilka} alt="" />
              </div>
              <div className="w-[90%]">
                <h1 className="flex justify-between   ">
                  Healthcare Erbology{" "}
                  <span className="text-[#10B981]">13,153</span>
                </h1>
                <p className="flex justify-between text-[#6C737F]">
                  in Accessories <span>in sales</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-[50px]">
        <div className="p-[10px] border w-[49%]">
          <h1 className="font-bold text-[32px]">Recent Transactions</h1>
          <table className="w-[100%]">
            <thead className="text-left">
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jagarnath S.</td>
                <td>24.05.2023</td>
                <td>$124.97</td>
                <td>
                  <div className="bg-[#C4F8E2] text-[#06A561] p-[5px] text-center">
                    Paid
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagarnath S.</td>
                <td>24.05.2023</td>
                <td>$124.97</td>
                <td>
                  <div className="bg-[#C4F8E2] text-[#06A561] p-[5px] text-center">
                    Paid
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>30.06.2023</td>
                <td>$89.50</td>
                <td>
                  <div className="bg-[#F0F0F0] text-[#A0A0A0] p-[5px] text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>01.07.2023</td>
                <td>$200.75</td>
                <td>
                  <div className="bg-[#F0F0F0] text-[#A0A0A0] p-[5px] text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagarnath S.</td>
                <td>24.05.2023</td>
                <td>$124.97</td>
                <td>
                  <div className="bg-[#C4F8E2] text-[#06A561] p-[5px] text-center">
                    Paid
                  </div>
                </td>
              </tr>
              <tr>
                <td>Michael Clark</td>
                <td>02.07.2023</td>
                <td>$50.00</td>
                <td>
                  <div className="bg-[#F0F0F0] text-[#A0A0A0] p-[5px] text-center">
                    Pending
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-[10px] border w-[49%]">
          <h1 className="font-bold text-[32px]">Recent Transactions</h1>
          <table className="w-[100%]">
            <thead className="text-left">
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jagarnath S.</td>
                <td>24.05.2023</td>
                <td>$124.97</td>
                <td>
                  <div className="bg-[#C4F8E2] text-[#06A561] p-[5px] text-center">
                    Paid
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagarnath S.</td>
                <td>24.05.2023</td>
                <td>$124.97</td>
                <td>
                  <div className="bg-[#C4F8E2] text-[#06A561] p-[5px] text-center">
                    Paid
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>30.06.2023</td>
                <td>$89.50</td>
                <td>
                  <div className="bg-[#F0F0F0] text-[#A0A0A0] p-[5px] text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>01.07.2023</td>
                <td>$200.75</td>
                <td>
                  <div className="bg-[#F0F0F0] text-[#A0A0A0] p-[5px] text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagarnath S.</td>
                <td>24.05.2023</td>
                <td>$124.97</td>
                <td>
                  <div className="bg-[#C4F8E2] text-[#06A561] p-[5px] text-center">
                    Paid
                  </div>
                </td>
              </tr>
              <tr>
                <td>Michael Clark</td>
                <td>02.07.2023</td>
                <td>$50.00</td>
                <td>
                  <div className="bg-[#F0F0F0] text-[#A0A0A0] p-[5px] text-center">
                    Pending
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
