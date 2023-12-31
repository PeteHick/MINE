// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

class Firework {
  constructor() {
    this.hu = 10;
    this.firework = new Particle(random(width), height, this.hu, true);
    this.exploded = false;
    this.particles = [];
  }

  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }
  updateColor() {
    this.hu = (this.hu + random(360)) % 360;
    
    console.log("new hu: " + this.hu);
    this.firework.hu = this.hu
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].hu = this.hu;
    }
  }
  updateExplosionVelocity() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].explosionVelocity = 1.04;
    }
  }
  explode() {
    for (let i = 0; i < 185; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
function mouseClicked(){
  if (this.hu < 360){
    this.hu = 0;
  } else {
    this.hu += 10;
  }
}