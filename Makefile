# change container-name to your own

build:
	docker build -t container-name .

run:
	docker run --rm -p 3000:3000 container-name

run-dev:
	docker run \
		-p 3000:3000 \
		-p 9229:9229 \
		-v $(PWD):/app \
		-v /app/node_modules \
		container-name nodemon --inspect=0.0.0.0:9229 server.js