FROM nginx:alpine

LABEL author="Derek Pedersen"

COPY ./dist /usr/share/nginx/html

EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off;" ]