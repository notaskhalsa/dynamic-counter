import React, { useEffect, useState } from 'react'

function getSavedValue(key:string, initialValue:string|any){
    const savedValue = JSON.parse(localStorage.getItem(key)!)
    if(savedValue){
        return savedValue;
    }
    if(initialValue instanceof Function){
        return initialValue()
    }
    else{
        return initialValue;
    }
}

export default function UseLocalStorage(key:string, initialValue:string) {
    const [value,setValue] = useState(() => {
        return getSavedValue(key,initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value])
    
    return [value,setValue];
}
