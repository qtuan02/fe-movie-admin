import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BringToFront, CircleGauge, Compass, Film, LineChart, MapPinHouse, Package, TvMinimalPlay, UserCog, Users } from "lucide-react";

export function SiderComponent() {
    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                    <Avatar>
                        <AvatarImage src="/logo.png" />
                    </Avatar>
                    <span className="font-bold">OK-VIP Movies</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-md font-medium lg:px-4">
                    <NavLink to="/"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <CircleGauge className="h-4 w-4" />
                        Dashboard
                    </NavLink>
                    <h1 className="text-base text-muted-foreground font-normal">Overviews</h1>
                    <NavLink to="/country"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <Compass className="h-4 w-4" />
                        Country
                    </NavLink>
                    <NavLink to="/genre"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <Package className="h-4 w-4" />
                        Genre
                    </NavLink>
                    <NavLink to="/cinema"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <MapPinHouse className="h-4 w-4" />
                        Cinema
                    </NavLink>
                    <NavLink to="/movie"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <Film className="h-4 w-4" />
                        Movie
                    </NavLink>
                    <h1 className="text-base text-muted-foreground font-normal">Services</h1>
                    <NavLink to="/showtime"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <TvMinimalPlay className="h-4 w-4" />
                        Showtime
                    </NavLink>
                    <NavLink to="/booking"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <BringToFront className="h-4 w-4" />
                        Booking
                    </NavLink>
                    <NavLink to="/statistic"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <LineChart className="h-4 w-4" />
                        Statistic
                    </NavLink>
                    <h1 className="text-base text-muted-foreground font-normal">Users</h1>
                    <NavLink to="/user"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <UserCog className="h-4 w-4" />
                        User
                    </NavLink>
                    <NavLink to="/customer"
                        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 transition-all 
                            ${isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                    >
                        <Users className="h-4 w-4" />
                        Customer
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}