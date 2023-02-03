import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import routes, { Router } from "../../routes";

function CampaignNew() {
  const [minimum, setMinimun] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimum).send({
        from: accounts[0],
      });
      Router.push("/");
      
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <br />
      <Form onSubmit={onSubmit}>
        <Message
          error
          visible={!!error}
          header="Something went wrong  :("
          content={error}
        />
        <br />

        <Form.Field width={5}>
          <h3>Create a Campaign</h3>
          <br />
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimum}
            onChange={(e) => setMinimun(e.target.value)}
          />
        </Form.Field>
        <Button primary={true} loading={loading} disabled={loading}>
          Create
        </Button>
      </Form>
    </Layout>
  );
}

export default CampaignNew;
