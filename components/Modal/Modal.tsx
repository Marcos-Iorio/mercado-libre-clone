import { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { useRef } from "react";

import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
  show: boolean;
};

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const BackDrop: FC<Props> = ({ children, show }) => {
  return (
    <div
      className={
        show
          ? "w-full h-full bg-black/50 z-50 fixed grid place-content-center"
          : "hidden"
      }
    >
      {children}
    </div>
  );
};

const Modal = (props: ModalProps) => {
  const animationTiming = {
    enter: 300,
    exit: 500,
  };

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: styles.ModalOpen,
        exit: "",
        exitActive: styles.ModalClosed,
      }}
    >
      <BackDrop show={props.show}>
        <div className={styles.Modal}>
          <div className="w-full p-10 flex flex-col gap-8">
            <h1 className="text-red-500 font-bold text-3xl text-center">
              Sitio NO Oficial.
            </h1>
            <p className="text-xl">
              Este sitio NO es oficial. Es una fiel copia ESTÉTICA de Mercado
              Libre, la intención del sitio no es estafar. Se realizó en pos de
              practicar programación y hacer una interfaz compleja. El sitio no
              tiene funcionalidad alguna, solo se pueden explorar y ver
              productos. Si quiere ir al sitio oficial porfavor haga click{" "}
              <a
                href="https://www.mercadolibre.com.ar/"
                className="text-[#3483FA]"
              >
                AQUÍ
              </a>
            </p>
          </div>
          <button
            type="button"
            className="w-32 block m-auto font-md font-medium rounded-md py-3 text-white bg-[#3483FA] hover:bg-[#2D74DE] transition-all delay-300 ease-in"
            onClick={props.onClose}
          >
            Aceptar
          </button>
        </div>
      </BackDrop>
    </CSSTransition>
  );
};

export default Modal;
