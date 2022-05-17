import Button from "@mui/material/Button"
import { useState } from "react"

import Box from "@mui/material/Box";

const Contact = () => {
    const [val, setVal] = useState("Add")
    const handleBtn = () => {
        setVal("Value Added")
    }
    return (
        <Box sx={{ m: "auto", maxWidth:'xl', p:3 }}>
            <h2>This is the Contact page</h2>
            <Button variant="outlined" onClick={handleBtn}>{val}</Button>
        </Box>

    )
}

export default Contact