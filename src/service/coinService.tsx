export enum coinAction {
  QUERY = "QUERY",
  MODIFY = "MODIFY",
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface coinInfo {
  type: coinAction;
  coin: string;
  name?: string;
}

const api = `${process.env.BACKEND_API}/api/coin`;

export default async function coinService(Props: coinInfo) {
  let body;
  switch (Props.type) {
    case coinAction.QUERY:
      body = {
        abb: Props.coin,
      };
      break;
    case coinAction.ADD:
      body = {
        name: Props.name,
        symbol: Props.coin,
      };
      break;
  }
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  switch (Props.type) {
    case coinAction.QUERY:
      return fetch(`${api}/price`, requestOptions)
        .then((data) => data.json())
        .then((data) => data.message.data);

    case coinAction.ADD:
      return fetch(`${api}/addCoin`, requestOptions)
        .then((data) => data.json())
        .then((data) => data.message.data);
  }
}
