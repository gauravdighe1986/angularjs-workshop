== Cart Module ==

Cart Module handles shopping cart, add/remove products into shoping cart

It uses the following storages using provider configuration.

1. localStorage
2. sessionStorage

cartService is a provider, must be configured to use either local or sessionStorage.

== Action ==
1. Copy below to index.html file


  <script src="app/cart/cart.storage.js" type="text/javascript">
  </script>

  <script src="app/cart/cart.module.js" type="text/javascript">
  </script>

  <script src="app/cart/cart.config.js" type="text/javascript">
  </script>
  
  <script src="app/cart/cart.controllers.js" type="text/javascript">
  </script>

  <script src="app/cart/cart.services.js" type="text/javascript">
  </script>

  