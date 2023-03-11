import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({children}) => {
    return (
        <>
           <header className=" shadow-lg"><Header/></header>
           <main className="container mx-auto">
                {children}
            </main>
            <Footer/> 
        </>
    );
};

export default Layout;