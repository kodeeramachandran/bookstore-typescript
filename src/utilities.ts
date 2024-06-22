// src/utilities.ts

function logItem<T>(item: T): void {
    console.log(item);
  }
  
  function getItemProperty<T, K extends keyof T>(item: T, key: K): T[K] {
    return item[key];
  }
  
  export { logItem, getItemProperty };
  