import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

export default function MarkSuccess({checked}:{checked:boolean}) {

  return (
    <div className='w-fit'>
        <Checkbox checked ={checked}/>
    </div>
  )
}
