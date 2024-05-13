import { Link, useLocation } from "react-router-dom"
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const SheetHandler = () => {
    const location = useLocation();
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            to="#"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Pheobe</span>
                        </Link>
                        <Link
                            to="/"
                            className={`flex items-center gap-4 px-2.5 ${location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            <Home className="h-5 w-5" />
                            Home
                        </Link>
                        <Link
                            to="courses"
                            className={`flex items-center gap-4 px-2.5 ${location.pathname.includes("/courses") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            <ShoppingCart className="h-5 w-5" />
                            Courses
                        </Link>
                        {/* <Link
                            to="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Users2 className="h-5 w-5" />
                            Customers
                        </Link> */}
                        <Link
                            to="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <LineChart className="h-5 w-5" />
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default SheetHandler