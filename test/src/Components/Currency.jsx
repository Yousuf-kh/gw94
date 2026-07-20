import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

const Currency = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        function getData() {
            try {
                const response = axios.get("https://api.exchangerate-api.com/v4/latest/USD").then(data => {
                    console.log(data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Currency