import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center">
                <Outlet />
            </div>
            <div className="hidden bg-muted lg:block">
                <img src="/placeholder.svg" alt="Image" height={1080} width={1920} />
            </div>
        </div>
    )
}

export default AuthLayout