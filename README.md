# Food Delivery App

## Components Structure

- **Header**
  - Logo
  - Navigation Items

- **Body**
  - Search
  - Restaurant Container
    - Restaurant Card
      - Image
      - Name of Restaurant
      - Star Rating
      - Cuisines
      - Delivery Time

- **Footer**
  - Copyright
  - Links
  - Address
  - Contact Information

## Export/Import in JavaScript

### Two Types of Export/Import

### Default Export/Import
```javascript
export default Component;
import Component from "path";
```

### Named Export/Import
``` javascript
export const Component;
export {Component};
import {Component} from "path";
```

## React Hooks(Normal JS Utility Functions)
- `useState()` - Superpowerful State Variables in React
- `useEffect()` - Manage Side Effects in Functional Components


## Two types of Routing
- Client side routing
- Server side routing
- under the hood <Link> component is wrapper on anchor tag

### In JavaScript, any value can be considered either "truthy" or "falsy". A value is truthy if it evaluates to true when used in a boolean context, and falsy if it evaluates to false. The following values are considered falsy:

- false
- 0
- "" (empty string)
- null
- undefined
- NaN

const groupedCardMenu = resMenu.find(menu => menu.groupedCard);

const groupedCardMenu = resMenu.find(menu => menu.groupedCard !== undefined);

In the context of find, the callback function menu => menu.groupedCard will return the value of menu.groupedCard. If menu.groupedCard is not undefined (i.e., it is truthy), it will be equivalent to menu.groupedCard !== undefined.

So, these two lines are effectively the same in this context:

# Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector
  