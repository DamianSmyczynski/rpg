import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroReducer from "./hero/heroReducer";
import gameLocationReducer from "./gameLocation/gameLocationReducer";
import characterEquipmentReducer from "./characterEquipment/characterEquipmentReducer";
import itemsReducer from "./items/itemsReducer";

export const store = configureStore({
  reducer: combineReducers({
    hero: heroReducer,
    location: gameLocationReducer,
    characterEquipment: characterEquipmentReducer,
    items: itemsReducer,
  }),
});
