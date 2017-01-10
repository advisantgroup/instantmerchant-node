module.exports = function (client) {
	return {
		charge : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "charge";
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
				var path = "capture";
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
				var path = "refund";
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