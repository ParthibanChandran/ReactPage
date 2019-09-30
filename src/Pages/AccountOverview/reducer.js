import { fromJS } from "immutable";

const initialState = fromJS({
  Amount : "$120,000",
  PortfolioValues : [
    {
      Title : "Money Market",
      Nav : "$10.02",
      Units : "9,530.440",
      Market_value : "$95,495.01"
   }
  ],
  FeatureData : [
    {
      title: "Learn how to value your contributions",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali."
    },
    {
      title: "Learn how to value your contributions",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali."
    }
  ],
  Dashboard: [
    {
      Gift_id : 4436109,
      Describe : "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.",
      Entered_date : "10/4/2019",
      Received_date : "10/4/2019",
      Number_of_shares : 50,
      Type: "VBS Security",
      Amount: "$50,000.00",
      Status : "Entered",
    }
  ],
});
const func = (state = initialState) => {
  return state;
};
export default func;

