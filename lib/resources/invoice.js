module.exports = function (client) {
	return {
		create : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "invoice";
				var data = {};
				try{
					req.items.map(function(item,i){
						return req['items['+i+']'] = item;
					})
					req.items_price.map(function(price,i){
						return req['items_price['+i+']'] = price;
					})
					delete req.items;
					delete req.items_price;
				}catch(err){
					return reject("Parameter error");
				}
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		send : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "invoice/send";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		charge : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "invoice/charge";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		capture : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "invoice/capture";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		refund : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "invoice/refund";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		}
	}
};