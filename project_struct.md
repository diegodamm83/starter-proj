Directories breakdown

Backend: backend logic
	prisma: manages prisma shcema
	db: instantiates prisma client
	routes: handles bakend routes
	controllers: logic of  functions executed within routes

use node 18.17.0

Posgres generte docker script
docker run --name some-postgres \          
  -e POSTGRES_USER=postgres \                                                            
  -e POSTGRES_PASSWORD=admin \                                                           
  -e POSTGRES_DB=pibby \                                                                 
  -d postgres