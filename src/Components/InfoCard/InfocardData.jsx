import { Link } from "react-router-dom";

const infromationPageData = [
    {
        title: "Buying",
        description: <p> You can buy $TIKI from PancakeSwap <Link to="#" className=" " style={{color:"#7E3AF2"}} >HERE</Link>, and when you buy tokens for the first time, you become eligible to receive automatic BNB rewards for holding
        </p>,
        background: "--sitebar-color",
    },
    {
        title: "Harvesting",
        description: <p> Every time someone buys or sells $TIKI, the protocol swaps 10% of the tokens they bought (or 12% on sells) for BNB and adds it to the automatic rewards pool
        </p>,
        background: "--background1",
    },
    {
        title: "Earning",
        description: <p> Your earnings are calculated based on all the transactions that occured after you bought your tokens
        </p>,
        background: "--background1",
    },
    {
        title: "Payouts",
        description: <p> Every 1 hour, you are automatically paid BNB in proportion to the size of your holdings relative to the supply
        </p>,
        background: "--sitebar-color",
    },
    {
        title: "Rolling Payouts",
        description: <p> Every time someone buys or sells, the contract is called. When this transaction is processed, the contract is also looking at the holders list and checking if anyone needs to be paid. If someone is awaiting payment, the contract will send them their BNB rewards during this transaction
        </p>,
        background: "--sitebar-color",
    },
    {
        title: "Fully Automated",
        description: <p> This system is fully automated and adds minimal gas fees proportional to value transferred. The number of holders processed through each transaction is dynamic and based on transaction size. Holders will receive dividends from the queue based on their position in the array
        </p>,
        background: "--background1",
    },
];

export {infromationPageData}