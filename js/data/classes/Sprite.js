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