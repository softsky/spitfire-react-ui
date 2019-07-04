import React from 'react';
import styled from 'react-emotion';
import FontAwesome from 'react-fontawesome';


const Container = styled('div')`
  display: flex;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const COMPLETED_COLOR = '#595F78';
const NOT_COMPLETED_COLOR = '#2a2d3b';

const getBorderColor = ({ completed }) => (
  completed
    ? COMPLETED_COLOR
    : NOT_COMPLETED_COLOR
);

const getBgColor = ({ completed, theme }) => (
  completed
    ? theme.applicationBg
    : NOT_COMPLETED_COLOR
);

const getIconColor = ({ completed, theme }) => (
  completed
    ? COMPLETED_COLOR
    : theme.applicationBg
);

const Status = styled('div')`
  flex: 1;
  border-bottom: 2px solid ${getBorderColor};
`;

const IconContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: calc(50% - 20px);
  top: 20px;
  border: 2px solid ${getBorderColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${getBgColor};
`;

const Icon = styled(FontAwesome)`
  font-size: 22px;
  color: ${getIconColor};
`;

const StatusBar = () => (
  <Container>
    <Status completed>
      <IconContainer completed>
        <Icon name="check" completed />
      </IconContainer>
    </Status>
    <Status>
      <IconContainer>
        <Icon name="info" />
      </IconContainer>
    </Status>
    <Status>
      <IconContainer>
        <Icon name="check" />
      </IconContainer>
    </Status>
  </Container>
);

export default StatusBar;
