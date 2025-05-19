import {useState} from 'react'

const Card = ({product, addFn}) => {

    const [inputVal, SetInputVal] = useState("0");

    const handleSubmit = () => {
        console.log("adding " + Number(inputVal));
        addFn(Number(inputVal));
        SetInputVal("0");
    }

    const minusone = () => {
        let curr = Number(inputVal);
        if(curr <= 0){
            return;
        }
        SetInputVal(prev => String(Number(prev) - 1));
    }

    const addone = () => {
        SetInputVal(prev => String(Number(prev) + 1));
    }
    return (
        <div key={product.id} className="border p-4 relative flex flex-col gap-2">
            <img src={product.image} alt={product.title} className="h-36 mx-auto"></img>
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-500 pb-8">${product.price}</p>

            <div className="flex flex-row justify-between absolute bottom-0 left-0 w-[100%] pb-2 pr-4 pl-4 align-middle">
                <div className="flex flex-row w-[50%] gap-2">
                    <button onClick={minusone}>-</button>
                    <label className="w-[50%] border-1 flex flex-col justify-center">
                        <input className="w-[100%] text-center" type="numbers" name="items" value={inputVal}
                            onChange={(e) => SetInputVal(e.target.value)}/>
                    </label>
                    <button onClick={addone}>+</button>
                </div>

                <button className="border-1 bg-gray-200 w-[30%]" onClick={handleSubmit}>
                    Add now
                </button>
            </div>
        </div>
    )
}

export default Card;