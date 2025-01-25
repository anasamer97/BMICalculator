import React, { useState } from "react";

const BMICalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height!");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = (weight / heightInMeters ** 2).toFixed(2);

    setBmi(calculatedBMI);
    if (calculatedBMI < 18.5) {
      setCategory("Underweight");
    } else if (calculatedBMI < 24.9) {
      setCategory("Normal weight");
    } else if (calculatedBMI < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-gray-800">
        <h1 className="text-2xl font-bold text-center mb-4">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="weight">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="height">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-lg font-bold">Your BMI: {bmi}</p>
            <p className={`text-xl font-semibold ${categoryColor(category)}`}>
              Category: {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const categoryColor = (category) => {
  switch (category) {
    case "Underweight":
      return "text-blue-500";
    case "Normal weight":
      return "text-green-500";
    case "Overweight":
      return "text-yellow-500";
    case "Obese":
      return "text-red-500";
    default:
      return "";
  }
};

export default BMICalc;
