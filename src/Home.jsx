import { useEffect, useState } from "react";
import { CounterAPI } from "counterapi";
import { Link } from "react-router-dom";
const Home = () => {
  const counter = new CounterAPI();
  const [mainCount, setMainCount] = useState(0);
  const getData = () => {
    counter.get("pledgeCountAdypuSoe", "pledgeCountAdypuSoe").then((res) => {
      setMainCount(res.Count);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-sky-200 h-full min-h-screen flex flex-col justify-between">
      {/*  */}
      <div className="flex text-white font-bold bg-black fixed z-40 justify-center items-center top-0 left-0 h-screen w-screen">
        Link will open on 26/01/2024 at 8am
      </div>
      {/*  */}
      <header className="">
        <div className="Header flex">
          <div className="clg_logo_wrapper">
            <img src={"/CLG_Logo.png"} className="clg_logo" alt="" />
          </div>
          <div className="titles">
            <div className="top flex items-end">
              <div className="mainTitle">Ajeenkya</div>
              <div className="mainHeading">DY Patil School of Engineering</div>
            </div>
            <div className="sub-heading">
              {`in association with "Rotary District 3131, Peace Building and Conflict Resolution Avenue"`}
            </div>
          </div>
        </div>
      </header>
      <div className="w-full  my-5 md:h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src="/main.png"
          className="sm:w-[50vw] sm:rounded-md shadow-lg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        शपथ लीजिये
        <Link
          to={"/main"}
          className="bg-blue-600 py-2 rounded-md m-3 text-white hover:bg-blue-800 px-4"
        >
          Take Pledge
        </Link>
      </div>
      <footer className="flex justify-around items-center p-5 bg-blue-300">
        <b>&copy; adypsoe, lohegaon, pune.</b>
        <b>Total pledge count: {mainCount}</b>
      </footer>
    </div>
  );
};

export default Home;
