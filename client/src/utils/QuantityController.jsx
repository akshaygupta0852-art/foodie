function QuantityController({ quantity, increase, decrease }) {
    return (
        <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300 bg-white">
            <button
                type="button"
                onClick={decrease}
                className="flex cursor-pointer h-8 w-8 items-center justify-center text-lg text-gray-700 hover:bg-gray-100"
            >
                −
            </button>

            <span className="flex h-8 w-8 items-center justify-center text-sm font-medium">
                {quantity}
            </span>

            <button
                type="button"
                onClick={increase}
                className="flex cursor-pointer h-8 w-8 items-center justify-center text-lg text-gray-700 hover:bg-gray-100"
            >
                +
            </button>
        </div>
    );
}

export default QuantityController;