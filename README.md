# Food Delivery App

/\*\*

- Header
- - Logo
- - Nav Items
-
- Body
- - Search
- - Restaurant Conatiner
-     - Restaurant card
-        - img
-        - Name of res, star rating, cuisines, delivery time.
- Footer
- - Copyright
- - Links
- - Address
- - Contact
- \*/

Two type sof Export/Import
-Deafult Export/Import
export default Component
import Component from "path";

-Named Export/Import
export const Component;
export {Component};
import {Component} from "path";

# React Hooks
(Normal Js Utility functions)
- useState() - Superpowerful State Variables in reatc
- useEffect()

# Two types of Routing
- Client side routing
- Server side routing

under the hood <Link> component is wrapper on anchor tag
.




In JavaScript, any value can be considered either "truthy" or "falsy". A value is truthy if it evaluates to true when used in a boolean context, and falsy if it evaluates to false. The following values are considered falsy:

false
0
"" (empty string)
null
undefined
NaN


const groupedCardMenu = resMenu.find(menu => menu.groupedCard);

const groupedCardMenu = resMenu.find(menu => menu.groupedCard !== undefined);

In the context of find, the callback function menu => menu.groupedCard will return the value of menu.groupedCard. If menu.groupedCard is not undefined (i.e., it is truthy), it will be equivalent to menu.groupedCard !== undefined.

So, these two lines are effectively the same in this context: