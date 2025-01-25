# BMI Calculator

A simple and responsive BMI (Body Mass Index) Calculator built with React and styled with Tailwind CSS.

## 🛠️ Features

- **User Input**: Enter your weight and height to calculate your BMI.
- **Result**: Displays the BMI value and the corresponding BMI category (Underweight, Normal Weight, Overweight, or Obesity).
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly design.
  
## 📸 Demo

[Screenshot 2025-01-25 135457](https://github.com/user-attachments/assets/b0cfdcff-28ad-418f-91bc-426afe93636d)


## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bmi-calculator.git
   ```
2. **Navigate into the project folder**:
   ```bash
   cd bmi-calculator
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the project**:
   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the BMI Calculator in action.

## 🧑‍💻 Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the app with utility-first CSS.
- **Vite**: A fast build tool for modern web projects.

## 👨‍💻 How It Works

- The app takes user input for **weight** (in kg) and **height** (in cm).
- It calculates the BMI using the formula:  
  \[
  BMI = \frac{weight}{height^2}
  \]
  (where height is converted from cm to meters).
- Based on the calculated BMI, the app shows a classification:
  - Underweight: BMI < 18.5
  - Normal weight: 18.5 <= BMI < 24.9
  - Overweight: 25 <= BMI < 29.9
  - Obesity: BMI >= 30

## 🤝 Contributing

Feel free to fork the repository, make changes, and create pull requests for any improvements or bug fixes. Contributions are welcome!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


