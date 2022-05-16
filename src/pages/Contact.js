import { Button } from "@mui/material"
import { useState } from "react"

const Contact = () => {
    const [val, setVal] = useState("Add")
    const handleBtn = () => {
        setVal("Value Added")
    }
    return (
        <div>
            <h2>This is the Contact page</h2>
            <Button variant="outlined" onClick={handleBtn}>{val}</Button>
        </div>

    )
}

export default Contact