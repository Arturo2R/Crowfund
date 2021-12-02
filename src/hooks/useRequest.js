import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const APIURL = "https://graphql.apirocket.io";
let APITOKEN =
  "ngANb_yuPoqyWg2fXfr76vp0nKHOoUDSqRmCEt-2bmE6bIBkH5XR9L1t6iFzEkXJ";

const graphqlQLClient = new GraphQLClient(APIURL, {
  headers: {
    Authorization: `Bearer ${APITOKEN}`,
    "Content-Type": "application/json",
  },
});

export function useGetRewards() {
  return useQuery("get-rewards", async () => {
    const { AllRewards } = await graphqlQLClient.request(gql`
      query getRewards {
        AllRewards(orderBy: MINIMUNPLEDGE_ASC) {
          name
          quantityLeft
          id
          description
          agotado
          minimunPledge
        }
      }
    `);

    return AllRewards;
  });
}

export function useGetStatistics() {
  function totalMoney(datazo) {
    let valueInBeginning = 0;
    let laData = datazo.reduce(
      (acumVariable, curValue) => acumVariable + curValue.quantity,
      valueInBeginning
    );
    return laData;
  }
  return useQuery("get-statistics", async () => {
    const { AllTotalMoneyBackeds } = await graphqlQLClient.request(gql`
      query getStatistics {
        AllTotalMoneyBackeds {
          quantity
        }
      }
    `);

    const Money = {
      list: [...AllTotalMoneyBackeds],
      total: totalMoney(AllTotalMoneyBackeds),
      backedObjective: 100000,
      Progress: function () {
        return Math.floor((this.total / this.backedObjective) * 100);
      },
      AddMoney: function () {
        this.list.push({ quantity: this.MoneytoAdd });
      },
      MoneytoAdd: 0,
    };

    console.log(Money);
    return Money;
  });
}
