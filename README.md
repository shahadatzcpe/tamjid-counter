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
<span class="counter">1,234,567.00</span>
<span>$</span><span class="counter">1.99</span>
<span class="counter">12345</span>
```

**jQuery**

```
$('.counter').tamjidCounter();
```

**or with extra parameters**

```
 $('.counter').tamjidCounter({
      duration: 3000,
      delay: 0
    });
```

`duration` - The total duration of the count up animation

`delay` - The delay in milliseconds per number count up
