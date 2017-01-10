# Instant Merchant API for Node.JS.
=========

A Node.JS reference implementation of the Instant Merchant API. See the full docs at <https://advisantgroup.github.io/InstantMerchant/?javascript/>

* Official
* REST API
* JSON Data Format
* Promise Implementation

## Installation
```bash
  npm install instantmerchant-node
```

## Configuration
```js
var Imn = require('instantmerchant-node'),
  	instant = new Imn({
		  key : "your IM API key",
		  secret : "your secret key",
      version : "v1 (or) v2",
      mode : "live (or) test"
	});
```

## API Overview

Every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
	var params = {
		name: 'Name',
	    username: 'username',
	    email: 'email',
	    address: 'address',
	    city: 'city',
	    zip: zip code,
	    state: 'state',
	    country: 'US' //us, usa, US, USA
	};
    instant.customer.create(params).then(function(res){
    	//Success
    },function(err){
    	//Error Handling
    }).catch(function(err){
    	//Error Handling
    });
```
### Available resources & methods

*Where you see `params` it is a plain JavaScript object, e.g. `{ name: 'foo' }`*

 * invoice
  * [`create(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#create-invoice)
  * [`send(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#send-invoice)
  * [`charge(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#charge-invoice)
  * [`capture(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#capture-invoice)
  * [`refund(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#refund)
 * direct
  * [`charge(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#create-charge)
  * [`capture(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#capture-charge)
  * [`refund(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#refund11)
 * customer
  * [`create(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#create-customer)
 * subscription
  * [`renew(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#renew-subscription)
  * [`updateCard(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#update-card)
  * [`cancel(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#cancel-subscription)
 * card
  * [`add(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#create-card)
  * [`get(params)`](https://advisantgroup.github.io/InstantMerchant/?javascript#retrieve-card)


## Release History
```
* 1.0.0 Initial release
* 1.0.2 Subscription api added
* 1.0.3 Cards api added
* 1.1.0 Documentation updated
```