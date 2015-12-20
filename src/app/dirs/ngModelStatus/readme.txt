ngModelStatus

this show how to tap into another directive, as you can inject it if it's on the same element.
It does so with ng-model.

This also shows how to get a handle on the parent and pass it to a child (surely an anti-pattern)
but also how to subscribe to a parent's event. this is born of the need to $watch a parent's
value, not sure how else to do it, as when the value changes an event must be thrown and
subscribed to, but how to do that? Gone are the heady days of broadcast messages

observables
Shows how to subscribe manually to an observable. Need to call the toRx() method to get its
Subject which has a subscribe method.
