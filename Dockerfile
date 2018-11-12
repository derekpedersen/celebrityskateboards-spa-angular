FROM nginx:alpine

LABEL author="Derek Pedersen"

COPY ./dist/celebrityskateboards-spa-angular /usr/share/nginx/html

EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off;" ]