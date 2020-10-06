var equality = function (a, b) {
  if (a === b) {
    return true;
  }
  else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
    if (Object.keys(a).length != Object.keys(b).length)
      return false;

    for (var property in a) {
      if (b.hasOwnProperty(property))
      {
        if (! equality(a[property], b[property]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else
    return false;
}

console.log(equality({firstName:"Joe", lastName:"K", age:5, eyeColor:"black"},{firstName:"Joe", lastName:"K", age:5, eyeColor:"black"}))
console.log(equality({firstName:"Joe", lastName:"K", age:5, eyeColor:"black"},{firstName:"Jyoti", lastName:"K", age:5, eyeColor:"black"}))
