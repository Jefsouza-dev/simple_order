import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { notifySuccess } from "../../../../../animation/ToastSucess";
import * as S from "./styles";
import uploadImage from "../../../../../assets/uploadImage.svg";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";
import { Input } from "../../../../../components/Input";
import { InputPrice } from "./InputPrice";
import { ProductsContext } from "../../../../../contexts/ProductsContext";
import { productsValidationSchema } from "../../../../../validations/productsValidation";
import { v4 as randomId } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewProductModal = ({ closeModal }) => {
  const { products, setProducts } = useContext(ProductsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productsValidationSchema),
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleProductImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setSelectedImage(image);
    }
  };

  const onSubmit = (data) => {
    // if (!selectedImage) {
    //   alert("Você deve enviar uma imagem do produto");
    //   return;
    // }

    // const reader = new FileReader();
    // reader.readAsDataURL(selectedImage);
    // reader.onload = () => {
    const productInfo = {
      id: randomId(),
      name: data.name,
      price: data.price,
      description: data.description,
      // image: reader.result,
    };

    const currentProducts = [...products, productInfo];

    setProducts(currentProducts);

    localStorage.setItem("@products", JSON.stringify(currentProducts));

    notifySuccess("Produto cadastrado com sucesso");

    setTimeout(() => {
      closeModal();
    }, 1500);
    // };
  };

  return (
    <ModalAnimation>
      <ToastContainer />
      <S.ModalContent>
        <ModalHeader title="Cadastrar produto" closeModal={closeModal} />

        <ModalSeparator />

        <S.inputArea>
          <div className="defaultInput">
            <Input
              title="Nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <InputPrice
              register={register}
              name="price"
              error={errors.price?.message}
            />
          </div>

          <div className="biggerInputs">
            <span className="inputLabel">Descrição</span>
            <S.DescriptionInput
              {...register("description")}
              name="description"
            />

            <S.errorMessageArea>
              {errors.description && (
                <p className="error">{errors.description.message}</p>
              )}
            </S.errorMessageArea>

            <span className="inputLabel">Foto do produto</span>
            <S.UploadPhotoArea>
              <S.UploadPhotoButton>
                <input
                  className="input"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleProductImage}
                />
                {!selectedImage && (
                  <img className="buttonICon" src={uploadImage} />
                )}
                <span className="buttonTitle">
                  {selectedImage
                    ? "Imagem Selecionada"
                    : "Faça o upload da foto"}
                </span>
              </S.UploadPhotoButton>

              <span className="warning">JPG e PNG, somente</span>
            </S.UploadPhotoArea>
          </div>
        </S.inputArea>

        <ModalSeparator />

        <S.ButtonContainer>
          <ModalButton submit={handleSubmit(onSubmit)} />
        </S.ButtonContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
