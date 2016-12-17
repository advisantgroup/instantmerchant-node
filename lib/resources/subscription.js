module.exports = function (client) {
	return {
		renew : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "subscription/renew";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		updateCard : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "subscription/update_card";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		cancel : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "subscription/cancel";
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