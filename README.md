# Calorific Value Calculator

An interactive, user-friendly web application designed to calculate the **Gross Calorific Value (GCV)** and **Net Calorific Value (NCV)** of fuels using **Bomb Calorimeter** and **Boys Calorimeter** experimental data. 

🌐 **Live Demo**: [calorificvaluecalculator.netlify.app](https://calorificvaluecalculator.netlify.app/)

This project was developed as an **Internal College Internship Task** by first-year engineering students to simplify and automate fuel analysis calculations in Chemistry and Thermodynamics.

---

## 🌟 Key Features

- **Multiple Calculation Modes**: Supports 6 distinct calculation types covering both solid/liquid fuels (Bomb Calorimeter) and gaseous/volatile liquid fuels (Boys Calorimeter).
- **Correction Factor Inputs**: Includes optional corrections for Bomb Calorimeter (Acid, Cooling, and Fuse Wire corrections) for highly accurate calculations.
- **Form Validation & Protection**: Prevents negative value inputs automatically.
- **Clean & Responsive UI**: Designed with a modern, responsive interface suitable for desktop, tablet, and mobile views.
- **Smooth Navigation**: One-click selection between calculation forms with interactive UI transitions and animations.

---

## 🧪 Scientific Concepts & Formulas

### 1. Bomb Calorimeter (Used for Solid & Liquid Fuels)

* **Gross Calorific Value (GCV)**:
  $$\text{GCV} = \frac{(W + w) \times t}{m} \quad (\text{cal/g})$$
  Where:
  * $W$ = Mass of water in calorimeter (g)
  * $w$ = Water equivalent of calorimeter (g)
  * $t$ = Temperature rise of water (°C)
  * $m$ = Mass of fuel sample taken (g)

* **Corrected GCV**:
  $$\text{Corrected GCV} = \frac{(W + w) \times (t + \text{Cooling Correction}) - (\text{Acid Correction} + \text{Fuse Wire Correction})}{m} \quad (\text{cal/g})$$

* **Net Calorific Value (NCV)**:
  $$\text{NCV} = \text{GCV} - (0.09 \times H \times 587) \quad (\text{cal/g})$$
  Where:
  * $H$ = Percentage of Hydrogen in the fuel
  * $587$ = Latent heat of steam (cal/g)

---

### 2. Boys Calorimeter (Used for Gaseous & Volatile Liquid Fuels)

* **Gross Calorific Value (GCV)**:
  $$\text{GCV} = \frac{W \times t}{V} \quad (\text{Kcal/m}^3)$$
  Where:
  * $W$ = Mass of water flowing through the calorimeter (kg/g)
  * $t$ = Temperature rise of water (°C)
  * $V$ = Volume of gaseous fuel burnt at STP ($m^3$)

* **Net Calorific Value (NCV)**:
  $$\text{NCV} = \frac{(W \times t) - (m_s \times L)}{V} \quad (\text{Kcal/m}^3)$$
  Where:
  * $m_s$ = Mass of steam condensed (g)
  * $L$ = Latent heat of steam ($\approx 587 \text{ cal/g}$)

* **NCV (when GCV is directly given)**:
  $$\text{NCV} = \text{GCV} - \frac{m_s \times L}{V} \quad (\text{Kcal/m}^3)$$

---

## 💻 Tech Stack

* **Frontend**: HTML5, Vanilla CSS3 (Custom gradients, smooth keyframe animations, responsive grid layout)
* **Logic**: Vanilla JavaScript (ES6+)

---

## 📂 Project Structure

```text
Calorific-Value-Calculator/
│
├── index.html       # Structure and forms for all 6 calculations
├── styles.css       # Custom styles, responsive variables, animations
└── index.js         # Calculation algorithms and DOM interaction script
```

---

## 🚀 How to Run the Project Locally

Since this is a client-side web application, it does not require any local server setup.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/Calorific_cal.git
   cd Calorific_cal
   ```
2. **Open in Browser**:
   Double-click the `index.html` file inside the `Calorific-Value-Calculator` folder, or right-click it and select **Open with** your preferred web browser (Chrome, Edge, Firefox, etc.).

---

## 👥 Contributors

This project was built by:
* **Swarup Bhadule**
* **Manish Dabade**
* **Divya Wankhade**

---

*Developed as part of the First-Year Engineering Internal Internship program.*
