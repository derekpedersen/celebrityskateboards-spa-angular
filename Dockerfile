FROM nginx:alpine

LABEL author="Derek Pedersen"

COPY ./dist/celebrityskateboards-spa-angular /usr/share/nginx/html

COPY ./.nginx/site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off;" ]