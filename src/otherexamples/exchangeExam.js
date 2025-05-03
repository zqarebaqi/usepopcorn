// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";
export default function App() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convertCurrency() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${toCurrency}`
        );
        const data = await res.json();
        setConverted(data.rates[toCurrency]);
        console.log(data);
        setIsLoading(false);
      }

      if (currency === toCurrency) return setConverted(amount);
      convertCurrency();
    },
    [amount, currency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted}
        {toCurrency}
      </p>
    </div>
  );
}

//https://codesandbox.io/p/sandbox/react-challenge-currency-converter-starter-forked-jh5jfj?file=%2Fsrc%2FApp.js%3A1%2C1-66%2C1
