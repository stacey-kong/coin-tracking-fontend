export enum coinAction {
  QUERY = "QUERY",
  MODIFY = "MODIFY",
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface coinInfo {
  type: coinAction;
  coin: string;
}

const api = `${process.env.BACKEND_API}/api/coin`;

export default async function coinService(Props: coinInfo) {
  const body = {
    abb: Props.coin,
  };
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

    // case coinAction.QUERY:
    //   return fetch(`${api}`, requestOptions)
    //     .then((data) => data.json())
    //     .then((data) => data.message.data);
  }
}
