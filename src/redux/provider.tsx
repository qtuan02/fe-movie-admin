import { useEffect, useRef } from "react";
import store from "./store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<typeof store | null>(null);

	if (!storeRef.current) {
		storeRef.current = store;
	}

	useEffect(() => {
		if (storeRef.current != null) {
		  const unsubscribe = setupListeners(storeRef.current.dispatch);
		  return unsubscribe;
		}
	  }, []);
      
    return <Provider store={store}>{children}</Provider>;
}