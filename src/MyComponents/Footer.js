import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        bottom: "0vh",
        width: "100%",
    }
    return (
        <footer className=" bg-dark text-light text-center m-1" style={footerStyle}> 
            <h5>Copyright &copy; MyTaskList.com.</h5> 
            <h6>Did you complete your tasks?</h6>
        </footer>
    )
}
