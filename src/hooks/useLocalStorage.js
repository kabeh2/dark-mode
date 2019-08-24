import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    console.log("local storage key: " + item);

    // Parse and return stored JSON, or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    console.log("value: " + value);

    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
