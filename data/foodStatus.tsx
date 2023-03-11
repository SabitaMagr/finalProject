import React from "react";

export interface foodStatus {
    value?: number;
    status?: string;
}

const foodStatusData: foodStatus[] = [
    {
        value: 1,
        status: "Available"
    },
    {
        value: 2,
        status: "Unavailable"
    }
]

export default foodStatusData;