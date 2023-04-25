=== Dish Menu Plugin ===

## This project is a part of our learning circle

1. Initial steps
These steps should be done only once.

Some actions require admin access. In thoses cases you will be asked to enter your Mac password.

1.1 Bind your local IP to the site's domain name
Put the following into your /etc/hosts by running a command (Admin access is needed):

sudo sh -c 'echo "127.0.0.1 nisaya.local" >> /etc/hosts'

1.2 Generate SSL certificates
Run the following in terminal (Admin access is needed to import an SSL certificate into a Key Chain):

./bin/setup-ssl.sh
./bin/setup-hooks.sh

2. How to start and stop Docker containers
To start Docker Containers use the command:

docker-compose up -d
To stop use the following:

docker-compose down
3. WP Admin
To login into WP-Admin use these credentials:

Username: admin Password: password
