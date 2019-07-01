export default function path(array, object) {

}

const car = {
  make: "Honda",
  year: 2003,
  color: "white",
  specs: {
    transmission: "auto",
    doors: 4
  }
}

const myArray = ["make", "model", "color", "year"]

path(myArray, car) {
  // some code goes here
}
// expected return value = ["Honda", null, "white", 2003]

