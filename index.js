// Code your solution here
function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }

  
  function fuzzyMatch(drivers, prefix) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(prefix.toLowerCase())
    );
  }

  
  function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  