import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./style";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp} value="100" />
      <ResumeItem title="saidas" Icon={FaRegArrowAltCircleDown} value="100" />
      <ResumeItem title="total" Icon={FaDollarSign} value="100" />
    </C.Container>
  );
};
export default Resume;
