import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Button from '../../UI/Button';
import Input from '../../UI/Input';


const Container = styled('div')`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
`;

const Column = styled('div')`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-right: 20px;
`;

const StyledButton = styled(Button)`
  flex-shrink: 0;
  margin-left: 5px;
`;

const ImportColumn = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-left: 20px;
`;

const ImportButton = styled(Button)`
  margin-left: auto;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ExportButton = styled(Button)`
  margin-left: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const SelectProfile = () => (
  <Container>
    <Column>
      <Input
        placeholder="Profile Name"
        value={null}
        onChange={() => null}
      />
      <StyledButton light secondary icon="check-circle-o">
        save
      </StyledButton>
    </Column>
    <Column>
      <Input
        placeholder="Load Profile"
        value={null}
        onChange={() => null}
      />
      <StyledButton light secondary icon="check-circle-o">
        load
      </StyledButton>
    </Column>
    <Column>
      <Input
        placeholder="Delete Profile"
        value={null}
        onChange={() => null}
      />
      <StyledButton light secondary icon="times-circle-o">
        delete
      </StyledButton>
    </Column>
    <ImportColumn>
      <ImportButton>
        import
      </ImportButton>
      <ExportButton>
        export
      </ExportButton>
    </ImportColumn>
  </Container>
);

SelectProfile.propTypes = {
  // title: PropTypes.string.isRequired,
};

export default SelectProfile;
