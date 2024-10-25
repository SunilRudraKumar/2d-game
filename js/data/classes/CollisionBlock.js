/**
 * Collsionblock Class
 * Handles loading and drawing of image-based game objects
 */
class CollsionBlock {
  constructor({ position }) {
    this.position = position;
    this.width = 16;
    this.height = 16;
  }

  // Draw the sprite image at its current position
  draw() {
    c.fillStyle = "rgba(255,0,0,0.5)";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // Update method called each frame
  update() {
    this.draw();
  }
}
