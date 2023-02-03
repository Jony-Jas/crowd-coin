import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xD39b23490A385E5DfE7CBcd0C4f3b9380Ed40318"
);

export default instance;
