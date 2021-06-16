export enum lendingAction {
  QUERY = "QUERY",
  REPORT = "REPORT",
  MODIFY = "MODIFY",
}

export enum Timezone {
  LOCAL = "local",
  UTC = "UTC",
}

export interface lendingInfo {
  type: lendingAction;
  coin: string;
  userId: string;
  amount?: number;
  zoneType?: Timezone;
  timestamp?: number;
}

const api = `${process.env.BACKEND_API}/api/lending`;

export default async function lendingService(Props: lendingInfo) {
  let body;
  switch (Props.type) {
    case lendingAction.QUERY:
      body = {
        userId: Props.userId,
        coin: Props.coin,
        zoneType: Props.zoneType,
      };
      break;
    case lendingAction.REPORT:
      body = {
        userId: Props.userId,
        coin: Props.coin,
        timestamp: Props.timestamp,
      };
      break;
    case lendingAction.MODIFY:
      body = {
        userId: Props.userId,
        coin: Props.coin,
        amount: Props.amount,
      };
      break;
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  switch (Props.type) {
    case lendingAction.MODIFY:
      return fetch(`${api}/amount`, requestOptions)
        .then((data) => data.json())
        .then((data) => data.message.data);
    case lendingAction.REPORT:
      return fetch(`${api}/report`, requestOptions)
        .then((data) => data.json())
        .then((data) => data.message.data);
    case lendingAction.QUERY:
      return fetch(`${api}`, requestOptions)
        .then((data) => data.json())
        .then((data) => data.message.data);
  }
}
