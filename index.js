// Get canvas element and its 2D rendering context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 1024;
canvas.height = 576;

const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4,
};

// Define gravity constant for physics simulation
const gravity = 0.5;

/**
 * Sprite Class
 * Handles loading and drawing of image-based game objects
 */
class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  // Draw the sprite image at its current position
  draw() {
    if (!this.image) return; // Prevent drawing errors if image hasn't loaded
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  // Update method called each frame
  update() {
    this.draw();
  }
}

/**
 * Player Class
 * Represents a player character with physics and movement
 */
class Player {
  constructor(position) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 100;
  }

  // Draw the player as a red rectangle
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 100, this.height);
  }

  // Update player position and apply physics each frame
  update() {
    this.draw();

    // Update position based on velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Apply gravity if player is not on ground
    if (this.position.y + this.height + this.velocity.y < canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0; // Stop vertical movement when on ground
  }
}

// Create player instances
const player = new Player({ x: 0, y: 0 });
const player1 = new Player({ x: 200, y: 10 });

// Initialize vertical positions (unused variables?)
let y = 100;
let y2 = 100;

// Create background sprite
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/Vertical Platformer Background.png",
});

/**
 * Main animation loop
 * Updates and draws all game objects each frame
 */
function animate() {
  window.requestAnimationFrame(animate); // Create animation loop

  // Clear canvas
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Update game objects
  c.save();
  c.scale(4, 4);
  c.translate(0, -background.image.height + scaledCanvas.height);
  background.update();
  c.restore();

  player.update();
  player1.update();

  // Handle player horizontal movement
  player.velocity.x = 0;
  if (keys.d.pressed) player.velocity.x = 5; // Move right
  else if (keys.a.pressed) player.velocity.x = -5; // Move left
}

// Track keyboard input state
const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
};

// Start the animation loop
animate();

/**
 * Keyboard Event Listeners
 */
// Handle keydown events
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true; // Start moving right
      break;
    case "a":
      keys.a.pressed = true; // Start moving left
      break;
    case "w":
      player.velocity.y = -15; // Jump
      break;
  }
});

// Handle keyup events
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false; // Stop moving right
      break;
    case "a":
      keys.a.pressed = false; // Stop moving left
      break;
  }
});
