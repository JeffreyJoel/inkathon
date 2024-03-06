'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function TokenSelection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gradient-to-l from-gray-900 p-6 shadow  hover:from-slate-950 hover:to-slate-950">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Token
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Deploy utility tokens on the Polkadot chain with ease.
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create Token</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you are done. */}
            Parameters the contract specifies to be passed in during deployment.
          </DialogDescription>
        </DialogHeader>
        <div className=" py-4">
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="name" className=" text-right">
              Name
            </Label>
            <Input id="name" value="" className="mt-2" />
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              Symbol
            </Label>
            <Input id="symbol" value="" className="mt-2" />
          </div>
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value="" className="mt-2" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function CreateToken() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`mr-2 rounded border bg-white px-4 py-2 font-sans text-sm font-semibold  text-gray-900 no-underline focus:outline-none`}
        >
          Create
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create Token</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you are done. */}
            Parameters the contract specifies to be passed in during deployment.
          </DialogDescription>
        </DialogHeader>
        <div className=" py-4">
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="name" className=" text-right">
              Name
            </Label>
            <Input id="name" value="" className="mt-2" />
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              Symbol
            </Label>
            <Input id="symbol" value="" className="mt-2" />
          </div>
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value="" className="mt-2" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
