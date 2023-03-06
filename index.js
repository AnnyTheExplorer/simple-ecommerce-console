function shopAnny() {
  let name = prompt("What is your name?");
  let buy = prompt(
    "What would you like to shop today? 1. cloths 2. Shoes 3. Bags 4. Others"
  );
  if (buy >= 1) {
    alert(
      "You'll be redirected to store shortly... Thanks for shopping " +
        name +
        "!"
    );
  } else {
    alert("Maybe next time! Checkout our latest arrivals...");
  }
}
shopAnny();
