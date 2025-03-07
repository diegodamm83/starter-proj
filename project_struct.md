Directories breakdown

Backend: backend logic
	prisma: manages prisma shcema
	db: instantiates prisma client
	routes: handles bakend routes
	controllers: logic of  functions executed within routes

use node 18.17.0

Posgres generte docker script
docker run --name postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres