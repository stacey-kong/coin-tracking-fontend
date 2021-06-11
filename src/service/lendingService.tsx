export enum lendingAction {
  QUERY = "QUERY",
  MODIFY = "MOdify",
}

export enum Timezone {
  LOCAL = "local",
  UTC = "UTC",
}

export interface lendingInfo {
  type: lendingAction;
  coin: string;
  userId: string;
  zoneType: Timezone;
}

const api = `${process.env.BACKEND_API}/api/lending`;

export default async function subscriptioService(Props: lendingInfo) {
  const body = {
    userId: Props.userId,
    coin: Props.coin,
    zoneType: Props.zoneType,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  switch (Props.type) {
    case lendingAction.MODIFY:
      return fetch(`${api}/amount`, requestOptions).then((data) => data.json());
    case lendingAction.QUERY:
      return fetch(`${api}`, requestOptions)
        .then((data) => data.json())
        .then((data) => data.message.data);
  }
}
