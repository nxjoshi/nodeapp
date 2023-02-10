'use strict'
module.exports = function(server) {
    var data="";
    var dataprikey = "";
    //route test
        server.route({
            method: 'GET',
            path: '/',
            handler: function (pedido){
        
                var data = {
                    msg: 'API Calculator'
                };
        
                return data;
            }
        });

        server.route({

            method: 'GET',
            path: '/rsakey',
            handler: function(pedido){
          

                const { generateKeyPair } = require('crypto');
                generateKeyPair('ec', {
                  namedCurve: 'secp256k1',   // Options
                  publicKeyEncoding: {
                    type: 'spki',
                    format: 'der'
                  },
                  privateKeyEncoding: {
                    type: 'pkcs8',
                    format: 'der'
                  }
                },
                 (err, publicKey, privateKey) => { // Callback function
                       if(!err)
                       {
                                  data =  publicKey.toString('hex') ;
                       
                                 dataprikey = privateKey.toString('hex')
                       }
                       else
                       {
                         // Prints error
                         console.log("Errr is: ", err);
                       }

                       
                  });   
                  var output = "Public Key :"; 
                  var finalPubkey = output.concat(" ",data);

                  var outprikey = "PrivateKey: "
                  var finalprikey = outprikey.concat(" ",dataprikey);

                  var finalrespone = finalPubkey.concat(finalprikey);



                  return  finalrespone;
            }
        });
}