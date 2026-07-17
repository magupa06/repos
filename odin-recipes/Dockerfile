# Sitio estatico (HTML/CSS/JS, sin build ni backend) -> lo servimos con nginx
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
/cl