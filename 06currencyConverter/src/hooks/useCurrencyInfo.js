import { data } from "autoprefixer";
import { useState, useCallback, useEffect,  } from "react";


function useCurrencyInfo(currency) {
    cons [data, setData] = useState({})
    useEffect( () => {
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` )
        .then( (res) => res.json())
        .then((res) => setData(res[currency]))
        // .then( (res) => res.setData())
        console.log(data);
    }, [currency])
    console.log(data);
    return data

} 
export default useCurrencyInfo;
