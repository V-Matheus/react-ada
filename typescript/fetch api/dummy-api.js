async function getUsers() {
  const response = await fetch('https://dummyapi.io/data/v1/user?created=1', {
    headers: {
      'app-id': '65f9d4931282eaa92d3ded5d',
    },
  });
  const users = await response.json();

  console.log(users.data);
}

getUsers();

async function getUser() {
  const resposta = await fetch('https://dummyapi.io/data/v1/user/65f9d754efbf2e426fdd3c47', {
      headers: {
        'app-id': '65f9d4931282eaa92d3ded5d',
      },
    });

    const user = await resposta.json();

    console.log(user);
}

getUser()

async function createUser() {
  const userData = {
    "firstName": 'Jorge',
    "lastName": 'Lima',
    "email": 'JorgeLima@gmail.com'
  };

  try {
    await fetch('https://dummyapi.io/data/v1/user/create', {
      method: 'POST',
      headers: {
        'app-id': '65f9d4931282eaa92d3ded5d',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  } catch (err) {
    console.log(err);
  }
}

// createUser()