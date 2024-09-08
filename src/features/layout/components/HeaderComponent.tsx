import { Link } from "react-router-dom"
import {
    Bell,
    BringToFront,
    CircleGauge,
    CircleUser,
    Compass,
    Film,
    LineChart,
    MapPinHouse,
    Menu,
    Package,
    TvMinimalPlay,
    UserCog,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function HeaderComponent() {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <Avatar>
                                <AvatarImage src="/logo.png" />
                            </Avatar>
                            <span className="font-bold">OK-VIP Movies</span>
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                            <CircleGauge className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Compass className="h-4 w-4" />
                            Country
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Package className="h-4 w-4" />
                            Genre
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <MapPinHouse className="h-4 w-4" />
                            Cinema
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Film className="h-4 w-4" />
                            Movie
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <TvMinimalPlay className="h-4 w-4" />
                            Showtime
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <BringToFront className="h-4 w-4" />
                            Booking
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <LineChart className="h-4 w-4" />
                            Statistic
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <UserCog className="h-4 w-4" />
                            User
                        </Link>
                        <Link
                            to="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Users className="h-4 w-4" />
                            Customer
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1"></div>
            <div className="flex gap-4 items-center">
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}