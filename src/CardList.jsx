import GetProds from "./api";
import Card from "./Card";
import {useState, useEffect} from 'react';

const CreateCardList = ({addFn}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await GetProds();
                setProducts(data);
            } catch (err) {
                console.error("Failed to get products:", err)
            }
        };
        getProducts();
    }, []);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-max">
            {products.map((product) => (
                <Card key={product.id} product={product} addFn={addFn}></Card>
            ))}
        </div>
    )
}

export default CreateCardList;