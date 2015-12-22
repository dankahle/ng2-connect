
according to docs you're supposed to be able to stop bubbling if binding expression returns
falsy. Doesn't work here though, ended up having to $event.stopPropagation to stop it

 As far as custom events, can't bind to them unless you're on the component/directive that
 has the event, so no way to catch them from above.
