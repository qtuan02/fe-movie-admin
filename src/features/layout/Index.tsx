import { HeaderComponent } from "./components/HeaderComponent";
import { SiderComponent } from "./components/SiderComponent";

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <SiderComponent />
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <HeaderComponent />
                </header>
                <main className="md:p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}