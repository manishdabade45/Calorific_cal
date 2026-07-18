# Integrated Calorific Value Calculator (Bomb & Boys Calorimeter)

An interactive, web-based engineering chemistry tool designed to calculate the **Gross Calorific Value (GCV)** and **Net Calorific Value (NCV)** of fuels. This project was developed during a college internship to automate calculations for Bomb and Boys Calorimeter experiments.

🌐 **Live Web App**: [calorificvaluecalculator.netlify.app](https://calorificvaluecalculator.netlify.app/)

---

## 📜 Intellectual Property & Copyright Details

This project is officially registered under the Copyright Office, Government of India:
*   **Work Title**: *Integrated Calorific Value Calculator Using C++ (Bomb and Boys Calorimeter)* (Ported to HTML/CSS/JS for Web deployment)
*   **Copyright Registration / Application No.**: `SW-29810/2025-CO`
*   **Application Date**: July 26, 2025
*   **Category**: Computer Software / Web Application
*   **Institution**: Department of Applied Science and Humanities, **Pimpri Chinchwad College of Engineering (PCCOE), Pune**

---

## 👥 Authors & Project Team

### Mentors & Project Guides (PCCOE Faculty)
*   **Dr. Amol Purushottam Kharche**
*   **Dr. Leena Ashok Sharma**
*   **Dr. Amruta Manoj Patil**

### Student Developers & Applicants
*   **Manish Nitin Dabade** (GitHub: [manishdabade45](https://github.com/manishdabade45))
*   **Divya Dhanraj Wankhade**
*   **Swarup Subhash Bhadule**

---

## 🧪 Scientific Formulas & Calculation Modules

This tool supports **6 distinct calculation modules** required for academic and industrial fuel analysis:

### 1. Bomb Calorimeter (Used for Solid & Liquid Fuels)
*   **Gross Calorific Value (GCV)**:
    $$\text{GCV} = \frac{(W + w) \times t}{m} \quad (\text{cal/g})$$
*   **Corrected GCV (with cooling, acid, and fuse wire corrections)**:
    $$\text{Corrected GCV} = \frac{(W + w) \times (t + \text{Cooling Correction}) - (\text{Acid Correction} + \text{Fuse Wire Correction})}{m} \quad (\text{cal/g})$$
*   **Net Calorific Value (NCV)**:
    $$\text{NCV} = \text{GCV} - (0.09 \times H \times 587) \quad (\text{cal/g})$$
    *(Where $H$ is Hydrogen % and $587 \text{ cal/g}$ is the latent heat of steam)*

### 2. Boys Calorimeter (Used for Gaseous & Volatile Liquid Fuels)
*   **Gross Calorific Value (GCV)**:
    $$\text{GCV} = \frac{W \times t}{V} \quad (\text{Kcal/m}^3)$$
*   **Net Calorific Value (NCV)**:
    $$\text{NCV} = \frac{(W \times t) - (m_s \times L)}{V} \quad (\text{Kcal/m}^3)$$
*   **NCV (when GCV is directly given)**:
    $$\text{NCV} = \text{GCV} - \frac{m_s \times L}{V} \quad (\text{Kcal/m}^3)$$
    *(Where $m_s$ is mass of steam, $L$ is latent heat of steam, and $V$ is volume of fuel)*

---

## 🌟 Key Application Features

*   **Bilingual Base**: Originally conceptualized and written in C++, now ported to HTML5, CSS3, and JavaScript for zero-install, cross-platform accessibility.
*   **Input Sanitization**: Prevents logical errors by blocking negative inputs (e.g., negative masses, volumes, or temperatures).
*   **Modern Aesthetics**: Styled using deep academic blues, smooth linear gradients, micro-interactions, responsive form layouts, and clean dynamic results displays.
*   **Fully Responsive**: Compatible with desktops, tablets, and smartphones.

---

## 📂 Project Structure

```text
Calorific-Value-Calculator/
│
├── index.html       # Web structure & all calculation forms
├── styles.css       # Custom design system & animations
└── index.js         # Calculation logic & DOM interactions
```

---

## 🚀 Local Deployment

Since this is a client-side web application, it runs directly in any modern browser without local server requirements:

1. Clone the repository:
   ```bash
   git clone https://github.com/manishdabade45/Calorific_cal.git
   cd Calorific_cal
   ```
2. Open `Calorific-Value-Calculator/index.html` in any web browser.

---

*Developed as part of the First-Year Engineering Internal Internship Program under the guidance of PCCOE Faculty.*
