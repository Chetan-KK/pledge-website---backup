import { CounterAPI } from "counterapi";
import { useEffect, useState } from "react";

const ThankYou = () => {
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
      <header className="h-24 sm:h-32">
        <img
          src="/cloud-bg.png"
          className="absolute w-full md:px-56 px-4 pt-4 md:py-11"
          alt=""
        />
      </header>
      <div className="text-center font-bold text-2xl">
        Thank You for taking Pledge
      </div>
      <footer className="flex justify-around items-center p-5 bg-blue-300">
        <b>&copy; adypu</b>
        <b>Total pledge count: {mainCount}</b>
      </footer>
    </div>
  );
};

export default ThankYou;
