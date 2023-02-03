import React, { useEffect } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "../components/Layout";

function CampaignIndex({ campaigns }) {
  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <div>
        <h3>Open Campaingns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button
              floated="right"
              content="Create Campaign"
              icon="add"
              labelPosition="right"
              primary
            />
          </a>
        </Link>

        {renderCampaigns()}
      </div>
    </Layout>
  );
}

CampaignIndex.getInitialProps = async (state) => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  // console.log(campaigns);
  return { campaigns: campaigns };
};

export default CampaignIndex;
