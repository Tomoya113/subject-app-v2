import React, { FC } from 'react';
import styled from 'styled-components';
import { Modal as MuiModal } from '@material-ui/core';

export interface ModalProps {
  open: boolean;
  handleClose?(): void;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  return (
    <ModalContainer open={props.open} onClose={props.handleClose}>
      <Content></Content>
    </ModalContainer>
  );
};

const Content = styled.div`
  position: absolute;
  height: 100%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled(MuiModal)`
  position: relative;
  width: 100%;
  height: 100%;
`;
export default Modal;
