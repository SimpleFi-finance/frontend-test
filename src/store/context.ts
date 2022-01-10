import React from "react";
import { MainStoreContextType } from "../types";
import { initialState } from "./state";

export const ContextApp = React.createContext<MainStoreContextType>({
    state:initialState,
    dispatch: ()=>null
});

