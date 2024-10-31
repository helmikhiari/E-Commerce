// components/UserInitializer.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "APIS/user";
import { setData, setIsAuth } from "reducers/userSlice";
import {getProducts} from '../APIS/product'
import { setProducts } from "reducers/productSlice";
export default function Initializer() {
    const dispatch = useDispatch();

    const getUserr = async () => {
        try {
            const response = await getUser();
            if (response) {
                dispatch(setData({
                    email: response.email,
                    firstName: response.firstName,
                    lastName: response.lastName,
                }));
                dispatch(setIsAuth(true));
            } else {
                localStorage.removeItem("token");
                dispatch(setIsAuth(false));
            }
        } catch (error) {
            console.error(error);
        }
    };

const fetchProducts=async()=>
{
    try {
        const res=await getProducts()
        if (res)
            dispatch(setProducts(res));
    } catch (error) {
        console.log(error);
    }
}


    useEffect(() => {
        getUserr();
        fetchProducts();
    }, []);

    return null; // This component doesn't render anything
}
