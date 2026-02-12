This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Exercise from A Web fullStack development course (Front + Next API with Prisma and Postgres DB)

**2026/02/02 - 2026/02/03**
- Migration AWS => HostArmada (scp)
- Dump SQL : MariaDB => PostgreSQL with pgloader
- ended up here after problematic Supabase (ipv4) and Vercel deployment issues (Prisma V7)
- the project is quite empty now : I need to populate.

**Next : Docker in vps integration !**


## Ennoncé de l'exercice

L'énnoncé de départ se trouve dans le projet deezer29.  
Il s'agit ici dun fork de ce micro-projet de départ, qui prend en compte la nouvelle version de Prisma : V7,  
ainsi que l'abandon des intéractions avec Supabase et le déploiement Vercel.  

- **Next.JS : Front + Back avec sa propre API**
- **Base de donnée : PostgresSQL**

**08/02/2026**
## En prévision :

- déploiement sur un vps
- conteneurisation docker, accessible au travers d'un reverse-proxy
- Rendre opérationnelle la fonction de recherche.
- Implémentation des requêtes POST pour pouvoir ajouter de nouvelles données (Albums, pistes, images,...)

**11-02-2026**
### DEV BRANCH

**12-02-26**
# Projet déployé sur un VPS HostArmada
## (docker / reverse proxy) :
[nsp1.zetastart.link](https://nsp1.zetastart.link/)

Les datas ont été restaurées à l'aide d'exports SQL (dbeaver), et insérées dans  
une base postgres conteneurisée, à partir d'un volume partagé (réservé aux dumps)  

