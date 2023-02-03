import React from "react";
import { Button, Table } from "semantic-ui-react";
import { getCampaign } from "../ethereum/campaign";
import web3 from "../ethereum/web3";

function RequestRow({ id, request, approversCount, address }) {
  const { Row, Cell } = Table;

  const onApprove = async () => {
    const campaign = await getCampaign(address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(id).send({ from: accounts[0] });
  };

  const onFinalize = async () => {
    const campaign = await getCampaign(address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(id).send({ from: accounts[0] });
  };

  const readyToFinalize = request.approvalCount > approversCount / 2;

  return (
    <Row
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <Cell>{id + 1}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalCount}/{approversCount}
      </Cell>
      <Cell>
        <Button
          color="green"
          basic
          disabled={request.complete}
          onClick={onApprove}
        >
          Approve
        </Button>
      </Cell>
      <Cell>
        <Button
          color="teal"
          basic
          disabled={request.complete}
          onClick={onFinalize}
        >
          Finalize
        </Button>
      </Cell>
    </Row>
  );
}

export default RequestRow;
