import Inputform from "../Components/Inputform";
import ListForm from "../Components/ListForm";

import css from "./Styled.css";

const { MainPages, } = css;

function Main() {
  return (
    <>
      <MainPages>
        <Inputform />
        <ListForm />
      </MainPages>
    </>
  );
}

export default Main;
