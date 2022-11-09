import Header from "./Components/Navbar"

const CommonContainer = ({children}) => {
    return (
        
        <>
        <Header/>
        {children}
        </>
    )
}

export default CommonContainer