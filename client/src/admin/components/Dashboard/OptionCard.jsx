import { Store, StoreIcon } from "lucide-react"

const OptionCard = ({option, setFnc, fnc}) => {
  return (
    <div onClick={()=>{setFnc(option.name)}} className={`h-27 flex flex-col justify-center items-center gap-2 w-27 rounded-2xl ${option.bg} cursor-pointer`}>
        {option.icon}
        <span>{option.name}</span>
    </div>
  )
}

export default OptionCard