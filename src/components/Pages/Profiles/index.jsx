import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'react-emotion';
import CheckBox from '../../UI/CheckBox';
// import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import DetailsCard from './DetailsCard';


const Container = styled('div')`
  padding: 25px;
  color: #ffffff;
  flex: 1;
`;

const DetailsRow = styled('div')`
  display: flex;

  > *:first-child {
    margin-left: 0;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

const Row = styled('div')`
  display: flex;
  margin-bottom: 15px;

  > * {
    flex: 1;
    margin: 0 10px;
  }
  
  > *:first-child {
    margin-left: 0;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

const CheckBoxRow = styled('div')`
  margin-bottom: 7px;
`;

const StyledCheckBox = styled(CheckBox)`
  background-color: ${props => props.theme.applicationBg};
  padding: 12px 0 12px 40px;
  flex: 1;
  display: block;
  border-radius: 5px;
`;

const Profiles = () => (
  <Container>
    Profiles
    <DetailsRow>
      <DetailsCard title="Shipping Imformation" titleIcon="map-o">
        <Row>
          <Input
            placeholder="Country"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="First Name"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Last Name"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Adress"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="City"
            value={null}
            onChange={() => null}
          />
          <Select
            options={[
              { key: 1, label: 'one' },
            ]}
          />
          <Input
            placeholder="Postal Code"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Phone Number"
            value={null}
            onChange={() => null}
          />
        </Row>
      </DetailsCard>
      <DetailsCard title="Billing Imformation" titleIcon="address-card-o">
        <CheckBoxRow>
          <StyledCheckBox
            label="Billing adress is the same as shipping"
            checked={false}
            onChange={() => null}
          />
        </CheckBoxRow>
        <Row>
          <Input
            placeholder="First Name"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Last Name"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Adress"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="City"
            value={null}
            onChange={() => null}
          />
          <Input
            placeholder="State"
            value={null}
            onChange={() => null}
          />
          <Input
            placeholder="Postal Code"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Phone Number"
            value={null}
            onChange={() => null}
          />
        </Row>
      </DetailsCard>
      <DetailsCard title="Payment Imformation" titleIcon="credit-card">
        <Row>
          <Input
            placeholder="Phone Number"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Input
            placeholder="Phone Number"
            value={null}
            onChange={() => null}
          />
        </Row>
      </DetailsCard>
    </DetailsRow>
  </Container>
);

export default Profiles;
