console.log("--- Truthy 와 Falsy ---");

// Falthy
// 0, -0, "", undefined, null, NaN, 0n

const f = null;

if (f) {
  console.log(true);
} else {
  console.log(false);
}
