### IaaS (Insult as a Service)

Clone:

```
$ git clone https://github.com/plvhx/iaas.git
```

Install deps and run:

```
$ cd iaas
$ npm install
[...]
$ npm run dev

> iaas@1.0.0 dev
> nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*.ts
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/server.ts`
[dotenv@17.2.0] injecting env (2) from .env (tip: ⚙️  write to custom object with { processEnv: myObject })
Server running on port 3000
```

Get your insult of the day:

```
$ curl -X GET http://localhost:3000/insult
{"id":19,"content":"Boy, sit your $5 dollar ass down before I make change!"}
```
