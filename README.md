# Space Panda Interactive Resume

Welcome to the **Space Panda Interactive Resume** project! This interactive web experience showcases the skills, hobbies, and contact information of Space Panda in a fun and engaging way. Navigate through sections by controlling Space Panda and interact with elements to reveal more details.

---

## Features

### Interactive Navigation
Use the keyboard to control Space Panda and scroll through sections.
- **Key controls:**
  - `A` for moving left
  - `D` for moving right

### Hobbies Section
View a selection of hobbies with interactive visuals like a film strip, book, SNES console, and rocket. A chart grows dynamically to show interest levels when Space Panda reaches the section.

### Skills Section
Click on stars to uncover hidden skills. Rocks reveal themselves as part of the moon's surface after transitions are complete.

### Dynamic Backgrounds
Gradients and transitions enhance the visual experience.

### Contact Section
Icons for GitHub, email, phone, and a CV download link are displayed. Text descriptions appear above icons, and animations enhance hover interactions.

### Custom Animations
- Flag animation triggered by Space Panda's position.
- Flower blooming animation.
- Rocks appearing dynamically on the moon surface.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Erynja/interactive-cv.git
2. Navigate to the project directory:
	```bash
	cd interactive-cv
3. Open the index.html file in your browser:
	```bash
	open index.html

---

## How It Works
### JavaScript Highlights
#### Scroll Triggered Animations
Elements such as charts and rocks are triggered based on Space Panda's scroll position.

```javascript

const chartTriggerPoint = 2100;
if (scrollContainer.scrollLeft >= chartTriggerPoint) {
    growCharts();
}
```
Keyboard Navigation
Space Panda's movement updates the scroll position dynamically:

```javascript

window.addEventListener("keydown", (e) => {
    if (e.key === "a") moveLeft();
    if (e.key === "d") moveRight();
});
```
Interactive Stars
Clicking on stars reveals corresponding skills:

```javascript
Code kopieren
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", () => showSkill(star));
});
```
---

## File Structure
```plaintext
|-- index.html        # Main HTML file
|-- cv.css            # Stylesheet for the interactive resume
|-- cv.js             # JavaScript for animations and interactions
|-- assets/           # Folder for images and media
    |-- daffodil.webp
    |-- github.png
    |-- phone.png
    |-- email.png
    |-- download.png
    |-- rock1.png
    |-- rock2.png
    |-- rock3.png
    |-- shakestein.png
    |-- spacepanda.png
```
---

## Customization
### Icons and Images
Replace images in the assets/ folder to customize visuals.

### Animation Timing
Adjust animation duration and delay in cv.css.

### Interactive Elements
Add or modify JavaScript functions in cv.js to include more interactivity.

---

## Future Enhancements

- Add a backend for form submission.
- Include achievements or portfolio projects as new interactive sections.
- Add audio for an immersive experience.

---

## Credits

Created by: **Jasmina Karadzehenemovic**  
GitHub: [Erynja](https://github.com/Erynja)  
Website: [https://erynja.com](https://erynja.com)