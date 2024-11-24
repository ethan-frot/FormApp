import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormClientPage from "./pages/FormClientPage.tsx";
import AdminSinglePage from "./pages/AdminSinglePage.tsx";
import NavBar from "./components/ui/NavBar.tsx";

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >

            <NavBar/>

            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<FormClientPage/>}/>
                    <Route path="/admin" element={<AdminSinglePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;