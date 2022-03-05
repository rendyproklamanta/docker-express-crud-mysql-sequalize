# Express-Sequelize-MySQL With Dockerfile and docker-compose.yml


**Prerequisite**

1. Install [node](https://nodejs.org/de/download/)
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install/)
3. Install [XAMPP](https://www.apachefriends.org/download.html) For Running Local Mysql Server

4. Create a file named `.env` in the root directory & copy the texts from `.env.example`
5. Create a MySql DB & change the value of _database_ in `.env`

**How to run without docker**

1. Go to the project root directory
2. Run `yarn install` on terminal/CMD
3. Then run `yarn global add sequelize-cli nodemon` on terminal/CMD

6. Then run migrations. The commands for migration & creating model are listed below in **DB Commands** section
7. Go back to root directory and run `yarn start`
8. Now your backend will be running on [localhost:3000](http://localhost:3000)

**DB Commands**

1. Open XAMPP/MAMP and start mysql service
2. Add user root with any host in mysql : 

```bash
CREATE USER 'root_any'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'root_any'@'%';
```
3. Edit database config in .env
4. If you running with docker. Dont forget to change database host to : 
```
host.docker.internal
```
If you running without docker using yarn start, change host to : <br> 
```
localhost
```
5. For migration, run `sequelize db:migrate`
6. For creating a model, run `sequelize model:create --name TableName --attributes columnName:string, ...`

All other **sequelize** commands are available here [Sequelize Documentation](https://sequelize.org/master/manual/model-basics.html)

<br>

**Running on Dockerfile only**

The _Dockerfile_ is also included. You need to just build for production with live mysql credential using :

Build with dockerfile
```bash
docker build -t express-sequelize-mysql .
```

Build with custom dockerfile.test
```bash
docker build -f Dockerfile.test -t express-sequelize-mysql .
```

Run
```bash
docker run --rm -it -p 3000:3000 express-sequelize-mysql
```

Open URL in browser : http://localhost:3000
<br><br>

> Note : You can change docker name {express-sequelize-mysql} with your own

<br><br>

# Run with Docker Compose support hot / live reload

<br>

<b>Production</b>

Run not in background:
```bash
docker-compose up -t express-sequelize-mysql
```

Run in background
```bash
docker-compose up -t express-sequelize-mysql --build --force-recreate --no-deps -d
```
<br>
<b>Local development</b>

1. The service can be run on the background with command :
```bash
docker-compose -f docker-compose.dev.yml up --build --force-recreate --no-deps -d
```
2. And goto url http://localhost:3000
3. To test edit text in server.js , save and reload web to check hot-reload work

<br>

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

With custom docker-compose
```bash
docker-compose -f docker-compose.dev.yml down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:
```bash
docker-compose down --rmi all
```
