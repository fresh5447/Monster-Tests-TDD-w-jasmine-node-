var Monster = function(name, color, aggressive, power) {
  this.name = name;
  this.color = color;
  this.aggressive = aggressive;
  this.power = power;
}

Monster.prototype.getInfo = function () {
  return "I am " + this.name + " with power of " + this.power;
}

Monster.prototype.sayHello = function (name) {
  return name ? "Hello " + name : "Hello stranger"
}

module.exports = Monster;
