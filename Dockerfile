#This image will only be run for production testing and production.

# Use the official image as a parent image.
FROM node

###Process Environment Variables#######################################
#Set server Url
ENV URL="http://ec2-35-165-222-183.us-west-2.compute.amazonaws.com:4242"

###Process Environment Variables#######################################

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 4242

# Run the specified command within the container.
CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .