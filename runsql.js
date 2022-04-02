/* gifting this antipattern to the  future
use this to bypass the loopback2 orm allowing one to run things like distinct and group queries 
pass in any  model that's backed by  an sql datasource  and  a query 

use this like:
    const foo =  await lb2-runsql.run( <your_lb_model_here>, "select 1"  ) .catch (err =>{ debug("runsql",  err )}) ; 
      
    will return an array of rows with cooked keys  eg [ {"colname": "colvalue"}....}
  
XXXX this is a terrible idea; don't use it
*/
exports.run = function (modelclass,  sqlquery ) { 
  return new Promise ( async function ( resolve, reject)  {
    //experience the calm rational sytanx of async 
    try {
      const connec = hra_statement.dataSource.connector;
      connec.execute  ( sqlquery, [],  (err, res) =>  { 
        if  ( err)  {
          console.error(err, err.stack, query); 
          reject( res); 
        }
        else {
          resolve( res ); 
        }
      }); 
    } catch (err) { 
      console.erro(err,  err.stack);
    }
  });
};

