import { motion } from "framer-motion";
import * as S from "./styles";

export const ModalAnimation = ({ children }) => {
  return (
    <S.Container>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </S.Container>
  );
};
