function groupingDishes(dishes) {
  const map = {};
    
  for (let dish of dishes) {
    const meal = dish[0];
    for (let i = 1; i < dishes.length; i++) {
      const ingredient = dish[i];
      map[ingredient] = map[ingredient] || [];
      map[ingredient].push(meal);
    }
  }
    
  console.log(map);
  const keys = Object.keys(map).sort();
  console.log(keys);
    
  return keys.reduce((result, key) => {
    if (map[key].length > 1) {
      result.push([key, ...map[key].sort()]);   
    }
    return result;
  }, []);
}

const dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];

const result = groupingDishes(dishes);
console.log(result);