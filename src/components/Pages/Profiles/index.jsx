import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Title from './Title';
import CheckBox from '../../UI/CheckBox';
// import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import DetailsCard from './DetailsCard';
import SelectProfile from './SelectProfile';
import StatusBar from './StatusBar';


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

const HalfRow = styled(Row)`
  width: 50%;
`;

const PostalCode = styled(Input)`
  width: 100px;
`;

const CheckBoxRow = styled('div')`
  margin-bottom: 7px;
`;

const StyledCheckBox = styled(CheckBox)`
  background-color: ${props => props.theme.applicationBg};
  padding: 12px 0 12px 25px;
  flex: 1;
  display: block;
  border-radius: 5px;
`;

const Profiles = () => (
  <Container>
    <Title icon="user-o">
      Profile Management
    </Title>
    <SelectProfile />
    <StatusBar />
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
            title="State"
            onChange={() => null}
            options={[
              { key: 1, label: 'one' },
              { key: 2, label: 'some long name blah blah blah' },
            ]}
          />
          <PostalCode
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
          <Select
            title="State"
            onChange={() => null}
            options={[
              { key: 1, label: 'one' },
              { key: 2, label: 'some long name blah blah blah' },
            ]}
          />
          <PostalCode
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
        <HalfRow>
          <Select
            title="Card Type"
            onChange={() => null}
            options={[
              { key: 'Visa', label: 'Visa' },
            ]}
          />
        </HalfRow>
        <Row>
          <Input
            placeholder="Card Number"
            value={null}
            onChange={() => null}
          />
        </Row>
        <Row>
          <Select
            title="Month"
            onChange={() => null}
            options={[
              { key: 1, label: '1' },
              { key: 2, label: '2' },
            ]}
          />
          <Select
            title="Year"
            onChange={() => null}
            options={[
              { key: 2018, label: '2018' },
              { key: 2019, label: '2019' },
            ]}
          />
        </Row>
        <HalfRow>
          <Input
            placeholder="CVV"
            value={null}
            onChange={() => null}
          />
        </HalfRow>
      </DetailsCard>
    </DetailsRow>
  </Container>
);

export default Profiles;
