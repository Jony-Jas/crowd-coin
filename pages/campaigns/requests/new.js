import React from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { getCampaign } from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";

function RequestNew(props) {
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [recipient, setRecipient] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const campaign = getCampaign(props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      Router.pushRoute(`/campaigns/${props.address}/requests`);
    } catch (error) {
      setMessage(error.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <Link route={`/campaigns/${props.address}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit} error={!!message}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Value in Ether</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={message} />
        <Button primary loading={loading} disabled={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}

RequestNew.getInitialProps = (props) => {
  const { address } = props.query;
  return { address };
};

export default RequestNew;
