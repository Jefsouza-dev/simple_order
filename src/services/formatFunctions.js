export function formatCnpj(cnpj) {
  if (!cnpj) return "";

  const cleanedCnpj = cnpj.replace(/\D/g, "");
  return cleanedCnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}

export function formatName(name) {
  const words = name.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords.join(" ");
}

export function generateAcronym(name) {
  const words = name.split(" ");
  const firstInitial = words[0].charAt(0).toUpperCase();
  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();
  return firstInitial + lastInitial;
}

export function formatPhoneNumber(phoneNumber) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");

  const length = cleaned.length;

  if (length === 8) {
    return cleaned.replace(/(\d{4})(\d{4})/, "$1 - $2");
  } else if (length === 9) {
    return cleaned.replace(/(\d{5})(\d{4})/, "$1 - $2");
  } else if (length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2 - $3");
  }
}

export function formatZipCode(code) {
  const cleaned = ("" + code).replace(/\D/g, "");

  return cleaned.replace(/(\d{5})(\d{3})/, "$1-$2");
}

export const extractNumericValue = (value) => {
  const numericValue = value
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".");
  return parseFloat(numericValue);
};

export const formatToCurrency = (value) => {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
};
