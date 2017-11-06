Tamjid Counter
==========

A [jQuery](https://jquery.com/) plugin that animates a number from zero (counting up towards it). It supports counting up and bottom.

Usage
=====

**Include**

```
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="tamjid-counter.min.js"></script>
```

**HTML**

```
<span class="counter">450</span>
<span>$</span><span class="counter">300</span>
<span class="counter">4000</span><span>+</span>
```

**jQuery**

```
$(document).ready(function(){
  $('.counter').tamjidCounter();
});
```

**or with extra parameters**

```
$(document).ready(function(){
 $('.counter').tamjidCounter({
      duration: 3000,
      delay: 0
    });
});
```

`duration` - The total duration of the count up animation.

`delay` - The delay in milliseconds per number count up.
