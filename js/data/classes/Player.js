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
  