export enum subscriptioAction {
  QUERY = "QUERY",
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface subscriptionInfo {
  type: subscriptioAction;
  coin?: string;
  userId: string;
}

const api = `${process.env.BACKEND_API}/api/subscription`;

export default async function subscriptioService(Props: subscriptionInfo) {
  const body = {
    userId: Props.userId,
    coin: Props.coin ?? "",
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  switch (Props.type) {
    case subscriptioAction.ADD:
      return fetch(`${api}/add`, requestOptions).then((data) => data.json());
    case subscriptioAction.DELETE:
      return fetch(`${api}/delete`, requestOptions).then((data) => data.json());
    case subscriptioAction.QUERY:
      return fetch(`${api}`, requestOptions).then((data) => data.json());
  }
}
