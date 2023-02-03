import React from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import { getCampaign } from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

function RequestIndex(props) {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRow = () => {
    return props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={props.address}
          approversCount={props.approversCount}
        />
      );
    });
  };

  return (
    <Layout>
      <h3>Pending Requests</h3>
      <Link route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button floated="right" style={{ marginBottom: 10 }} primary>
            Add Request
          </Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRow()}</Body>
      </Table>
      <div>Found {props.requestCount} requests.</div>
    </Layout>
  );
}

RequestIndex.getInitialProps = async (props) => {
  const address = props.query.address;
  const campaign = getCampaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  return { address, requests, requestCount, approversCount };
};

export default RequestIndex;
