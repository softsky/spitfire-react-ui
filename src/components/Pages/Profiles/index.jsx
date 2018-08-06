import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'react-emotion';
// import CheckBox from '../../UI/CheckBox';
// import Button from '../../UI/Button';
import Input from '../../UI/Input';
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

const Profiles = () => (
  <Container>
    Profiles
    <DetailsRow>
      <DetailsCard title="Shipping Imformation" titleIcon="map-o">
        <Input
          placeholder="URL/SKU"
          value={null}
          onChange={() => null}
        />
      </DetailsCard>
      <DetailsCard title="Billing Imformation" titleIcon="address-card-o">
        <Input
          placeholder="URL/SKU"
          value={null}
          onChange={() => null}
        />
      </DetailsCard>
      <DetailsCard title="Payment Imformation" titleIcon="credit-card">
        <Input
          placeholder="URL/SKU"
          value={null}
          onChange={() => null}
        />
      </DetailsCard>
    </DetailsRow>
  </Container>
);

export default Profiles;
