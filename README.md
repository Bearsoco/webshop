# webshop-project

+ `npm i --save`
+ `npm run start` or `sails console` to run the project

+ I also dockerized it!

After running the project you can test it on postman:

```
curl --location --request POST 'http://localhost:8080/order' \
--header 'Content-Type: application/json' \
--header 'Cookie: sails.sid=s%3AGXr3x1KqnyFz8-1bR7BRTiP79A0FQILQ.e3nT8mXrum8hAh3JdCNXEbvx5ymHlbMei8JJX0vPhkA' \
--data-raw '{
    "customer": 1,
    "products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 2,
            "quantity": 1
        }
    ],
    "shipping_address": "The Netherlands",
    "payment_method": "CREDIT_CARD"
}'
```

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Sat May 20 2023 12:05:02 GMT+0200 (Central European Summer Time) using Sails v1.5.4.

<!-- Internally, Sails used [`sails-generate@2.0.8`](https://github.com/balderdashy/sails-generate/tree/v2.0.8/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

