import React from 'react'

const Students = () => {

    const stds = [
        "Manish", "Priya", "Rahul", "Nrupul"
    ]

    return (
        <div>
            {
                stds.map((el, i) => {
                    return (
                        <div key={i}>
                            <p>{i + 1}</p>
                            <h1>{el}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Students