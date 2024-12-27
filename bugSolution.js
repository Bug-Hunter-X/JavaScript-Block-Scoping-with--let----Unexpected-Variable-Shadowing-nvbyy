function myFunction() {
  let x = 10;
  if (true) {
    // Avoid redeclaring 'x', use the same variable if it's meant to modify the outside scope
    x = 20;
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 20
}
//or use a different name for the inner scope to avoid any accidental shadowing.
function myFunction() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  console.log(x); // Outputs 10
}