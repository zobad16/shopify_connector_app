import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./Slices/Dashboard";
import usersReducer from "./Slices/Users";
import productsReducer from "./Slices/Products";
import ordersReducer from "./Slices/Orders";
import storesReducer from "./Slices/Stores"
const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    stores: storesReducer
  },
});

export default store;
