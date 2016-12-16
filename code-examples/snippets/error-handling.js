 .config(function($provide) {
    $provide.decorator('$exceptionHandler', ['$log', '$delegate',
      function($log, $delegate) {
        return function(exception, cause) {
          $log.debug('Default exception handler.');
          $log.debug(" cause ", typeof cause, cause);
          $log.debug("error ", exception.message);
          $delegate(exception, cause);
        };
      }
    ]);
 })


 //To throw error

 throw new Error("exception from about");