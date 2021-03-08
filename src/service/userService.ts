interface Credentials {
  username: string;
  password: string;
}

export const userService ={
register,
login
};

const api ="http://localhost:9010/api/auth"


function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user")!);

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

async function login(Props: Credentials) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Props)
};
    return fetch(`${api}login`, requestOptions
    ).then((data) => data.json());
  }

async function register(Props: Credentials) {
    const requestOptions ={
    method:"POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(Props),    
    }
  return fetch(`${api}/register`, requestOptions).then((data) => data.json());
}
