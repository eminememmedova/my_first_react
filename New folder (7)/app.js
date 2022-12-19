function fullName(name) {
  return function sureName(surname) {
    return name + surname;
  };
}
console.log(fullName("emine")(" Memmedova"));
