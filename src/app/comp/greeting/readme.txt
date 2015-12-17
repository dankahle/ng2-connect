
app and greeting both have Greeter. greeting can use app's Greeter as it's available in the
injector, but still needs the reference (import) to know what it is. greeting can also override
the app's Greeting in its own injector, which it accomplishes by using it's bindings prop
