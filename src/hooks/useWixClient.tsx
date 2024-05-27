'use client'
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";





export const useWixClient = () => {

	return useContext(WixClientContext)



	
}


