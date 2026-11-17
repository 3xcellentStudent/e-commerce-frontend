'use client'

import {AlertDialog as RadixAlertDialog} from "radix-ui";
import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

export default function AlertDialog({image, variationName, customerQuantity, imageSize, state, setState, action}: {
	state: boolean, setState: Dispatch<SetStateAction<boolean>>, action: () => void, image: string, variationName: string, 
	customerQuantity: number,
	imageSize: number
}){
	
	console.log("JAKSDJKASHDJKASKJDAKJDHKJHD")

  return(
		<div className="fixed ">
			<RadixAlertDialog.Root open={state} defaultOpen>
				{/* <RadixAlertDialog.Trigger asChild> */}
					{/* <button className="Button violet">Remove from cart ?</button> */}
				{/* </RadixAlertDialog.Trigger> */}
				<RadixAlertDialog.Portal>
					<RadixAlertDialog.Overlay className={`${styles.overlay} fixed bg-black/85`} />
					<RadixAlertDialog.Content className={`${styles.content} bg-black`}>
						<RadixAlertDialog.Title className={`text-white font-bold m-0 mb-4 text-xl`}>
							Are You sure ?
						</RadixAlertDialog.Title>
						<div className="flex flex-row flex-1 text-white/80 font-light text-sm w-full gap-2 mb-8">
							<figure className={``}>
								<Image src={image || ""} alt={variationName} width={imageSize} height={imageSize} loading="eager" />
							</figure>
							{/* <Separator decorative orientation="vertical" className="bg-muted h-18 w-[1px] mx-1" /> */}
							<div className="flex flex-col justify-between flex-1">
								<h3 className="font-bold text-base">{variationName}</h3>
								<div>
									<span className="w-[1rem] text-center whitespace-nowrap">Qty: {customerQuantity}</span>
								</div>
							</div>
						</div>
						{/* <RadixAlertDialog.Description className={`text-white/80 font-light text-sm mb-8`}> */}
							{/* This action cannot be undone. This will permanently delete your
							account and remove your data from our servers. */}
						{/* </RadixAlertDialog.Description> */}
						<div className="flex justify-end gap-10 text-sm">
							<RadixAlertDialog.Action asChild>
								<button className="bg-accent/15 hover:bg-accent/35 duration-200 py-2 px-4 rounded-md text-accent/65 hover:text-accent" 
								onClick={action} >Yes, remove</button>
							</RadixAlertDialog.Action>
							<RadixAlertDialog.Cancel asChild>
								<button className="bg-primary/85 hover:bg-primary duration-200 py-2 px-4 
								rounded-md text-white/75 hover:text-white font-bold" 
								onClick={() => setState(prev => !prev)}>Leave in cart</button>
							</RadixAlertDialog.Cancel>
						</div>
					</RadixAlertDialog.Content>
				</RadixAlertDialog.Portal>
			</RadixAlertDialog.Root>
		</div>
  )
}