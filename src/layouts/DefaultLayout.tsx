import { Outlet } from "react-router";

export function DefaultLayout() {
    return (
        <div className="container">
            <header className="header">
                Teste Header
            </header>
            <Outlet/>
        </div>
    )
}