import React from "react";
import styled from "styled-components";

import PageContainer from "../../components/Content";
import MainPage from "../../components/Page";

const MerchandiseHeader = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 66px;
  color: #000000;
  margin-bottom: 12px;
`;

const MerchandiseSubheader = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 140.62%;
  color: #787878;
`;

const MerchandiseCard = styled.div`
  border: 0.5px solid #cbd4db;
  border-radius: 20px;
  padding: 30px;
`;

const MerchandiseThumbnail = styled.img`
  width: 100%;
  height: 263px;
  object-fit: contain;
  padding-top: 45px;
`;

const MerchandiseCost = styled.h1`
  margin-top: 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 140.62%;
  color: #1c1c1c;
`;

const MerchandiseVendor = styled.h1`
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 140.62%;
  color: #1c1c1c;
`;

const MerchandiseName = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140.62%;
  color: #1c1c1c;
`;

const OrderButton = styled.button`
  background: #4083f0;
  border: 1px solid #4083f0;
  box-sizing: border-box;
  border-radius: 5px;
  height: 42px;
  line-height: 42px;
  width: 100%;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 140.62%;

  margin-top: 24px;
  text-align: center;

  color: #ffffff;
`;

const MerchandiseItem = () => {
  return (
    <MerchandiseCard>
      <MerchandiseThumbnail src="sweatshirt.png" />
      <MerchandiseCost>$25.00</MerchandiseCost>
      <MerchandiseVendor>
        Rutgers University Cognitive Science Club{" "}
      </MerchandiseVendor>
      <MerchandiseName>Crewneck Sweatshirt</MerchandiseName>
      <OrderButton>Order</OrderButton>
    </MerchandiseCard>
  );
};

const MerchandiseItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 112px;
`;

const Merchandise = () => {
  return (
    <MainPage>
      <PageContainer>
        <MerchandiseHeader>Merchandise</MerchandiseHeader>
        <MerchandiseSubheader>Rated E for Everyone</MerchandiseSubheader>
        <MerchandiseItems>
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </MerchandiseItems>
      </PageContainer>
    </MainPage>
  );
};

export default Merchandise;
