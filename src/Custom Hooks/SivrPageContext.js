import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const SivrPageContext = createContext();

export function SivrPageProvider({children}) {
    const [rootPage, setRootPage] = useState([]);
    const [allPages,setAllPages]=useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/root-sivr-page/1');
                setRootPage(response.data);

            } catch (error) {
                console.log('Error occurred:', error);

            }
        }


        fetchData();
    }, [setRootPage]);

const getAllPages=()=>{
    async function fetchData() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/sivr-pages/1');
            setAllPages(response.data.data);

        } catch (error) {
            console.log('Error occurred:', error);

        }
    }
    fetchData();
}

    const findPageById = ( idToFind) => {
        idToFind = parseInt(idToFind);
         getAllPages();
        for (const item of allPages) {

            if (item.id === idToFind) {
                return item;
            }
        }

        return null;
    }

    return (
        <SivrPageContext.Provider value={{rootPage, allPages, findPageById,getAllPages}}>
            {children}
        </SivrPageContext.Provider>
    );
}

export function useSivrPages() {
    return useContext(SivrPageContext);
}
