import React from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import { getCampaign } from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

function ContributeForm({ address }) {
  const [value, setValue] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setError("");
    const campaign = getCampaign(address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      Router.replaceRoute(`/campaigns/${address}`);
    } catch (error) {
      setError(error.message);
    }
    setValue("");
    setloading(false);
  };

  return (
    <Form onSubmit={onSubmit} error={!!error}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Field>
      <Message error header="Oops!" content={error}></Message>
      <Button primary loading={loading} disabled={loading}>
        Contribute!
      </Button>
    </Form>
  );
}

export default ContributeForm;
