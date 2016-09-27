# angularjs
AngularJS 1.5 Workshop Source Starter Templates and Example Codes

The sample code listed here are used for AngularJS Training offered by NodeSense/Gopalakrishnan Subramani, workshop, ramp-up, explore futures of AngularJS.


Run the below commands to get started

First checkout/clone the repository or download the zip and extract the files

Open command line/terminal window, cd into extracted/cloned directory

    > npm install
 

Once installation done, you can start the web-server that serves angular files 

    > npm start

This starts Express server on port 3000.

open your browser http://localhost:3000  
make sure that you use the right port number

When you see Welcome to Angular message, your setup is ready, now ready to start the hands-on.

== API Server == 

We have API server that provides GET, PUT, POST and DELETE methods, handles CORS, Authentication.
To start API server, open second command line, cd into angularjs-workshop folder.

Run the below command, this starts api-server at port 7070


   > npm run api-server



we have below apis, products are taken from wikipedia smart phone page

    1. /api/products
    2. /api/brands
    3. /api/cities
    4. /api/states
    
we also have delayed resonse apis, useful for promise.all during promise workshop. Delayed api adds random 3-8 seconds delay before response.

    1. /delayed/api/products
    2. /delayed/api/brands
    3. /delayed/api/cities
    4. /delayed/api/states
  
You can enable simple token authentication by passing command line authEnabled. Note, Authentication is not enabled by default.
 
   > npm run api-server authEnabled


We have three users with hardcoded password.

    staff: staff
    password: staff

    username: user
    password: user

    username: admin
    password: admin

To Authenticate with the server, the client should call below api

    POST http://localhost:7070/authenticate

must send url-form encoded key/values, with 'username' and 'password' field


Server validate username and password, send JSON reply with serialized user object (without password), user id, JWT Token.

After Authentication, the client should send "X-Auth-Token" header with token or Authorization with Bearer

    Example:

    X-Auth-Token: fasjlfksadlflkfaslkfasdlhklfdasdlkjflskd.fakjlsadjl

    or 

    Authorization: Bearer flfkalsdjflkajdfalflkjdslkfjaslk.kfalsjdklfajsl

== Cors ==

Cors is included by default, to disable Cors, command line "noCors" while running the server. We disable cors for demonstration purpose.

       > npm run api-server noCors