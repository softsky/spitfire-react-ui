import React from 'react';
import styled, { css } from 'react-emotion';
import Button from '../../UI/Button';

const Title = styled('p')`
  font-family: 'MontserratSemiBold';
  font-size: 16.5px;
  color: #ffffff;
  text-align: left;
`;

const ActionList = styled('div')`
  display: flex;
  margin-bottom: 35px;
  font-size: 10px;
  
  > * {
    margin-right: 5px;
  }
`;

const importCss = css`
  margin-left: auto;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const exportCss = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const GlobalActions = () => (
  <div>
    <Title>Global Actions</Title>
    <ActionList>
      <Button primary icon="play-circle">
        start all
      </Button>
      <Button light secondary icon="stop-circle">
        stop all
      </Button>
      <Button light secondary>
        delete all
      </Button>
      <Button light secondary>
        restart all
      </Button>
      <Button secondary className={importCss}>
        import
      </Button>
      <Button secondary className={exportCss}>
        export
      </Button>
    </ActionList>
  </div>
);

export default GlobalActions;
