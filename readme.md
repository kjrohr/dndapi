# Factions, Guilds and Players API

## Developers
### Please run the following
``` javascript

npm install
npm install mocha -g

```

### To run the server
``` javascript

node src/server.js

```

### To run unit tests
``` javascript

mocha

```

## Deployment

### Add a new remote

``` javascript

git add remote digitalOcean ssh://karl@162.243.77.113/var/repos/dndapi.git

```

### Check If You Have the remote of digitalOcean

``` javascript

git remote -v

```

### Push to the Server

``` javascript

git push digitalOcean master

```
It will prompt you for your password, please enter it.

### Log in to Your Server

``` javascript

ssh karl@162.243.77.113

```
It will prompt for your password, please enter it.

### Go to /var/www/html

``` javascript

cd /var/www/html

```

### List the Contents of the Directory

``` javascript

ll

```

### Make sure the server is running

``` javascript

pm2 start src/server.js

```

## End Points

### POST /api/v1/players
Create a player

``` javascript
{
  name: "Lyél",
  faction: "Horde",
  race: "Forsaken",
  class: "Priest",
  level: 100,
  guildID: 1,
  factionId: 1
}

```

### GET /api/v1/players
Read all players

``` javascript

[
  {
    id: 1,
    name: "Lyel",
    race: "Forsaken",
    class: "Priest",
    level: 100,
    createdAt: "2016-08-16T18:07:30.000Z",
    updatedAt: "2016-08-16T18:07:30.000Z",
    guildID: 1,
    factionId: 1
  },
  {
    id: 2,
    name: "Hansgar",
    race: "Orc",
    class: "Warrior",
    level: 100,
    createdAt: "2016-08-16T18:08:00.000Z",
    updatedAt: "2016-08-16T18:08:00.000Z",
    guildID: 1,
    factionId: 1
  },
  {
    id: 3,
    name: "Joker",
    race: "Human",
    class: "Death Knight",
    level: 100,
    createdAt: "2016-08-16T18:08:17.000Z",
    updatedAt: "2016-08-16T18:08:17.000Z",
    guildID: 2,
    factionId: 2
  },
  {
    id: 4,
    name: "Blaze",
    race: "Dwarf",
    class: "Shaman",
    level: 100,
    createdAt: "2016-08-16T18:08:30.000Z",
    updatedAt: "2016-08-16T18:08:30.000Z",
    guildID: 2,
    factionId: 2
  }
]

```

### GET /api/v1/players/:id
Read one player by id

``` javascript

{
  id: 1,
  name: "Lyel",
  race: "Forsaken",
  class: "Priest",
  level: 100,
  createdAt: "2016-08-16T18:07:30.000Z",
  updatedAt: "2016-08-16T18:07:30.000Z",
  guildID: 1,
  factionId: 1
}

```

### POST /api/v1/players/:id
Update a player

``` javascript

{
  id: 1,
  name: "Lyel",
  faction: "Alliance",
  race: "Human",
  class: "Priest",
  level: 100,
  createdAt: "2016-08-11T23:24:19.000Z",
  updatedAt: "2016-08-11T23:43:24.000Z",
  guildID: 4,
  factionId, 2
}

```

### DELETE /api/v1/players/:id
Delete a player

``` javascript
1

```

### POST /api/v1/guilds/
Create an guild

``` javascript

{
  name: "Latency",
  description: "PVE, Normal and Heroic Raiding",
}

```

### GET /api/v1/guilds/
Read all guilds

``` javascript

[
  {
    id: 1,
    name: "Latency",
    description: "Normal and Heroic Raiding",
    createdAt: "2016-08-16T18:05:41.000Z",
    updatedAt: "2016-08-16T18:05:56.000Z",
    factionId: 1
  },
  {
    id: 2,
    name: "Anemnesis",
    description: "Normal and Heroic Raiding",
    createdAt: "2016-08-16T18:06:11.000Z",
    updatedAt: "2016-08-16T18:06:11.000Z",
    factionId: 2
  }
]

```

### GET /api/v1/guilds/:id
Read on guild by id

``` javascript

{
  id: 1,
  name: "Latency",
  description: "Normal and Heroic Raiding",
  createdAt: "2016-08-16T18:05:41.000Z",
  updatedAt: "2016-08-16T18:05:56.000Z",
  factionId: 1,
  players: [
    {
      id: 1,
      name: "Lyel",
      race: "Forsaken",
      class: "Priest",
      level: 100,
      createdAt: "2016-08-16T18:07:30.000Z",
      updatedAt: "2016-08-16T18:07:30.000Z",
      guildID: 1,
      factionId: 1
    },
    {
      id: 2,
      name: "Hansgar",
      race: "Orc",
      class: "Warrior",
      level: 100,
      createdAt: "2016-08-16T18:08:00.000Z",
      updatedAt: "2016-08-16T18:08:00.000Z",
      guildID: 1,
      factionId: 1  
    }
  ]
}

```

### GET /api/v1/guilds/:id/players
Show all the players for a specific guild

``` javascript

{
  id: 1,
  name: "Latency",
  description: "Normal and Heroic Raiding",
  createdAt: "2016-08-16T18:05:41.000Z",
  updatedAt: "2016-08-16T18:05:56.000Z",
  factionId: 1,
  players: [
    {
      id: 1,
      name: "Lyel",
      race: "Forsaken",
      class: "Priest",
      level: 100,
      createdAt: "2016-08-16T18:07:30.000Z",
      updatedAt: "2016-08-16T18:07:30.000Z",
      guildID: 1,
      factionId: 1
    },
    {
      id: 2,
      name: "Hansgar",
      race: "Orc",
      class: "Warrior",
      level: 100,
      createdAt: "2016-08-16T18:08:00.000Z",
      updatedAt: "2016-08-16T18:08:00.000Z",
      guildID: 1,
      factionId: 1
    }
  ]
}

```

### POST /api/v1/guilds/:id
Update an guild

``` javascript

{
  id: 3,
  name: "Unbroken",
  description: "Casual Raiding",
  factionId: 1
}

```

### DELETE /api/v1/guilds/:id
Delete an guild

``` javascript

  1

```

### POST /api/v1/factions
Create a faction

``` javascript

{
  name: "Alliance"
}

```

### GET /api/v1/factions
Reads all factions

``` javascript

[
  {
    id: 1,
    name: "Horde",
    createdAt: "2016-08-16T18:05:14.000Z",
    updatedAt: "2016-08-16T18:05:14.000Z"
  },
  {
    id: 2,
    name: "Alliance",
    createdAt: "2016-08-16T18:05:20.000Z",
    updatedAt: "2016-08-16T18:05:20.000Z"
  }
]

```

### GET /api/v1/factions/:id
Reads one faction by id

``` javascript

{
  id: 1,
  name: "Horde",
  createdAt: "2016-08-16T18:05:14.000Z",
  updatedAt: "2016-08-16T18:05:14.000Z",
  guilds: [
    {
      id: 1,
      name: "Latency",
      description: "Normal and Heroic Raiding",
      createdAt: "2016-08-16T18:05:41.000Z",
      updatedAt: "2016-08-16T18:05:56.000Z",
      factionId: 1,
      players: [
        {
          id: 1,
          name: "Lyel",
          race: "Forsaken",
          class: "Priest",
          level: 100,
          createdAt: "2016-08-16T18:07:30.000Z",
          updatedAt: "2016-08-16T18:07:30.000Z",
          guildID: 1,
          factionId: 1
        },
        {
          id: 2,
          name: "Hansgar",
          race: "Orc",
          class: "Warrior",
          level: 100,
          createdAt: "2016-08-16T18:08:00.000Z",
          updatedAt: "2016-08-16T18:08:00.000Z",
          guildID: 1,
          factionId: 1
        }
      ]
    }
  ],
players: [
  {
    id: 1,
    name: "Lyel",
    race: "Forsaken",
    class: "Priest",
    level: 100,
    createdAt: "2016-08-16T18:07:30.000Z",
    updatedAt: "2016-08-16T18:07:30.000Z",
    guildID: 1,
    factionId: 1
  },
  {
    id: 2,
    name: "Hansgar",
    race: "Orc",
    class: "Warrior",
    level: 100,
    createdAt: "2016-08-16T18:08:00.000Z",
    updatedAt: "2016-08-16T18:08:00.000Z",
    guildID: 1,
    factionId: 1
  }
  ]
}

```

### POST /api/v1/factions/:id
Update a factions

``` javascript

{
  name: "The Horde"
}

```

### DELETE /api/v1/factions/:id
Delete a faction

``` javascript

1

```

### GET /api/v1/factions/:id/guilds
Reads the guilds of a faction, and shows the players of those guilds

``` javascript

[
  {
    id: 1,
    name: "Latency",
    description: "Normal and Heroic Raiding",
    createdAt: "2016-08-16T18:05:41.000Z",
    updatedAt: "2016-08-16T18:05:56.000Z",
    factionId: 1,
    players: [
      {
        id: 1,
        name: "Lyel",
        race: "Forsaken",
        class: "Priest",
        level: 100,
        createdAt: "2016-08-16T18:07:30.000Z",
        updatedAt: "2016-08-16T18:07:30.000Z",
        guildID: 1,
        factionId: 1
      },
      {
        id: 2,
        name: "Hansgar",
        race: "Orc",
        class: "Warrior",
        level: 100,
        createdAt: "2016-08-16T18:08:00.000Z",
        updatedAt: "2016-08-16T18:08:00.000Z",
        guildID: 1,
        factionId: 1
      }
    ]
  }
]

```

### GET /api/v1/factions/:id/players
Reads the players of a faction

``` javascript

[
  {
    id: 1,
    name: "Lyel",
    race: "Forsaken",
    class: "Priest",
    level: 100,
    createdAt: "2016-08-16T18:07:30.000Z",
    updatedAt: "2016-08-16T18:07:30.000Z",
    guildID: 1,
    factionId: 1
  },
  {
    id: 2,
    name: "Hansgar",
    race: "Orc",
    class: "Warrior",
    level: 100,
    createdAt: "2016-08-16T18:08:00.000Z",
    updatedAt: "2016-08-16T18:08:00.000Z",
    guildID: 1,
    factionId: 1
  }
]

```
