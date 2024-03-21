import React, { useState } from "react";
import * as S from "./styles";

export const InputPrice = ({ register, name, error }) => {
  const [price, setPrice] = useState("");

  const handlePriceChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(rawValue.replace(/\D/g, "") / 100);
    setPrice(formattedValue);
  };

  return (
    <S.InputPrice>
      <span className="title">Preço</span>
      <S.Input
        {...register(name)}
        value={price}
        onChange={handlePriceChange}
        placeholder="0,00"
      />
      <S.errorMessageArea>
        {error && <p className="error">{error}</p>}
      </S.errorMessageArea>
    </S.InputPrice>
  );
};
