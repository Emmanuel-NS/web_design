# 🎬 Movie UI Web Design

A **static**, **multi‑page** movie-themed UI showcasing expertise in **HTML**, **CSS**, and **vanilla JavaScript**. It features dynamic sliders, responsive navigation, and data‑driven content—all without any frameworks.

---

## 📖 Overview

This project demonstrates modern front‑end skills by building a movie showcase website with:

- A **dynamic hero slider** that rotates background images, titles, and descriptions every few seconds.   
- A **sticky, transparent header** that gains a blurred backdrop on scroll.   
- **“Now Showing”** and **“Popular”** carousels powered by reusable data objects.   
- **Responsive navigation** with dropdowns and mobile‑friendly menus.   


---

## 📋 Table of Contents

1. [Features](#features)  
2. [Demo](#demo)  
3. [Tech Stack](#tech-stack)  
4. [Project Structure](#project-structure)  
5. [Getting Started](#getting-started)  
6. [Usage](#usage)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## ✨ Features

- **Hero Slider**: Full‑screen background carousel with movie metadata   
- **Sticky Header**: Transparent nav that blurs on scroll   
- **Movie Carousels**: Clickable “Now Showing” and “Popular” carousels using a centralized data file (`description.js`)   
- **Responsive Design**: Adapts to desktop, tablet, and mobile with CSS Grid and Flexbox   
- **Pure Vanilla JS**: No frameworks—just ES6+ code in `script.js` for interactivity   
- **Reusable Data**: Movie metadata stored in `description.js` for easy updates   
- **Multi‑Page Layout**: Separate HTML files for Home, Now Showing, News & Updates, Join Us, Partnership, and Registration  

---

## 🔗 Demo

Browse the live site here:  
https://emmanuel-ns.github.io/web_design/

---

## 🛠 Tech Stack

- **HTML5** & **Semantic Elements**  
- **CSS3** (Grid, Flexbox, Variables, Transitions)  
- **JavaScript (ES6+)**  
- **No external libraries**—fully vanilla   

---

## 📂 Project Structure

web_design/ ├── index.html # Main landing page ├── nowshowing.html # “Now Showing” dynamic view ├── new.update.html # News & Updates page ├── joinUs.html # Join Us page ├── partnership.html # Partnership info ├── register.html # Registration form ├── images/ # Backgrounds & posters ├── styles/ │ └── styles.css # Global & component styles └── scripts/ ├── description.js # Movie metadata definitions └── script.js # Slider logic, header behavior, event handlers


---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari)  
- No server required—static files only!  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Emmanuel-NS/web_design.git
   cd web_design

2. Open index.html in your browser, or serve with a simple HTTP server:

# Python 3
python -m http.server 8000
# Visit http://localhost:8000
Static sites can also be hosted on GitHub Pages‡ 
Plain Concepts

⚡ Usage
Navigate via the top menu (scroll to reveal blurred header).

View sliders on the Home page for featured and popular movies.

Click carousel items to update the Now Showing page via URL parameters.

Fill out the registration form and see the “Thank you” modal on submit.

🤝 Contributing
Contributions are welcome! To maintain consistency:

1. Fork the repo

2. Create a new branch: git checkout -b feature/YourFeature

3. Commit your changes: git commit -m 'Add some feature'

4. Push to your branch: git push origin feature/YourFeature

5. Open a Pull Request


📄 License
This project is licensed under the MIT License—see LICENSE for details.
