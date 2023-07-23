// A function inside another function but as a argument  is callback.

function one(call_two) {
    console.log("Step 1 complete. Please call step 2");
    call_two();
}

function two() {
  console.log("step 2");
}

one(two);
// two();
