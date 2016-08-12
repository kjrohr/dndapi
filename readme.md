# Guilds and Players API

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

### Debug Usage

``` javascript

DEBUG=true node src/server.js

```

#### Debug End Points

##### src/server.js

``` javascript

====================================
Server is running on port:
====================================
3000
Thu Aug 11 2016 23:52:11 GMT-0400 (EDT)

```

##### src/models/db.js

``` javascript

====================================
Database syncing
====================================
success
Thu Aug 11 2016 23:52:11 GMT-0400 (EDT)


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
  guildID: 1
}

```

### GET /api/v1/players
Read all players

``` javascript

[
  {
    id: 1,
    name: "Lyél",
    faction: "Horde",
    race: "Forsaken",
    class: "Priest",
    level: 100,
    createdAt: "2016-08-11T23:24:19.000Z",
    updatedAt: "2016-08-11T23:43:24.000Z",
    guildID: 1
  },
  {
    id: 2,  
    name: "Hansgar",
    faction: "Horde",
    race: "Orc",
    class: "Warrior",
    level: 100,
    createdAt: "2016-08-11T23:24:28.000Z",
    updatedAt: "2016-08-11T23:24:28.000Z",
    guildID: 1
  },
  {
    id: 3,
    name: "Luxayne",
    faction: "Horde",
    race: "Blood Elf",
    class: "Priest",
    level: 100,
    createdAt: "2016-08-11T23:24:37.000Z",
    updatedAt: "2016-08-11T23:24:37.000Z",
    guildID: 1
  },
  {
    id: 4,
    name: "Hordespride",
    faction: "Horde",
    race: "Forsaken",
    class: "Mage",
    level: 100,
    createdAt: "2016-08-11T23:24:50.000Z",
    updatedAt: "2016-08-11T23:24:50.000Z",
    guildID: 1
  },
  {
    id: 5,
    name: "Joker",
    faction: "Horde",
    race: "Blood Elf",
    class: "Death Knight",
    level: 100,
    createdAt: "2016-08-11T23:25:05.000Z",
    updatedAt: "2016-08-11T23:25:05.000Z",
    guildID: 1
  },
  {
    id: 6,
    name: "Franzok",
    faction: "Horde",
    race: "Orc",
    class: "Warrior",
    level: 100,
    createdAt: "2016-08-11T23:25:20.000Z",
    updatedAt: "2016-08-11T23:25:20.000Z",
    guildID: 1  
  },
  {
    id: 7,
    name: "Ringohunt",
    faction: "Horde",
    race: "Orc",
    class: "Hunter",
    level: 100,
    createdAt: "2016-08-11T23:25:34.000Z",
    updatedAt: "2016-08-11T23:25:34.000Z",
    guildID: 1
  },  
  {
    id: 8,
    name: "Starfalls",
    faction: "Horde",
    race: "Tauren",
    class: "Druid",
    level: 100,
    createdAt: "2016-08-11T23:25:56.000Z",
    updatedAt: "2016-08-11T23:25:56.000Z",
    guildID: 2
  }
]

```

### GET /api/v1/players/:id
Read one player by id

``` javascript

{
  id: 1,
  name: "Lyél",
  faction: "Horde",
  race: "Forsaken",
  class: "Priest",
  level: 100,
  createdAt: "2016-08-11T23:24:19.000Z",
  updatedAt: "2016-08-11T23:43:24.000Z",
  guildID: 1
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
  guildID: 4
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
    description: "PVE, Normal and Heroic Raiding",
    createdAt: "2016-08-11T23:20:23.000Z",
    updatedAt: "2016-08-11T23:20:23.000Z"
  },
  {
    id: 2,
    name: "Dead Paladin Society",
    description: "Casual and Social",
    createdAt: "2016-08-11T23:20:47.000Z",
    updatedAt: "2016-08-11T23:20:47.000Z"
  },
  {
    id: 3,
    name: "Unbroken",
    description: "Casual Raiding",
    createdAt: "2016-08-11T23:21:05.000Z",
    updatedAt: "2016-08-11T23:21:05.000Z"
  },
  {
    id: 4,
    name: "Anemnesis",
    description: "Raiding is your second job.",
    createdAt: "2016-08-11T23:21:17.000Z",
    updatedAt: "2016-08-11T23:21:17.000Z"
  }
]

```

### GET /api/v1/guilds/:id
Read on guild by id

``` javascript

{
  id: 1,
  name: "Latency",
  description: "PVE, Normal and Heroic Raiding",
  createdAt: "2016-08-11T23:20:23.000Z",
  updatedAt: "2016-08-11T23:20:23.000Z",
  players: [
    {
      id: 1,
      name: "Lyél",
      faction: "Horde",
      race: "Forsaken",
      class: "Priest",
      level: 100,
      createdAt: "2016-08-11T23:24:19.000Z",
      updatedAt: "2016-08-11T23:43:24.000Z",
      guildID: 1
    }
  ]
}

```

### GET /api/v1/guilds/:id/players
Show all the players for a specific guild

``` javascript

[
  {
    id: 8,
    name: "Starfalls",
    faction: "Horde",
    race: "Tauren",
    class: "Druid",
    level: 100,
    createdAt: "2016-08-11T23:25:56.000Z",
    updatedAt: "2016-08-11T23:25:56.000Z",
    guildID: 2
  }
]

```

### POST /api/v1/guilds/:id
Update an guild

``` javascript

{
  id: 3,
  name: "Unbroken",
  description: "Casual Raiding",
  createdAt: "2016-08-11T23:21:05.000Z",
  updatedAt: "2016-08-11T23:21:05.000Z",
  players: [ ]
}

```

### DELETE /api/v1/guilds/:id
Delete an guild

``` javascript

  1

```
