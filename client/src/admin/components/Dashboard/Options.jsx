import { Bell, ChartNoAxesCombined, ChefHat, LayoutGrid, MessageSquare, Settings, ShoppingBag, Store, Ticket, Users, Utensils } from "lucide-react"
import OptionCard from "./OptionCard";

const Options = ({setFnc, fnc}) => {
const optionsCard = [
    {
        name: "Add Shop",
        icon: <Store className="text-orange-600" />,
        bg: "bg-orange-50",
        color: "text-orange-600",
    },
    {
        name: "Manage Shops",
        icon: <Store className="text-orange-600" />,
        bg: "bg-orange-50",
        color: "text-orange-600",
    },
    {
        name: "Add Food",
        icon: <Utensils className="text-emerald-600" />,
        bg: "bg-emerald-50",
        color: "text-emerald-600",
    },
    {
        name: "Manage Food",
        icon: <ChefHat className="text-amber-600" />,
        bg: "bg-amber-50",
        color: "text-amber-600",
    },
    {
        name: "Orders",
        icon: <ShoppingBag className="text-blue-600" />,
        bg: "bg-blue-50",
        color: "text-blue-600",
    },
    {
        name: "Customers",
        icon: <Users className="text-violet-600" />,
        bg: "bg-violet-50",
        color: "text-violet-600",
    },
    {
        name: "Offers",
        icon: <Ticket className="text-purple-600" />,
        bg: "bg-purple-50",
        color: "text-purple-600",
    },
    {
        name: "Reviews",
        icon: <MessageSquare className="text-cyan-600" />,
        bg: "bg-cyan-50",
        color: "text-cyan-600",
    },
    {
        name: "Analytics",
        icon: <ChartNoAxesCombined className="text-indigo-600" />,
        bg: "bg-indigo-50",
        color: "text-indigo-600",
    },
    {
        name: "Settings",
        icon: <Settings className="text-gray-600" />,
        bg: "bg-gray-100",
        color: "text-gray-600",
    },
];

  return (
    <div className="flex flex-wrap overflow-auto max-w-xl gap-1.5">
        {optionsCard.map((opt)=>{
            return <OptionCard key={opt.name} setFnc={setFnc} fnc={fnc} option={opt}/>
        })}
    </div>
  )
}

export default Options