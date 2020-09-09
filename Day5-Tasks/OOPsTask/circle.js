class Circle {
    constructor(radius, color) {
        this.radius = radius || "1.0";
        this.color = color || "red";
    }
    getRadius() {
        return this.radius;
    }
    getColor() {
        return this.color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    setColor(color) {
        this.color = color;
    }
    getArea() {
        let res = Math.PI * +this.radius * +this.radius;
        return res;
    }
}

let cir = new Circle(5, "red");
console.log(cir.getRadius());
console.log(cir.getArea());
console.log(cir.getColor());
cir.setRadius(10);
cir.setColor("black");
console.log(cir.getArea());