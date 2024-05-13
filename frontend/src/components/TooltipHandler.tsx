import { Link, useLocation } from "react-router-dom"
import {
    Home,
    Package,
    ShoppingCart,
} from "lucide-react"

import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const TooltipHandler = () => {

    const location = useLocation();
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            to="/"
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${location.pathname === '/' ? "bg-accent text-accent-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground md:h-8 md:w-8`}
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Home</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span>
                            <Link
                                to="courses"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg ${location.pathname.includes("/courses") ? "bg-accent text-accent-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground md:h-8 md:w-8`}
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span className="sr-only">Courses</span>
                            </Link>
                        </span>
                    </TooltipTrigger>
                    <TooltipContent side="right">Courses</TooltipContent>
                </Tooltip>
                {/* <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Customers</span>
                  </Link>
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip> */}
                {/* <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Analytics</span>
                  </Link>
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip> */}
            </TooltipProvider>
        </>
    )
}

export default TooltipHandler