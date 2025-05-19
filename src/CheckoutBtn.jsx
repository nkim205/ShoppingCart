import { Link, useNavigate } from "react-router-dom";


const CheckoutBtn = ({numitem}) => {


    let navigate = useNavigate();
    const handleCheckoutRedirect = () => {
        let newpath = "/checkout";
        navigate(newpath);
    }
    return(
        <div className="flex flex-col gap-[5px]">
            <button onClick={handleCheckoutRedirect}>
                {numitem}
            </button>
            <p>Click me to checkout</p>
        </div>
    )
}

export default CheckoutBtn;