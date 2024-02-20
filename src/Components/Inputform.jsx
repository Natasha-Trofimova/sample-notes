import InputButton from "./ForIput/InputButton";
import InputText from "./ForIput/InputText";

import css from "./Styled.css";

const { FormFoInputCSS } = css;
function Inputform() {
  return (
    <>
      <FormFoInputCSS>
        Записать заметку
        <InputText />
        <InputButton/>
      </FormFoInputCSS>
    </>
  );
}

export default Inputform;
