import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setAmount] = useState(0);

    const onChangeAmount = (event) => {
        setAmount(event.target.value);
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <select>
                        {coins.map((coin) => {
                            return (
                                <option
                                    key={coin.id}
                                    value={coin.quotes.USD.price}
                                >
                                    {coin.name} ({coin.symbol}: $
                                    {coin.quotes.USD.price} USD) /{" "}
                                    {amount / coin.quotes.USD.price}{" "}
                                    {coin.symbol}
                                </option>
                            );
                        })}
                    </select>
                    <input
                        value={amount}
                        onChange={onChangeAmount}
                        type="number"
                        placeholder="Convert USD($) to Coin"
                    />
                </div>
            )}
        </div>
    );
}

export default App;
