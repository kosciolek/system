import styled from "styled-components";
import { useBool } from "../../hooks/useBool.js";

export interface CheckboxProps {
  initial?: boolean;
}

export const Checkbox = ({ initial = false }: CheckboxProps) => {
  const { value, toggle } = useBool(initial);
  return (
    <Root>
      <Input type="checkbox" onClick={toggle} checked={value} />
    </Root>
  );
};

export const Root = styled.div``;
export const Input = styled.input``;
